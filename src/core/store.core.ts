import { defineStore } from "pinia";
import { Vue } from "./vue.core";

abstract class Store extends Vue {
  public abstract name: string;

  public constructor() {
    super();
  }
}

function defineClassStore<S extends Store>(store: new () => S) {
  const instance = new store();
  return defineStore(instance.name, () => instance);
}

export { Store, defineClassStore, defineStore };
