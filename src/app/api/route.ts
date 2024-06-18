import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  return NextResponse.json({ message: "bora" });
}

export async function POST() {
  const toCreate = [
    {
      i: 2,
      j: 5,
    },
    {
      i: 3,
      j: 5,
    },
    {
      i: 3,
      j: 6,
    },
    {
      i: 4,
      j: 6,
    },
    {
      i: 5,
      j: 6,
    },
    {
      i: 5,
      j: 7,
    },
    {
      i: 6,
      j: 7,
    },
    {
      i: 7,
      j: 7,
    },
    {
      i: 7,
      j: 8,
    },
    {
      i: 8,
      j: 8,
    },
    {
      i: 9,
      j: 9,
    },
    {
      i: 8,
      j: 9,
    },
    {
      i: 9,
      j: 10,
    },
    {
      i: 9,
      j: 8,
    },
    {
      i: 10,
      j: 8,
    },
    {
      i: 10,
      j: 9,
    },
    {
      i: 11,
      j: 8,
    },
    {
      i: 12,
      j: 8,
    },
    {
      i: 13,
      j: 7,
    },
    {
      i: 14,
      j: 6,
    },
    {
      i: 14,
      j: 5,
    },
    {
      i: 14,
      j: 4,
    },
    {
      i: 15,
      j: 3,
    },
    {
      i: 14,
      j: 3,
    },
    {
      i: 13,
      j: 3,
    },
    {
      i: 13,
      j: 2,
    },
    {
      i: 12,
      j: 2,
    },
    {
      i: 11,
      j: 2,
    },
    {
      i: 10,
      j: 2,
    },
    {
      i: 10,
      j: 1,
    },
    {
      i: 9,
      j: 1,
    },
    {
      i: 8,
      j: 1,
    },
    {
      i: 7,
      j: 1,
    },
    {
      i: 6,
      j: 2,
    },
    {
      i: 5,
      j: 2,
    },
    {
      i: 4,
      j: 3,
    },
    {
      i: 3,
      j: 4,
    },
    {
      i: 4,
      j: 4,
    },
    {
      i: 5,
      j: 4,
    },
    {
      i: 5,
      j: 3,
    },
    {
      i: 5,
      j: 5,
    },
    {
      i: 4,
      j: 5,
    },
    {
      i: 6,
      j: 3,
    },
    {
      i: 6,
      j: 4,
    },
    {
      i: 6,
      j: 5,
    },
    {
      i: 6,
      j: 6,
    },
    {
      i: 7,
      j: 6,
    },
    {
      i: 7,
      j: 5,
    },
    {
      i: 7,
      j: 4,
    },
    {
      i: 7,
      j: 3,
    },
    {
      i: 7,
      j: 2,
    },
    {
      i: 9,
      j: 2,
    },
    {
      i: 8,
      j: 2,
    },
    {
      i: 8,
      j: 3,
    },
    {
      i: 9,
      j: 3,
    },
    {
      i: 10,
      j: 3,
    },
    {
      i: 11,
      j: 3,
    },
    {
      i: 12,
      j: 3,
    },
    {
      i: 12,
      j: 4,
    },
    {
      i: 11,
      j: 4,
    },
    {
      i: 10,
      j: 4,
    },
    {
      i: 9,
      j: 4,
    },
    {
      i: 8,
      j: 4,
    },
    {
      i: 8,
      j: 5,
    },
    {
      i: 9,
      j: 5,
    },
    {
      i: 10,
      j: 5,
    },
    {
      i: 11,
      j: 5,
    },
    {
      i: 12,
      j: 5,
    },
    {
      i: 13,
      j: 5,
    },
    {
      i: 13,
      j: 4,
    },
    {
      i: 13,
      j: 6,
    },
    {
      i: 12,
      j: 6,
    },
    {
      i: 11,
      j: 6,
    },
    {
      i: 12,
      j: 7,
    },
    {
      i: 11,
      j: 7,
    },
    {
      i: 10,
      j: 7,
    },
    {
      i: 10,
      j: 6,
    },
    {
      i: 9,
      j: 6,
    },
    {
      i: 9,
      j: 7,
    },
    {
      i: 8,
      j: 7,
    },
    {
      i: 8,
      j: 6,
    },
  ];

  toCreate.forEach(async (cords) => {
    await prisma.sensor.create({
      data: {
        name: "sensor_temp_umid",
        type: "temp_umid_section",
        description: `{"x": ${cords.i}, "y": ${cords.j}}`,
      },
    });
  });

  return NextResponse.json({ message: "sensores criados" });
}
