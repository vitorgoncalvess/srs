import { Sensor } from "@prisma/client";
import { create } from "zustand";

interface Store {
  sensor: Sensor | null;
  hover: Sensor | null;
  setSensor: (sensor: Sensor | null) => void;
  setHover: (hover: Sensor | null) => void;
}

const useSensorStore = create<Store>((set) => ({
  sensor: null,
  hover: null,
  setSensor: (sensor) => set(() => ({ sensor })),
  setHover: (hover) => set(() => ({ hover })),
}));

export default useSensorStore;
