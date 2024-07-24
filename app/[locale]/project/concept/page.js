import React from 'react'
import Concept from '../../component/common/Concept'
import { cookies } from "next/headers";
import { getConceptPageData } from "@/lib/data.js";


export default async function ConceptPage (){
  const cookieLanguage = cookies();
  const lang = cookieLanguage.get("language");
  const langValue = lang?.value;
  console.log("language " + langValue);

  const conceptData = await getConceptPageData(langValue, "concept-pages");

  return (
    <div>
        <Concept data={conceptData.section[0]}/>
    </div>
  )
}


