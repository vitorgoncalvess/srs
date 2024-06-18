import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(_: any, searchParams: { params: { id: number } }) {
  const id = Number(searchParams.params.id);

  const data = await prisma.dataSensor.findFirst({
    orderBy: {
      id_data: "desc",
    },
    where: {
      fk_sensor: id,
    },
    include: {
      sensor: true,
    },
  });

  if (!data) {
    const newData = await prisma.dataSensor.create({
      data: {
        fk_sensor: id,
        created_at: new Date().toLocaleDateString("pt-br"),
        valor: `{"temperature": 29, "umid": 65}`,
      },
      include: {
        sensor: true,
      },
    });

    newData.valor = JSON.parse(newData.valor);
    newData.sensor.description = JSON.parse(newData.sensor.description);

    return NextResponse.json(newData);
  }

  data.valor = JSON.parse(data.valor);
  data.sensor.description = JSON.parse(data.sensor.description);

  return NextResponse.json(data);
}
