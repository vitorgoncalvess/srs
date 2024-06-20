import instance from "@/utils/axiosConfig";
import { Sensor, SensorData } from "@prisma/client";
import React from "react";

const getData = async () => {
  try {
    const response = await instance.get(`/sections/${1}/info`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
  }
};

const ImpactGraph = async () => {
  const data = await getData();
  return (
    <>
      <div className="flex items-center gap-1">
        <div className="bg-blue-500 h-3 w-3 rounded-full"></div>
        <h1 className="text-sm opacity-80">Umidade</h1>
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-red-500 h-3 w-3 rounded-full"></div>
        <h1 className="text-sm opacity-80">Evento</h1>
      </div>
      <div className="h-56 w-full flex relative items-end gap-4">
        {data?.sensor?.[1].sensor_data
          .filter((_: any, i: number) => i < 7)
          .map((sen: SensorData, i: number) => (
            <div className="flex flex-col items-center gap-2" key={sen.id}>
              {i === 1 && (
                <div className="bg-red-500 w-4 h-4 rounded-full"></div>
              )}
              <div
                className="w-4 bg-blue-500 rounded-t"
                style={
                  i > 1
                    ? { height: (sen.value as unknown as number) * 1.6 + "px" }
                    : { height: (sen.value as unknown as number) / 2 + "px" }
                }
              ></div>
              <h1 className="text-xs">
                {new Date(sen.created_at).toLocaleDateString("pt-br")}
              </h1>
            </div>
          ))}
      </div>
    </>
  );
};

export default ImpactGraph;
