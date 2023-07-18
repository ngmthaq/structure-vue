<template>
  <div class="error-container">
    <h1>500</h1>
    <p>{{ app.t("title.internalError") }}</p>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class View extends BaseComponent {
    public constructor() {
      super();
      document.title = this.t("title.internalError");
    }
  },
);
</script>

<style scoped lang="scss">
@import "../../assets/scss/modules";

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>
