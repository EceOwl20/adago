"use client"
import { useState, useEffect } from 'react';
import Values from "./component/common/values.jsx";

import HomeVilla from "./component/common/HomeVilla.jsx";
import ContactEmail from "./component/common/contactEmail.jsx";

import { flattenAttributes } from "@/lib/utils.jsx";
import qs from "qs";

const homePageQuery = (locale) => qs.stringify({
  populate:{
    blocks:{
      populate:{
        Slider:{
           populate:{
            photo:{
              fields:["url", "alternativeText"]
            }
           }
        },
        
      }
    },
  },
  locale:locale
});
async function getStrapiData(path, locale="en") {
  const baseUrl = "http://127.0.0.1:1337";
  const url=new URL(path, baseUrl);
  url.search=homePageQuery(locale);
  console.log(url.href);
  
  try{
    const response = await fetch(url.href, {cache:'no-store'});
    const data = await response.json();
    const flattenData = flattenAttributes(data);
    console.dir(flattenData, {depth:null});
    return flattenData;
  } catch (error) {
    console.log(error);
  }
}


export default function Home() {
  const [locale, setLocale] = useState('1');
  const [strapiData, setStrapiData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getStrapiData(`/api/homes/${locale}`);
      setStrapiData(data);
    };
    fetchData();
  }, [locale]);

  if (!strapiData) return <div>Loading...</div>;

  const {blocks} = strapiData;

  return (
    <div className="flex flex-col gap-[140px]">
      <div className='flex z-[9999] gap-4'>
        <button onClick={() => setLocale('2')}>Türkçe</button>
        <button onClick={() => setLocale('3')}>Русский</button>
        <button onClick={() => setLocale('1')}>English</button>
      </div>
      <HomeVilla data={blocks[0]}/>
      <Values/>
      <ContactEmail/>
      

    </div>
  );
}
