import { defineProps, defineEmits, defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, onUnmounted } from "vue";
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { useDisplay } from "vuetify";
import { useTranslation } from "i18next-vue";
import { Vue } from "./vue.core";

abstract class Component extends Vue {
  public translate = useTranslation().t;

  public i18next = useTranslation().i18next;

  public router = useRouter();

  public route = useRoute();

  public display = useDisplay();

  public constructor() {
    super();

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

    onBeforeRouteLeave(() => {
      this.onBeforeRouteLeave();
    });

    onBeforeRouteUpdate(() => {
      this.onBeforeRouteUpdate();
    });
  }

  public watcher = () => {};

  public onBeforeMount = () => {};

  public onMounted = () => {};

  public onBeforeUpdate = () => {};

  public onUpdated = () => {};

  public onBeforeUnmount = () => {};

  public onUnmounted = () => {};

  public onBeforeRouteLeave = () => {};

  public onBeforeRouteUpdate = () => {};
}

function defineClassComponent<C extends Component>(component: new () => C): C {
  return new component();
}

export { Component, defineClassComponent, defineProps, defineComponent, defineEmits };
