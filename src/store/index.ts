import { create } from "zustand";

export type PageStore = "dashboard" | "market" | "create";
export const usePageStore = create<PageStore>()(() => "dashboard");
