import React from 'react';
import LayoutPlan from '../../component/common/LayoutPlan';
import { cookies } from "next/headers";
import { getLayoutPageData } from "@/lib/data.js";

export default async function LayoutPage (){

  const cookieLanguage = cookies();
  const lang = cookieLanguage.get("language");
  const langValue = lang?.value;
  console.log("language " + langValue);

  const layoutData = await getLayoutPageData(langValue, "layout-plan-pages");

  return (
    <div className='flex'>
      <LayoutPlan data={layoutData.section[0]}/>
    </div>
  )
}


