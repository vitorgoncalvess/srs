"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="fixed top-0 bottom-0 py-8 w-16 flex items-center justify-center">
        <nav className="bg-zinc-900 w-full h-full rounded-xl flex flex-col gap-4 p-4 py-6 items-center">
          <ul>
            <li className="p-2 rounded-lg bg-zinc-700 cursor-pointer">
              <Icon
                className={`h-6 w-6 ${
                  pathname === "/" ? "text-white" : "text-zinc-500 "
                }`}
                icon="material-symbols:home"
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
