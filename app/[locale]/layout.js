import { Inter } from "next/font/google";
import Navbar from "./component/common/Navbar"
import "../../app/globals.css"
import Footer from "./component/common/Footer.jsx"
import { defaultLocale, locales } from "@/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Whatsapp from "./component/common/Whatsapp";
import { cookies } from 'next/headers';
import qs from "qs";
import { flattenAttributes } from "@/lib/utils";


const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
  // Get the language from the request headers
  const language = context.req.headers['accept-language'];
  context.res.setHeader('Set-Cookie', `language=${language}; Path=/; HttpOnly`);
}

async function fetchData(url, authToken = null) {
  const headers = {
    "Content-Type": "application/json",
    ...(authToken && { Authorization: `Bearer ${authToken}` }),
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const layoutPageQuery = (locale) => qs.stringify({
  populate: {
    NavFooter: {
      populate: {
        logoImage: {
          fields: ["url", "alternativeText"],
        },
        phoneText: {
          populate: true,
        },
        contact: {
          populate: true,
        },
        institutional: {
          populate: true,
        },
        project: {
          populate: true,
        },
      },
    },
  },
  locale: locale,
});

export async function getGlobalPageData(locale,page) { 
  let langNumber;
  locale=locale || "EN"
  switch (locale) {
    case 'EN':
      langNumber = 1;
      break;
    case 'TR':
      langNumber = 2;
      break;
    case 'RU':
      langNumber = 3;
      break;

    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }

  console.log(langNumber + " langNumber")

  const url = new URL(`/api/${page}/${langNumber}`, "http://127.0.0.1:1337");
  url.search = layoutPageQuery(locale);
  return await fetchData(url.href);
}



export const metadata = {
  title: "AdaGo",
  description: "AdaGo Website, Antalya",
};

export default async function RootLayout({ children, language })  {

  const cookieLanguage = cookies();
  const lang = cookieLanguage.get('language');
  const langValue=lang?.value;
  
  console.log("language " + langValue);
  const globalData = await getGlobalPageData(langValue, "layout-pages");

  if (!locales.includes(defaultLocale)) notFound();
  //const messages = useMessages();

  return (
    <html lang={language}>
      <body className={inter.className}>
      {/* <NextIntlClientProvider messages={messages}> */}
        <Navbar data={globalData.NavFooter[0]}/>
        <Whatsapp/>
        {children}
        <Footer data={globalData.NavFooter[0]}/>
        {/* </NextIntlClientProvider> */}
        </body>
    </html>
  );
}
