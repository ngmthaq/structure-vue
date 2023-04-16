import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: (): CommonState => ({
    isLoading: false
  }),

  getters: {},

  actions: {
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    }
  }
});

export type CommonState = {
  isLoading: boolean;
};
