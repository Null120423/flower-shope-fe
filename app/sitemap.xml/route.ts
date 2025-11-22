import pool from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Helper function for database queries
async function query(sql: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(sql, params);
    return res.rows;
  } finally {
    client.release();
  }
}

export async function GET(request: NextRequest) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // Lấy danh sách blog posts
    let blogPosts: any[] = [];
    try {
      blogPosts = await query(`
        SELECT slug
        FROM blogs 
      `);
    } catch (error) {
      console.log("No blog posts found or database error:", error);
      blogPosts = [];
    }

    // Lấy danh sách properties
    let properties: any[] = [];
    try {
      properties = await query(`
        SELECT slug 
        FROM properties 
      `);
    } catch (error) {
      console.log("No properties found or database error:", error);
      properties = [];
    }

    const currentDate = new Date().toISOString();

    // Tạo XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

  <!-- Homepage -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Static pages -->
  <url>
    <loc>${baseUrl}/project/all</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/blog/all</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/booking</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog posts -->
  ${blogPosts
    .map(
      (post) => `
  <url>
    <loc>${baseUrl}/${post.slug}</loc>
    <lastmod>${
      post.updated_at ? new Date(post.updated_at).toISOString() : currentDate
    }</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join("")}

  <!-- Properties -->
  ${properties
    .map(
      (property) => `
  <url>
    <loc>${baseUrl}/project/${property.slug}</loc>
    <lastmod>${
      property.updated_at
        ? new Date(property.updated_at).toISOString()
        : currentDate
    }</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("")}

</urlset>`;

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);

    // Fallback sitemap với chỉ static pages
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://thinhvuongproperties.com";
    const currentDate = new Date().toISOString();

    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/project/all</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/all</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/booking</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    return new NextResponse(fallbackSitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  }
}
