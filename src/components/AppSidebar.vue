<template>
  <div id="app-sidebar" :style="{ width: AppConst.WIDTH.appSidebar + 'px' }">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="Logo" />
    </div>
    <RouterLink v-for="(item, index) in app.items.value" :key="index" :to="item.path" class="custom-router-link">
      {{ app.t(item.meta && item.meta.title && typeof item.meta.title === "string" ? item.meta.title : "") }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type { Route } from "@/const/path.const";
import { AppConst } from "@/const/app.const";
import { PathConst } from "@/const/path.const";
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public items: Ref<Route[]> = this.ref(Object.values(PathConst));

    public constructor() {
      super();
    }
  },
);
</script>

<style scoped lang="scss">
@import "../assets/scss/modules";

#app-sidebar {
  flex-shrink: 0;
  height: 100vh;
  overflow-y: scroll;
  background-color: $dark;

  & .logo {
    width: 100%;
    height: 100px;
    padding: 16px 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 100px;
      height: 100%;
      object-fit: contain;
    }
  }

  & .custom-router-link {
    display: block;
    background-color: transparent;
    padding: 8px 16px;
    color: $light !important;
    text-decoration: none;
    transition: all 0.1s linear;

    &:hover {
      background-color: rgba($color: $light, $alpha: 0.05);
    }

    &.router-link-active {
      background-color: rgba($color: $light, $alpha: 0.1) !important;
    }
  }
}
</style>
