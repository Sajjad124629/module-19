import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//  Read
export async function GET() {
  try {
    const alls = await prisma.product_meta.findMany();
    return NextResponse.json({ data: alls });
  } catch (e) {
    console.log(e);
  }
}

// Insert
export async function POST() {
  try {
    const posts = await prisma.product_meta.create({
      data: {
        key: "Mahatab",
        content: "Your Meta Title",
        productId: "1",
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
    
    const updates = await prisma.product_meta.update({
      where: { id: 1 },
      data: {
        key: "Mahatab",
        content: "Your Meta Title",
        productId: "1",
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
    const deletes = await prisma.product_meta.delete({
       where: {id: 3}
    })
    return NextResponse.json({ data: deletes });
}
catch (e) {
    console.log(e)
}
}
