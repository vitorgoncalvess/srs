import { SectionData, SectionRepository } from "@/utils/axiosConfig";
import { create } from "zustand";

export interface SectionCord {
  id_sensor: number;
  cords: {
    x: number;
    y: number;
  };
}

export interface SectionInfo {
  id: number;
  created_at?: Date;
  data?: {
    temperature: number;
    umid: number;
  };
  cords?: {
    x: number;
    y: number;
  };
}

interface Store {
  sections: SectionCord[];
  sectionSelected: SectionInfo | null;
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
    const info = (await sectionRepository.getSectionInfo(id)) as SectionData;
    set(() => ({
      loading: false,
      sectionSelected: {
        id,
        created_at: new Date(info.created_at),
        data: {
          temperature: info.valor.temperature,
          umid: info.valor.umid,
        },
        cords: info.sensor.description,
      },
    }));
  },
  getSections: async () => {
    const sects = await sectionRepository.getSections();
    set({ sections: sects });
  },
}));

export default useSectionStore;
