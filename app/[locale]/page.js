import Values from "./component/common/Values.jsx";
import { defaultLocale, locales } from "@/config";
import qs from "qs";
import HomeVilla from "./component/common/HomeVilla.jsx";
import { flattenAttributes } from "@/lib/utils.jsx";

const homePageQuery = qs.stringify({
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
        link:{
          populate:true
        }
      }
    },
  },
});
async function getStrapiData(path) {
  const baseUrl = "http://127.0.0.1:1337";
  const url=new URL(path, baseUrl);
  url.search=homePageQuery;
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

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  //console.log(strapiData);
  const {title, description, blocks} = strapiData;
  
  return (
    <div className="flex flex-col gap-72">
      <HomeVilla data={blocks[0]}/>
      <Values/>
    </div>
  );
}
