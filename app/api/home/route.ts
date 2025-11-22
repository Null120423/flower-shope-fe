import pool from "@/lib/db";
import { blogFormatData, formatDataProperty } from "@/lib/helper";
import { NextRequest, NextResponse } from "next/server";
async function query(sql: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(sql, params);
    return res.rows;
  } finally {
    client.release();
  }
}
export async function GET() {
  try {
    const blogResult = await query(`
        SELECT *
        FROM blogs 
        ORDER BY "createdAt" desc
        LIMIT 6
      `);
    const propertyResult = await query(`
        SELECT *
        FROM properties 
        ORDER BY "isFeatured" desc, "createdAt" desc 
        LIMIT 3
      `);

    const featuredPropertyResult = await query(`
        SELECT *
        FROM properties 
        WHERE "isFeatured" = true 
        ORDER BY "createdAt" DESC 
        LIMIT 1
      `);
    const messagesResult = await query(`
        SELECT *
        FROM messages 
        ORDER BY "createdAt" DESC 
        LIMIT 4
      `);

    return NextResponse.json({
      success: true,
      data: {
        blogPosts: blogResult?.map((post) => blogFormatData(post)),
        properties: propertyResult?.map((property) =>
          formatDataProperty(property)
        ),
        featuredProperty: featuredPropertyResult?.[0]
          ? formatDataProperty(featuredPropertyResult[0])
          : null,
        recentMessages: messagesResult,
        stats: {
          totalBlogs: blogResult.length,
          totalProperties: propertyResult.length,
          totalMessages: messagesResult.length,
          hasFeaturedProperty: featuredPropertyResult[0] !== null,
        },
      },
    });
  } catch (error) {
    console.error("Home API Error:", error);
    return NextResponse.json({
      success: false,
      data: {
        blogPosts: [],
        properties: [],
        featuredProperty: null,
        recentMessages: [],
        stats: {
          totalBlogs: 0,
          totalProperties: 0,
          totalMessages: 0,
          hasFeaturedProperty: false,
        },
      },
    });
  }
}

// Optional: POST method to update homepage data or trigger cache refresh
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === "refresh-cache") {
      // You can implement cache refresh logic here
      return NextResponse.json({
        success: true,
        message: "Cache refreshed successfully",
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Home POST API Error:", error);
    return NextResponse.json(
      {
        error: "Có lỗi xảy ra khi xử lý yêu cầu",
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 }
    );
  }
}
