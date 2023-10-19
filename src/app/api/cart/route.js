import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//  Read
export async function GET() {
  try {
    const alls = await prisma.cart.findMany();
    return NextResponse.json({ data: alls });
  } catch (e) {
    console.log(e);
  }
}

// Insert
export async function POST() {
  try {
    const posts = await prisma.cart.create({
      data: {
        title: "title",
        sessionId: "1",
        token: "ajsdj1231212",
        status: "1",
        firstName: "Mahatab",
        middleName: "Hossain",
        lastName: "Roni",
        mobile: "01918723",
        email: "email1sa2@gmail.com",
        city: "khulna",
        country: "Bangladesh",
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
    
    const updates = await prisma.cart.update({
      where: { id: 1 },
      data: {
        title: "title",
        sessionId: "1",
        token: "ajsdj1231212",
        status: "1",
        firstName: "Mahatab",
        middleName: "Hossain",
        lastName: "Roni",
        mobile: "01918723",
        email: "email1sa2@gmail.com",
        city: "khulna",
        country: "Bangladesh",
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
    const deletes = await prisma.cart.delete({
       where: {id: 3}
    })
    return NextResponse.json({ data: deletes });
}
catch (e) {
    console.log(e)
}
}
