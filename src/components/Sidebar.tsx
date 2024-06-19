"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const router = useRouter();

  return (
    <div>
      <div className="fixed top-0 bottom-0 py-8 w-16 flex items-center justify-center">
        <nav className="bg-zinc-900 w-full h-full rounded-xl flex flex-col gap-4 p-4 py-6 items-center">
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => router.push("/")}
              className={`p-2 rounded-lg cursor-pointer ${
                pathname === "/" ? "bg-zinc-700" : ""
              }`}
            >
              <Icon
                className={`h-6 w-6 ${
                  pathname === "/" ? "text-white bg-zinc-700" : "text-zinc-500 "
                }`}
                icon="material-symbols:home"
              />
            </li>
            <li
              onClick={() => router.push("/section")}
              className={`p-2 rounded-lg cursor-pointer ${
                pathname === "/section" ? "bg-zinc-700" : ""
              }`}
            >
              <Icon
                className={`h-6 w-6 ${
                  pathname === "/section" ? "text-white " : "text-zinc-500 "
                }`}
                icon="material-symbols:backup-table-rounded"
              />
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-16"></div>
    </div>
  );
};

export default Sidebar;
