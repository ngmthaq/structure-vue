import {
  computed,
  reactive,
  ref,
  watch,
  defineProps,
  defineEmits,
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  onUnmounted
} from "vue";

class Component {
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

function defineClassComponent<C extends Component>(component: new () => C): C {
  return new component();
}

export { Component, defineClassComponent, defineProps, defineComponent, defineEmits };
