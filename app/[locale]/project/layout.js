import Navbar from "../component/common/Navbar";
import "../../../app/globals.css";
import Footer from "../component/common/Footer";
import { defaultLocale, locales } from "@/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Menubar from "../component/common/Menubar";

// export async function getServerSideProps(context) {
//   // Get the language from the request headers
//   const language = context.req.headers['accept-language'];
//   context.res.setHeader('Set-Cookie', `language=${language}; Path=/; HttpOnly`);
// }

export default function Layout({ children, language }) {
  if (!locales.includes(defaultLocale)) notFound();
  const messages = useMessages();

  return (
    <div className="">
      <NextIntlClientProvider messages={messages}>
        <Menubar />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
