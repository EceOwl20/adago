import { Inter } from "next/font/google";
import Navbar from "./component/common/Navbar"
import "../../app/globals.css"
import Footer from "./component/common/Footer.jsx"
import { defaultLocale, locales } from "@/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Whatsapp from "./component/common/Whatsapp";


const inter = Inter({ subsets: ["latin"] });

export async function getGlobalPageData(){
  const url = new URL("/api/global",baseUrl);

  url.search = qs.stringify({
    populate:[
      "header.logoText",
    ]
  })
}

export async function getServerSideProps(context) {
  // Get the language from the request headers
  const language = context.req.headers['accept-language'];
  context.res.setHeader('Set-Cookie', `language=${language}; Path=/; HttpOnly`);
}

export const metadata = {
  title: "AdaGo",
  description: "AdaGo Website, Antalya",
};

export default function RootLayout({ children, language })  {
  if (!locales.includes(defaultLocale)) notFound();
  const messages = useMessages();

  return (
    <html lang={language}>
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
        <Navbar/>
        <Whatsapp/>
        {children}
        <Footer/>
        </NextIntlClientProvider>
        </body>
    </html>
  );
}
