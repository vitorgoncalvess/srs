import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  const medians = await prisma.viewMedia.findMany();

  return NextResponse.json(medians);
}
