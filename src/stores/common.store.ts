import type { Ref } from "vue";
import { Store, defineClassStore } from "@/core/store.core";

export const useCommonStore = defineClassStore(
  class CommonStore extends Store {
    public name: string = "common";

    // State
    public isLoading: Ref<boolean> = this.ref(false);

    // Actions
    public setIsloading = (bool: boolean) => {
      this.isLoading.value = bool;
    };
  },
);
