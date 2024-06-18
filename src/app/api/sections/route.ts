import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  const sections = await prisma.sensor.findMany({
    where: {
      type: "temp_umid_section",
    },
  });

  const filtered = sections.map((sect) => {
    const cords = JSON.parse(sect.description);
    return {
      id_sensor: sect.id_sensor,
      cords,
    };
  });

  return NextResponse.json(filtered);
}
