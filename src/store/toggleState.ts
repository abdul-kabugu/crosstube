/* eslint-disable prettier/prettier */
// @ts-nocheck

import { StateCreator, create } from "zustand";

export const useToggleSidebar = create((set) => ({
    isSidebarExpanded : false,
   toggleSidebar : () => set((state) => ({isSidebarExpanded : !state.isSidebarExpanded})) 
}))

export const useSelectedTags = create((set) => ({
    selectedTags: "All",
    setSelectedTags: (tag : string) => set({ selectedTags: tag }),
  }));

