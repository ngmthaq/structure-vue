import { computed, reactive, ref, watch, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, onUnmounted } from "vue";

export class Component {
  protected reactive = reactive;
  protected ref = ref;
  protected computed = computed;
  protected watch = watch;

  public constructor() {
    onBeforeMount(() => {
      this.watcher();
      this.onBeforeMount();
    });

    onMounted(() => {
      this.onMounted();
    });

    onBeforeUpdate(() => {
      this.onBeforeUpdate();
    });

    onUpdated(() => {
      this.onUpdated();
    });

    onBeforeUnmount(() => {
      this.onBeforeUnmount();
    });

    onUnmounted(() => {
      this.onUnmounted();
    });
  }

  protected watcher() {}
  protected onBeforeMount() {}
  protected onMounted() {}
  protected onBeforeUpdate() {}
  protected onUpdated() {}
  protected onBeforeUnmount() {}
  protected onUnmounted() {}
}

export function compose<C extends Component>(component: new () => C): C {
  return new component();
}
