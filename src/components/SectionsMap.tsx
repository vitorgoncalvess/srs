"use client";

import useSectionStore from "@/store/sectionStore";
import Image from "next/image";
import React, { useEffect } from "react";
import mapa from "@images/mapa.png";
import axios from "axios";
import SectionIn from "./SectionIn";

const SectionsMap = () => {
  const { sections, sectionSelected, setSection, getSections } =
    useSectionStore();

  useEffect(() => {
    getSections();
    //eslint-disable-next-line
  }, []);

  const handleCreate = async () => {
    await axios.post("/api");
  };

  return (
    <div className="relative overflow-auto h-[400px] bg-zinc-950 rounded-lg p-4 mt-2">
      <Image
        className="absolute max-h-[1200px] select-none opacity-5 bg-cover max-w-[1600px]"
        src={mapa}
        alt="map"
      />
      {sections.map((sect, index) => (
        <SectionIn key={index} section={sect} />
      ))}
    </div>
  );
};

export default SectionsMap;
