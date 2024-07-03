import Image from "next/image";
import Contactus from "./component/common/contactus.jsx"
import EmailSection from "./component/common/emailSection.jsx"
import Values from "./component/common/values.jsx";
import { defaultLocale, locales } from "@/config";

import HomeVilla from "./component/common/homeVilla.jsx";
import ContactEmail from "./component/common/contactEmail.jsx";
import RoomDetail from "./component/common/roomDetail.jsx";

export default function Home() {
  return (
    <div className="flex flex-col gap-44">
      <HomeVilla/>
      <Values/>

    </div>
  );
}
