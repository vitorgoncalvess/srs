import Image from "next/image";
import React from "react";
import back from "@images/mapa.png";
import instance from "@/utils/axiosConfig";
import { Sensor } from "@prisma/client";
import SectionSensor from "@/components/SectionSensor";
import SectionSensorMap from "@/components/SectionSensorMap";

interface Props {
  params: {
    id: number;
  };
}

interface Section {
  id: number;
  lat: number;
  lon: number;
  sensor: Sensor[];
}

const getSectionInfo = async (id: number) => {
  try {
    const response = await instance.get(`/sections/${id}/info`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

const Page = async ({ params }: Props) => {
  const section: Section = await getSectionInfo(params.id);
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="bg-zinc-900 rounded-xl h-full grow flex flex-col gap-2 p-4">
        <header className="flex flex-col">
          <h1 className="text-3xl font-semibold">Setor {section.id}</h1>
          <h2 className="text-sm opacity-50">
            Lat {section.lat} Lon {section.lon}
          </h2>
        </header>
        <h2 className="text-xl">
          <span className="font-semibold">
            {section.sensor.length} sensores{" "}
          </span>
          <span className="opacity-80">localizados na região</span>
        </h2>
        <SectionSensor sensors={section.sensor} id={section.id} />
      </div>
      <div className="bg-zinc-900 rounded-xl h-full w-[500px] relative overflow-hidden">
        <Image
          className="absolute max-w-[5000px] max-h-[5000px] -translate-y-[500px] -translate-x-[500px] opacity-20"
          src={back}
          alt="mapa"
        />
        <SectionSensorMap sensors={section.sensor} />
      </div>
    </div>
  );
};

export default Page;
