import { NextResponse } from "next/server";
import prisma from "../../../../../../lib/prisma";

export async function GET(_: any, searchParams: { params: { id: string } }) {
  const section = await prisma.section.findFirst({
    where: {
      id: Number(searchParams.params.id),
    },
    include: {
      sensor: {
        include: {
          sensor_data: true,
        },
      },
    },
  });

  if (!section) {
    return NextResponse.json(
      { message: "Setor não encontrado" },
      { status: 204 }
    );
  }

  return NextResponse.json(section);
}
