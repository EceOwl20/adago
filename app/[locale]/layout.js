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
    keywords:t("keywords")
  };
}

export default  function RootLayout({ children, language })  {

  if (!locales.includes(defaultLocale)) notFound();
  const messages = useMessages();

  return (
    <html lang={language}>
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MGTLX7MW');`,
          }}
        />
        {/* End Google Tag Manager */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords}></meta>
        
      </Head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MGTLX7MW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
