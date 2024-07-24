import Values from "./component/common/Values.jsx";
import HomeVilla from "./component/common/HomeVilla.jsx";
import { flattenAttributes } from "@/lib/utils.jsx";
import qs from "qs";
import { cookies } from "next/headers";
import { getHomePageData } from "@/lib/data.js";

export default async function Home() {
  const cookieLanguage = cookies();
  const lang = cookieLanguage.get("language");
  const langValue = lang?.value;
  console.log("language " + langValue);

  const strapiData = await getHomePageData(langValue, "homes");
  console.log(strapiData.blocks[0]);
  console.log(strapiData.about[0]);

  return (
    <div className="flex flex-col gap-72">
      <HomeVilla data={strapiData.blocks[0]}/>
      <Values data={strapiData.about[0]}/>
    </div>
  );
}
