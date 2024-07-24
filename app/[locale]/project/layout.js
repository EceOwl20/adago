import Navbar from "../component/common/Navbar";
import "../../../app/globals.css";
import Footer from "../component/common/Footer";
import { defaultLocale, locales } from "@/config";
import { notFound } from "next/navigation";
//import { NextIntlClientProvider, useMessages } from "next-intl";
import Menubar from "../component/common/Menubar";
import { cookies } from 'next/headers';
import qs from "qs";
import { flattenAttributes } from "@/lib/utils";
import {fetchData, layoutMenubarQuery, getMenubarData} from "@/lib/data"

// export async function getServerSideProps(context) {
//   // Get the language from the request headers
//   const language = context.req.headers['accept-language'];
//   context.res.setHeader('Set-Cookie', `language=${language}; Path=/; HttpOnly`);
// }

export default async function Layout({ children, language }) {
  const cookieLanguage = cookies();
  const lang = cookieLanguage.get('language');
  const langValue=lang?.value;
  
  console.log("language " + langValue);
  const menubarData = await getMenubarData(langValue, "menu-bars");

  if (!locales.includes(defaultLocale)) notFound();
  //const messages = useMessages();

  return (
    <div className="">
      {/* <NextIntlClientProvider messages={messages}> */}
        <Menubar data={menubarData.submenu[0]}/>
        {children}
      {/* </NextIntlClientProvider> */}
    </div>
  );
}
