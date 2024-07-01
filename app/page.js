import Image from "next/image";
import Contactus from "./component/common/contactus.jsx"
import EmailSection from "./component/common/emailSection.jsx"
import Values from "./component/common/values.jsx";
import Villalar from "./component/common/villalar.jsx";
import Villatipleri from "@/app/component/common/villatipleri.jsx"

export default function Home() {
  return (
    <div className="flex flex-col gap-[40px] mt-[50px]">
      <Values/>
      <EmailSection/>
      <Contactus/>
      <Villalar/>
      <Villatipleri/>
      
    </div>
  );
}
