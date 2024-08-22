export async function GET() {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <url>
    <loc>https://adago.com.tr/</loc>
    <lastmod>2024-08-21T14:11:06+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://adago.com.tr/project</loc>
    <lastmod>2024-08-21T14:11:06+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://adago.com.tr/contactpage</loc>
    <lastmod>2024-08-21T14:11:06+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://adago.com.tr/project/concept</loc>
    <lastmod>2024-08-21T14:11:06+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://adago.com.tr/project/rooms</loc>
    <lastmod>2024-08-21T14:11:06+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://adago.com.tr/project/floorPlan</loc>
    <lastmod>2024-08-21T14:11:06+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://adago.com.tr/project/layoutPlan</loc>
    <lastmod>2024-08-21T14:11:06+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.64</priority>
  </url>
  
  </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  