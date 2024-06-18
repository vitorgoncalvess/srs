import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(_: any, searchParams: { params: { id: number } }) {
  const id = Number(searchParams.params.id);

  const section = await prisma.section.findFirst({
    where: {
      id,
    },
    include: {
      sensor: {
        where: {
          OR: [
            {
              type: "temperature",
            },
            {
              type: "umid",
            },
          ],
        },
        include: {
          sensor_data: {
            take: 1,
            orderBy: {
              id: "desc",
            },
          },
        },
      },
    },
  });

  return NextResponse.json(section);
}
