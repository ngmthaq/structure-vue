<template>
  <div id="base-layout">
    <AppSidebar />
    <div id="main-viewer" :style="{ width: `calc(100vw - ${AppConst.WIDTH.appSidebar}px)` }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AppConst } from "@/const/app.const";
import AppSidebar from "@/components/AppSidebar.vue";
</script>

<style lang="scss" scoped>
#base-layout {
  display: flex;
  align-items: center;
  justify-content: center;

  & #main-viewer {
    height: 100vh;
    overflow-y: scroll;
    padding: 0 16px;
  }
}
</style>
