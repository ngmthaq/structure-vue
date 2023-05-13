<template>
  <ErrorView v-if="app.isError.value" />
  <RouterView v-else />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { AppConst } from "./const/app.const";
import { BaseComponent, defineClassComponent } from "./plugins/component.plugin";
import { EventBus } from "./plugins/bus.plugin";
import ErrorView from "./template/ServerInternalErrorTemplate.vue";

const app = defineClassComponent(
  class App extends BaseComponent {
    public isError = this.ref(false);

    public constructor() {
      super();

      this.watch(
        () => this.route.fullPath,
        () => {
          this.isError.value = false;
        },
      );

      EventBus.on(AppConst.EVENTS.internalError, () => {
        this.isError.value = true;
      });
    }
  },
);
</script>

<style lang="scss"></style>
