"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { PhotoInfo } from "@/src/lib/api";

type PhotoState = {
  lastPhoto: PhotoInfo | null;
  hasHistory: boolean;
  fetchedAt: string | null;
  setPhoto: (photo: PhotoInfo) => void;
  clear: () => void;
};

export const usePhotoStore = create<PhotoState>()(
  persist(
    (set) => ({
      lastPhoto: null,
      hasHistory: false,
      fetchedAt: null,
      setPhoto: (photo) => {
        set({
          lastPhoto: photo,
          hasHistory: true,
          fetchedAt: new Date().toISOString(),
        });
      },
      clear: () => {
        set({
          lastPhoto: null,
          hasHistory: false,
          fetchedAt: null,
        });
      },
    }),
    {
      name: "photo-history-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
