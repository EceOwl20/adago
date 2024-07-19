import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/common/footer.jsx";
import qs from "qs";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import Navbar from "./component/common/navbar"


const inter = Inter({ subsets: ["latin"] });

async function fetchData(url) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
} 

export async function getGlobalPageData(){
  const url = new URL("/api/global","http://127.0.0.1:1337");

  url.search = qs.stringify({
    populate: [
      "header.institutional",
      "header.phoneText",
      "header.contact",
      "header.project",
      "header.logoImage",
    ],
  })
  return await fetchData(url.href);
}


export const metadata = {
  title: " Adago ",
  description: "Adago website",
};

export default async function RootLayout({ children }) {
  const globalData = await getGlobalPageData();
  console.log(globalData);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar data={globalData.header}/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
