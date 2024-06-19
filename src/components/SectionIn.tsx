"use client";

import useSectionStore, { SectionCord } from "@/store/sectionStore";
import React, { useEffect, useState } from "react";
import { Socket } from "socket.io";

interface Props {
  section: SectionCord;
  socket: Socket;
}

const SectionIn = ({ section, socket }: Props) => {
  const { setSection, sectionSelected } = useSectionStore();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    socket.on("section-update", (id) => {
      if (id === section.id) {
        setUpdate(true);
        setTimeout(() => {
          setUpdate(false);
        }, 900);
      }
    });
  });

  return (
    <div
      onClick={() => setSection(section.id)}
      style={{
        left: `${section.lat * 68}px`,
        top: `${section.lon * 68}px`,
      }}
      className={`absolute w-[68px] h-[68px] border border-zinc-500 cursor-pointer rounded-lg transition-all ${
        sectionSelected?.id === section.id && "bg-zinc-800 bg-opacity-50"
      } ${update && "animate-new bg-white"}`}
    ></div>
  );
};

export default SectionIn;
