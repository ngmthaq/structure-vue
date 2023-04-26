import type { ApiFetchMode } from "@/types/const";

export default class ApiConst {
  public static API_FETCH_MODE: ApiFetchMode = import.meta.env.VITE_API_FETCH_MODE || "no-cache";
}
