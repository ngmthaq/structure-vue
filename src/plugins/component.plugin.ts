import { defineProps, defineEmits, defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, onUnmounted } from "vue";
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { useTranslation } from "i18next-vue";
import { Vue } from "./vue.plugin";

abstract class BaseComponent extends Vue {
  public t = useTranslation().t;
  public i18next = useTranslation().i18next;
  public router = useRouter();
  public route = useRoute();

  public onBeforeMount = onBeforeMount;
  public onMounted = onMounted;
  public onBeforeUpdate = onBeforeUpdate;
  public onUpdated = onUpdated;
  public onBeforeUnmount = onBeforeUnmount;
  public onUnmounted = onUnmounted;
  public onBeforeRouteLeave = onBeforeRouteLeave;
  public onBeforeRouteUpdate = onBeforeRouteUpdate;
}

function defineClassComponent<C extends BaseComponent>(component: new () => C): C {
  return new component();
}

export { BaseComponent, defineClassComponent, defineProps, defineComponent, defineEmits };
