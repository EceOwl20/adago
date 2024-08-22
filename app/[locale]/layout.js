import { Inter } from "next/font/google";
import Head from 'next/head';
import Navbar from "./component/common/Navbar"
import "../../app/globals.css"
import Footer from "./component/common/Footer.jsx"
import { defaultLocale, locales } from "@/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Whatsapp from "./component/common/Whatsapp";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { GoogleTagManager } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
  // Get the language from the request headers
  const language = context.req.cookies.language || context.req.headers['accept-language'].split(',')[0].split('-')[0];

  context.res.setHeader('Set-Cookie', `language=${language}; Path=/; HttpOnly`);
}

export async function metadata({ locale }) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
    description: t("description"),
    keywords:t("keywords"),
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-32x32.png',
      apple: '/apple-touch-icon.png',
      other: [
        {
          rel: 'icon',
          url: '/android-chrome-192x192.png',
          sizes: '192x192',
        },
        {
          rel: 'icon',
          url: '/android-chrome-512x512.png',
          sizes: '512x512',
        },
        {
          rel: 'icon',
          url: '/favicon-16x16.png',
          sizes: '16x16',
        },
        
      ],
    },
    manifest: '/site.webmanifest',
  
  };
}

export default  function RootLayout({ children, language })  {

  if (!locales.includes(defaultLocale)) notFound();
  const messages = useMessages();

  return (
    <html lang={language}>
      <GoogleTagManager gtmId="GTM-MGTLX7MW" />
      <body className={inter.className}>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGTLX7MW"
height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript>

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
