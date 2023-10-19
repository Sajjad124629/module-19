import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//  Read
export async function GET() {
  try {
    const alls = await prisma.product.findMany();
    return NextResponse.json({ data: alls });
  } catch (e) {
    console.log(e);
  }
}

// Insert
export async function POST() {
  try {
    const posts = await prisma.product.create({
      data: {
        firstName: "Mahatab",
        metaTitle: "Your Meta Title",
        slug: "your-category-slug",
        summary: "your-category-slug",
        price:100,
        discount: 10,
        userId: "1",
      },
    });

    return NextResponse.json({ data: posts });
  } catch (e) {
    console.log(e);
  }
}

//  Update
export async function PUT() {
  try {
    
    const updates = await prisma.product.update({
      where: { id: 1 },
      data: {
        firstName: "Mahatab",
        metaTitle: "Your Meta Title",
        slug: "your-category-slug",
        summary: "your-category-slug",
        price:100,
        discount: 10,
        userId: "1",
      },
    });
    return NextResponse.json({ data: updates });
  } catch (e) {
    console.log(e);
  }
}

// Delete
export async function DELETE() {
  try {
    const deletes = await prisma.product.delete({
       where: {id: 3}
    })
    return NextResponse.json({ data: deletes });
}
catch (e) {
    console.log(e)
}
}
