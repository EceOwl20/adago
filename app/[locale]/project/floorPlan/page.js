import React from 'react';
import FloorPlan from '../../component/common/FloorPlan';
import { cookies } from "next/headers";
import { getFloorPageData } from "@/lib/data.js";

export default async function FloorPage (){

  const cookieLanguage = cookies();
  const lang = cookieLanguage.get("language");
  const langValue = lang?.value;
  console.log("language " + langValue);

  const floorData = await getFloorPageData(langValue, "floor-pages");

  return (
    <div>
      <FloorPlan data={floorData.section[0]}/>
    </div>
  )
}


