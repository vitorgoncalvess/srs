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

export async function POST(_: any, searchParams: { params: { id: string } }) {
  await prisma.sensor.create({
    data: {
      type: "animal_temp",
      offset: 2,
      max: 42,
      min: 25,
      lat: Math.random() * 100,
      lon: Math.random() * 100,
      fk_section: Number(searchParams.params.id),
    },
  });

  return NextResponse.json({ message: "Sensor criado" });
}
