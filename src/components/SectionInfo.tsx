//@ts-nocheck
"use client";

import useSectionStore from "@/store/sectionStore";
import React from "react";

const SectionInfo = () => {
  const { sectionSelected, loading } = useSectionStore();

  return (
    <div className="mt-2 h-[400px]">
      {sectionSelected ? (
        <div className="flex flex-col gap-2 h-full">
          <h1 className="text-2xl font-semibold">Setor {sectionSelected.id}</h1>
          {loading ? (
            ""
          ) : (
            <>
              <h2 className="bg-zinc-950 p-2 rounded-lg font-medium">
                Lat: {sectionSelected.lat}
              </h2>
              <h2 className="bg-zinc-950 p-2 rounded-lg font-medium">
                Lon: {sectionSelected.lon}
              </h2>
              <div className="flex flex-col items-start justify-between grow">
                <h3 className="text-xl font-semibold">
                  Ultimos dados registrados:
                </h3>
                <div>
                  <h4 className="text-xl font-medium">Temperatura</h4>
                  <h4 className="text-lg">
                    {Number(
                      sectionSelected.sensor[0].sensor_data[0].value
                    ).toFixed(2)}
                    °C
                  </h4>
                </div>
                <div>
                  <h4 className="text-xl font-medium">Umidade</h4>
                  <h4 className="text-lg">
                    {Number(
                      sectionSelected.sensor[1].sensor_data[0].value
                    ).toFixed(2)}
                    %
                  </h4>
                </div>
                <h4>Data do registro dos dados: </h4>
                <button className="bg-zinc-950 py-2 px-4 hover:opacity-90 rounded-xl font-semibold">
                  Ver Mais Informações
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div>
          <h1>Selecione uma seção para exibir suas informações</h1>
        </div>
      )}
    </div>
  );
};

export default SectionInfo;
