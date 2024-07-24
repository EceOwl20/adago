import React from "react";
import qs from "qs";
import { flattenAttributes } from "@/lib/utils";

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

const layoutPageQuery = (locale) =>
  qs.stringify({
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

  const layoutMenubarQuery = (locale) =>
    qs.stringify({
      populate: {
        submenu: {
          populate: {
            concept: {
              populate: true,
            },
            rooms: {
              populate: true,
            },
            floor: {
              populate: true,
            },
            layout: {
              populate: true,
            },
          },
        },
      },
      locale: locale,
    });

const homePageQuery = (locale) =>
  qs.stringify({
    populate: {
      blocks: {
        populate: {
          Slider: {
            populate: {
              photo: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
      about:{
        populate:{
          valueImage:{
            fields:["url","alternativeText"],
          }
        }
      }
    },
    locale: locale,
  });

  const conceptPageQuery = (locale) =>
    qs.stringify({
      populate: {
        section: {
          populate: {
            block: {
              populate: true
            },
            block2: {
              populate: true
            },
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
       
      },
      locale: locale,
    });

  const projectPageQuery = (locale) =>
    qs.stringify({
      populate: {
        section: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            button:{
              populate: true
            }
          },
        },
      },
      locale: locale,
    });

    const floorPageQuery = (locale) =>
      qs.stringify({
        populate: {
          section: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              image2: {
                fields: ["url", "alternativeText"],
              },
              image3: {
                fields: ["url", "alternativeText"],
              },
              button:{
                populate: true
              },
              button2:{
                populate: true
              },
              button3:{
                populate: true
              },
            },
          },
        },
        locale: locale,
      });

      const layoutplanPageQuery = (locale) =>
        qs.stringify({
          populate: {
            section: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
                
              },
            },
          },
          locale: locale,
        });


export async function getGlobalPageData(locale, page) {
  let langNumber;
  switch (locale) {
    case "EN":
      langNumber = 1;
      break;
    case "TR":
      langNumber = 2;
      break;
    case "RU":
      langNumber = 3;
      break;

    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }

  console.log(langNumber + " langNumber");

  const url = new URL(`/api/${page}/${langNumber}`, "http://127.0.0.1:1337");
  console.log(url);
  url.search = layoutPageQuery(locale);
  return await fetchData(url.href);
}

export async function getMenubarData(locale, page) {
  let langNumber;
  switch (locale) {
    case "EN":
      langNumber = 1;
      break;
    case "TR":
      langNumber = 2;
      break;
    case "RU":
      langNumber = 3;
      break;

    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }

  console.log(langNumber + " langNumber");

  const url = new URL(`/api/${page}/${langNumber}`, "http://127.0.0.1:1337");
  console.log(url);
  url.search = layoutMenubarQuery(locale);
  return await fetchData(url.href);
}

export async function getHomePageData(locale, page) {
  let langNumber;
  switch (locale) {
    case "EN":
      langNumber = 1;
      break;
    case "TR":
      langNumber = 2;
      break;
    case "RU":
      langNumber = 3;
      break;

    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }

  console.log(langNumber + " langNumber");

  const url = new URL(`/api/${page}/${langNumber}`, "http://127.0.0.1:1337");
  console.log(url);
  url.search = homePageQuery(locale);
  return await fetchData(url.href);
}

export async function getProjectPageData(locale, page) {
  let langNumber;
  switch (locale) {
    case "EN":
      langNumber = 1;
      break;
    case "TR":
      langNumber = 2;
      break;
    case "RU":
      langNumber = 3;
      break;

    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }

  console.log(langNumber + " langNumber");

  const url = new URL(`/api/${page}/${langNumber}`, "http://127.0.0.1:1337");
  console.log(url);
  url.search = projectPageQuery(locale);
  return await fetchData(url.href);
}

export async function getFloorPageData(locale, page) {
  let langNumber;
  switch (locale) {
    case "EN":
      langNumber = 1;
      break;
    case "TR":
      langNumber = 2;
      break;
    case "RU":
      langNumber = 3;
      break;

    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }

  console.log(langNumber + " langNumber");

  const url = new URL(`/api/${page}/${langNumber}`, "http://127.0.0.1:1337");
  console.log(url);
  url.search = floorPageQuery(locale);
  return await fetchData(url.href);
}


export async function getLayoutPageData(locale, page) {
  let langNumber;
  switch (locale) {
    case "EN":
      langNumber = 1;
      break;
    case "TR":
      langNumber = 2;
      break;
    case "RU":
      langNumber = 3;
      break;

    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }

  console.log(langNumber + " langNumber");

  const url = new URL(`/api/${page}/${langNumber}`, "http://127.0.0.1:1337");
  console.log(url);
  url.search = layoutplanPageQuery(locale);
  return await fetchData(url.href);
}

export async function getConceptPageData(locale, page) {
  let langNumber;
  switch (locale) {
    case "EN":
      langNumber = 1;
      break;
    case "TR":
      langNumber = 2;
      break;
    case "RU":
      langNumber = 3;
      break;

    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }

  console.log(langNumber + " langNumber");

  const url = new URL(`/api/${page}/${langNumber}`, "http://127.0.0.1:1337");
  console.log(url);
  url.search = conceptPageQuery(locale);
  return await fetchData(url.href);
}


const data = () => {
  return <div></div>;
};

export default data;