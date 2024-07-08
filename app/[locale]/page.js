import Image from "next/image";
import Contactus from "./component/common/Contactus.jsx"
import EmailSection from "./component/common/EmailSection.jsx"
import Values from "./component/common/Values.jsx";
import { defaultLocale, locales } from "@/config";

import HomeVilla from "./component/common/HomeVilla.jsx";
import ContactEmail from "./component/common/ContactEmail.jsx";
import RoomDetail from "./component/common/RoomDetail.jsx";

export default function Home() {
  return (
    <div className="flex flex-col gap-44">
      <HomeVilla/>
      <Values/>

    </div>
  );
}
