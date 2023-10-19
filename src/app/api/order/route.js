import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//  Read
export async function GET() {
  try {
    const alls = await prisma.order.findMany();
    return NextResponse.json({ data: alls });
  } catch (e) {
    console.log(e);
  }
}

// Insert
export async function POST() {
  try {
    const posts = await prisma.order.create({
      data: {
        title: "Your Post Title",
        token: "ssdsd1312",
        subTotal: 1123,
        itemDiscount: 10,
        tax: 101,
        total: 1001,
        discount: 10,
        grandTotal: 1012,
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
    
    const updates = await prisma.order.update({
      where: { id: 1 },
      data: {
        title: "Your Post Title",
        token: "ssdsd1312",
        subTotal: 1123,
        itemDiscount: 10,
        tax: 101,
        total: 1001,
        discount: 10,
        grandTotal: 1012,
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
    const deletes = await prisma.order.delete({
       where: {id: 3}
    })
    return NextResponse.json({ data: deletes });
}
catch (e) {
    console.log(e)
}
}
