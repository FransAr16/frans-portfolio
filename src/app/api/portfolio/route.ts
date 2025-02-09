import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { title, category, image_url } = await req.json();

    // Insert into PostgreSQL using Prisma
    const newPortfolio = await prisma.portfolio.create({
      data: { title, category, image_url },
    });

    return NextResponse.json(newPortfolio);
  } catch (error) {
    return NextResponse.json({ error: "Failed to add data" }, { status: 500 });
  }
}
