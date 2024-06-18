import { SectionRepository } from "@/utils/axiosConfig";
import { Sensor } from "@prisma/client";
import { create } from "zustand";

export interface SectionCord {
  id: number;
  lat: number;
  lon: number;
}

interface Section {
  id: number;
  lat?: number;
  lon?: number;
  sensors?: Sensor[];
}

interface Store {
  sections: SectionCord[];
  sectionSelected: Section | null;
  loading: boolean;
  setSection: (id: number) => void;
  getSections: () => void;
}

const sectionRepository = new SectionRepository();

const useSectionStore = create<Store>((set) => ({
  sections: [],
  sectionSelected: null,
  loading: false,
  setSection: async (id: number) => {
    set(() => ({
      loading: true,
      sectionSelected: {
        id,
      },
    }));
    const info = await sectionRepository.getSectionInfo(id);
    set(() => ({
      loading: false,
      sectionSelected: info,
    }));
  },
  getSections: async () => {
    const sects = await sectionRepository.getSections();
    set({ sections: sects });
  },
}));

export default useSectionStore;
