"use client";

import { Sensor } from "@prisma/client";
import React, { useEffect } from "react";
import useSensorStore from "@/store/sensorStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import instance from "@/utils/axiosConfig";

interface Props {
  sensors: Sensor[];
  id: number;
}

const SectionSensor = ({ sensors, id }: Props) => {
  const { sensor, setSensor, setHover, hover } = useSensorStore();

  useEffect(() => {
    setSensor(null);
    //eslint-disable-next-line
  }, []);

  const createAnimal = async () => {
    await instance.post(`/sections/${id}`);
  };

  return (
    <>
      <button onClick={createAnimal}>aicionar animal</button>
      <ul className="bg-zinc-950 rounded-lg p-2 flex flex-col gap-2 overflow-auto h-44">
        {sensors.map((sen) => (
          <li
            onMouseOver={() => setHover(sen)}
            onMouseOut={() => setHover(null)}
            onClick={() => setSensor(sen)}
            className={`p-4 bg-zinc-900 rounded cursor-pointer hover:opacity-80 ${
              sen.id === sensor?.id && "border border-zinc-100"
            } ${hover?.id === sen.id && "border border-zinc-100"}`}
            key={sen.id}
          >
            <header className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-medium">Sensor {sen.id}</h1>
                <h2 className="text-sm opacity-50">
                  {sen.lat} {sen.lon}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-400 h-4 w-4 rounded-full animate-pulse"></div>
                {sen?.type?.includes("animal") ? (
                  <Icon icon="cil:animal" />
                ) : (
                  <Icon
                    className="w-6 h-6 opacity-50"
                    icon="material-symbols-light:motion-sensor-active-rounded"
                  />
                )}
              </div>
            </header>
          </li>
        ))}
      </ul>
      <div className="bg-zinc-950 rounded-xl grow p-4">
        {sensor ? (
          <div className="flex flex-col gap-2 h-full">
            <header>
              <h1 className="text-lg font-semibold">Sensor {sensor.id}</h1>
              <h2 className="text-sm opacity-60">
                Sensor{" "}
                {sensor.type.includes("temperature")
                  ? "de temperatura"
                  : sensor.type.includes("umid")
                  ? "de umidade"
                  : "em animal"}
              </h2>
            </header>
            <hr className="border-zinc-800" />
            <div className="flex w-full grow h-44">
              <div className="grow flex flex-col">
                <h1 className="text-lg font-medium">
                  Ultimo valor registrado:
                </h1>
                <h2 className="text-3xl font-semibold">
                  {Number(sensor.sensor_data[0].value).toFixed(2)}
                </h2>
                <h3 className="opacity-40 font-medium text-sm flex">
                  <span>{Number(sensor.sensor_data[1].value).toFixed(2)}</span>
                  <Icon
                    className={`${
                      sensor.sensor_data[0].value > sensor.sensor_data[1].value
                        ? "-rotate-90"
                        : "rotate-90"
                    } h-6 w-6`}
                    icon="material-symbols:play-arrow-rounded"
                  />
                </h3>
                <h1 className="text-xs">
                  Indice de crescimento dos ultimos registros
                </h1>
                <div className="grow flex flex-col justify-center">
                  <div
                    style={{
                      transform: `rotate(${
                        (sensor.sensor_data
                          .filter((_, i) => i < 2)
                          .reduce((acc, val) => acc - val.value, 0) /
                          360) *
                        100
                      }deg)`,
                    }}
                    className={`w-24 h-0.5 ${
                      sensor.sensor_data[0].value > sensor.sensor_data[1].value
                        ? "bg-red-400"
                        : "bg-green-400"
                    }`}
                  ></div>
                </div>
              </div>
              <div className="w-4/12 h-full bg-zinc-900 rounded flex flex-col overflow-auto">
                <ul className="text-xs">
                  {sensor.sensor_data.map((data) => (
                    <li
                      key={data.id}
                      className="flex items-center justify-between p-2 border-y border-zinc-600"
                    >
                      <h2>{Number(data.value).toFixed(2)}</h2>
                      <h1>
                        {new Date(data.created_at).toLocaleTimeString("pt-br")}
                      </h1>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-xl font-semibold opacity-70">
              Selecione um sensor para exibir suas informações
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionSensor;
