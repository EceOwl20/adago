import "../../../app/globals.css";
import { defaultLocale, locales } from "@/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Menubar from "../component/common/Menubar";

// export const metadata = {
//   title: "Project villa - AdaGo",
//   description: "AdaGo Yapı İnşaat villa projeleri hakkında bilgi edinin.",
//   keywords: "villa project, AdaGo Yapı İnşaat",
// };

export default function ProjectLayout({ children, pageTitle }) {
  if (!locales.includes(defaultLocale)) notFound();
  const messages = useMessages();

  return (
    <div className="">
      {/* <Head>
        <title>{pageTitle} - AdaGo</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.title} />
      </Head> */}
      <NextIntlClientProvider messages={messages}>
      <Menubar />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
