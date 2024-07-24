import React from 'react'
import Project from "@/app/[locale]/component/common/Project";
import { cookies } from "next/headers";
import { getProjectPageData } from "@/lib/data.js";


export default async function ProjectPage() {
  const cookieLanguage = cookies();
  const lang = cookieLanguage.get("language");
  const langValue = lang?.value;
  console.log("language " + langValue);

  const strapiData = await getProjectPageData(langValue, "project-pages");
  console.log(strapiData.section[0]); 
  return (
    <div>
        <Project data={strapiData.section[0]}/>
    </div>
  )
}

