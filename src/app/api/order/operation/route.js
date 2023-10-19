import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//  Read
export async function GET() {
    try {
        await prisma.$transaction(async (tx) => {
          // Use Prisma aggregation functions within the transaction
          const avgResult = await prisma.order.aggregate({
            _avg: {
                total: true, 
            },
          });
    
          const countResult = await prisma.order.aggregate({
            _count: {
              where: {
                total: true, 
              },
            },
          });
    
          const maxResult = await prisma.order.aggregate({
            _max: {
                total: true, 
            },
          });
    
          const sumResult = await prisma.order.aggregate({
            _sum: {
                total: true,
            },
          });
    
          
    
          // If any error occurs, the transaction will be rolled back
        });
    
        res.status(200).json({ avgResult, countResult, maxResult, sumResult });
      } catch (error) {
        // Handle errors and return an appropriate response
        res.status(500).json({ error: 'An error occurred' });
      }
}



