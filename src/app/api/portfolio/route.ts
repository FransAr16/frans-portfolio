import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Menghindari multiple PrismaClient instance di mode development
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { title, category, image_url } = body;

    if (!title || !category || !image_url) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Insert ke database dengan Prisma
    const newProject = await prisma.projects.create({
      data: { title, category, image_url },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Error adding project:", error);
    return NextResponse.json({ error: "Failed to add project" }, { status: 500 });
  }
}
