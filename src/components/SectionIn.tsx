"use client";

import useSectionStore, { SectionCord } from "@/store/sectionStore";
import React from "react";

interface Props {
  section: SectionCord;
}

const SectionIn = ({ section }: Props) => {
  const { setSection, sectionSelected } = useSectionStore();
  return (
    <div
      onClick={() => setSection(section.id_sensor)}
      style={{
        left: `${section.cords.x * 96}px`,
        top: `${section.cords.y * 96}px`,
      }}
      className={`absolute w-24 h-24 border border-zinc-500 cursor-pointer ${
        sectionSelected?.id === section.id_sensor && "bg-zinc-800"
      }`}
    ></div>
  );
};

export default SectionIn;
