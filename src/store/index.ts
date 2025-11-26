import { create } from "zustand";
import type { CompType } from "@/views/market/components";

// export type PageStore = "dashboard" | "market" | "create";
// export const usePageStore = create<PageStore>()(() => "dashboard");

export const useCompType = create<CompType>()(() => "select");
