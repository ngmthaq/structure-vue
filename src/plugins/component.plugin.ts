import { defineProps, defineEmits, defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, onUnmounted } from "vue";
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { useTranslation } from "i18next-vue";
import { AppConst } from "@/const/app.const";
import { useCommonStore } from "@/stores/common.store";
import { Vue } from "./vue.plugin";
import { EventBus } from "./bus.plugin";

abstract class BaseComponent extends Vue {
  public readonly t = useTranslation().t;
  public readonly i18next = useTranslation().i18next;
  public readonly router = useRouter();
  public readonly route = useRoute();
  public readonly commonStore = useCommonStore();

  public readonly onBeforeMount = onBeforeMount;
  public readonly onMounted = onMounted;
  public readonly onBeforeUpdate = onBeforeUpdate;
  public readonly onUpdated = onUpdated;
  public readonly onBeforeUnmount = onBeforeUnmount;
  public readonly onUnmounted = onUnmounted;
  public readonly onBeforeRouteLeave = onBeforeRouteLeave;
  public readonly onBeforeRouteUpdate = onBeforeRouteUpdate;
}

function defineClassComponent<C extends BaseComponent>(component: new () => C): C {
  return new component();
}

function onError(error: any) {
  console.error(error);
  EventBus.emit(AppConst.EVENTS.internalError, null);
}

export { BaseComponent, defineClassComponent, defineProps, defineComponent, defineEmits, onError };
