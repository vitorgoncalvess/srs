"use client";

import useSectionStore from "@/store/sectionStore";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { sections } = useSectionStore();

  const router = useRouter();

  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold">Setores</h1>
      <div className="flex flex-col gap-2 w-full">
        {sections.map((sec) => (
          <div
            onClick={() => router.push("/section/" + sec.id)}
            className="p-2 cursor-pointer bg-zinc-900 rounded-xl"
            key={sec.id}
          >
            Setor {sec.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
