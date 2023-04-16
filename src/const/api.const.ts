import type { ApiFetchMode } from "@/types/const";

export const API_FETCH_MODE: ApiFetchMode = import.meta.env.VITE_API_FETCH_MODE || "no-cache";
