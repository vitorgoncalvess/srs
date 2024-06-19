"use client";

import useSectionStore from "@/store/sectionStore";
import Image from "next/image";
import React, { useEffect } from "react";
import mapa from "@images/mapa.png";
import axios from "axios";
import SectionIn from "./SectionIn";
import { io } from "socket.io-client";
import instance from "@/utils/axiosConfig";

const socket = io(process.env.NEXT_PUBLIC_LOCAL_URL || "");

const SectionsMap = () => {
  const { sections, getSections } = useSectionStore();

  useEffect(() => {
    getSections();
    instance.post("/sections");
    //eslint-disable-next-line
  }, []);

  const handleCreate = async () => {
    await instance.post("/");
  };

  return (
    <div className="relative overflow-auto h-[400px] bg-zinc-950 rounded-lg p-4 mt-2">
      <button className="absolute z-50" onClick={handleCreate}>
        Criar
      </button>
      <Image
        className="absolute max-h-[800px] select-none opacity-5 bg-cover max-w-[1200px]"
        src={mapa}
        alt="map"
      />
      {sections.map((sect, index) => (
        //@ts-ignore
        <SectionIn key={index} section={sect} socket={socket} />
      ))}
    </div>
  );
};

export default SectionsMap;
