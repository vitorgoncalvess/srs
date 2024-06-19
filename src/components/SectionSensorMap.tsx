"use client";

import useSensorStore from "@/store/sensorStore";
import { Sensor } from "@prisma/client";
import React from "react";

interface Props {
  sensors: Sensor[];
}

const SectionSensorMap = ({ sensors }: Props) => {
  const { hover, setHover, setSensor } = useSensorStore();
  return (
    <>
      {sensors.map((sen) => (
        <div
          onMouseOut={() => setHover(null)}
          onMouseOver={() => setHover(sen)}
          onClick={() => setSensor(sen)}
          key={sen.id}
          className={`bg-green-400 h-3 w-3 rounded-full absolute animate-pulse cursor-pointer ${
            hover?.id === sen.id && "scale-150 border-2 border-white"
          }`}
          style={{ left: sen.lat + "%", top: sen.lon + "%" }}
        ></div>
      ))}
    </>
  );
};

export default SectionSensorMap;
