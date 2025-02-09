import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

// GET: Ambil semua projects dari database
export async function GET() {
  try {
    const projects = await prisma.projects.findMany(); // Ganti `projects` dengan `project` (singular) jika modelnya sesuai
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

// POST: Tambah project baru
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, category, image_url } = body;

    if (!title || !category || !image_url) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newProject = await prisma.projects.create({
      data: { title, category, image_url },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Error adding project:", error);
    return NextResponse.json({ error: "Failed to add project" }, { status: 500 });
  }
}
