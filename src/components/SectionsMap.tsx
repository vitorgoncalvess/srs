"use client";

import useSectionStore from "@/store/sectionStore";
import React from "react";

const sections = [
  {
    title: "Section 1",
    x: 48,
    y: 48,
    temp: 25,
    umid: 98,
    dataFrom: new Date(),
  },
  {
    title: "Section 2",
    x: 48,
    y: 96,
    temp: 28,
    umid: 94,
    dataFrom: new Date(),
  },
];

const SectionsMap = () => {
  const { section: acSection, setSection } = useSectionStore();
  return (
    <div className="relative overflow-auto h-[400px] bg-zinc-950 rounded-lg p-4 mt-2">
      {sections.map((section) => (
        <div
          onClick={() => setSection(section)}
          style={{
            left: section.x,
            top: section.y,
          }}
          className={`h-12 w-12 border border-zinc-900 absolute cursor-pointer hover:bg-[rgb(19,19,19)] transition-all ${
            section.title === acSection?.title && "bg-zinc-900"
          }`}
          key={section.title}
        ></div>
      ))}
    </div>
  );
};

export default SectionsMap;
