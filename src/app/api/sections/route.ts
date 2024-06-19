import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { io } from "socket.io-client";

export async function GET() {
  const sections = await prisma.section.findMany();
  return NextResponse.json(sections);
}

let interval: NodeJS.Timeout | null = null;

export async function POST() {
  const sections = await prisma.section.findMany({
    include: {
      sensor: {
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

  if (interval) {
    clearInterval(interval);
    interval = null;
  }

  const socket = io(process.env.NEXT_PUBLIC_LOCAL_URL || "");

  interval = setInterval(async () => {
    const index = Math.floor(Math.random() * sections.length);
    sections[index].sensor.forEach(async (sen) => {
      const upOrDown = Math.floor(Math.random() * 100);
      let toChange = Math.random() * sen.offset.toNumber();
      if (upOrDown < 50) {
        toChange = toChange * -1;
      }
      if (!sen.sensor_data[0]) {
        await prisma.sensorData.create({
          data: {
            value: (sen.min.toNumber() + sen.max.toNumber()) / 2 + toChange,
            fk_sensor: sen.id,
            created_at: new Date(),
          },
        });
      } else {
        await prisma.sensorData.create({
          data: {
            value: sen.sensor_data[0].value.toNumber() + toChange,
            fk_sensor: sen.id,
            created_at: new Date(),
          },
        });
      }
    });
    socket.emit("section-update-server", index);
  }, 2000);

  return NextResponse.json({ message: "Conexao criada, gerando dados" });
}

export function DELETE() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
  return NextResponse.json({ message: "Conexão fechada." });
}
