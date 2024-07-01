import Image from "next/image";
import Contactus from "./component/common/contactus.jsx"
import EmailSection from "./component/common/emailSection.jsx"
import Values from "./component/common/values.jsx";

import HomeVilla from "./component/common/homeVilla.jsx";
import ContactEmail from "./component/common/contactEmail.jsx";
import Room from "./component/common/room.jsx";


export default function Home() {
  return (
    <div className="flex flex-col gap-[140px]">
      <HomeVilla/>
      <Values/>
      <ContactEmail/>
      <Room/>

    </div>
  );
}
