import { create } from "zustand";

interface Section {
  title: string;
  x: number;
  y: number;
  temp: number;
  umid: number;
  dataFrom: Date;
}

interface Store {
  section: Section | null;
  setSection: (sec: Section) => void;
}

const useSectionStore = create<Store>((set) => ({
  section: null,
  setSection: (section: any) => set(() => ({ section })),
}));

export default useSectionStore;
