"use client";

import useSectionStore from "@/store/sectionStore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mapa from "@images/mapa.png";

const SectionsMap = () => {
  const [selecteds, setSelecteds] = useState([]);

  const { section: acSection, setSection } = useSectionStore();
  return (
    <div className="relative overflow-auto h-[400px] bg-zinc-950 rounded-lg p-4 mt-2">
      <Image
        className="absolute max-h-[1200px] select-none opacity-5 bg-cover max-w-[1600px]"
        src={mapa}
        alt="map"
      />
      {Array.from({ length: 16 }).map((_, i) => (
        <React.Fragment key={i}>
          {Array.from({ length: 12 }).map((_, j) => (
            <div
              onClick={() => setSelecteds([...selecteds, { i, j }])}
              key={j}
              className={`h-24 w-24 border border-zinc-100 absolute ${
                selecteds.find((item) => item.i === i && item.j === j)?.i &&
                "bg-red-500"
              }`}
              style={{ left: i * 96, top: j * 96 }}
            ></div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SectionsMap;
