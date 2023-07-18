<template>
  <BaseLayout>
    <div v-if="app.event.value" class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center my-5">{{ app.event.value.code }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="box-container">
            <div class="box-header">event.key</div>
            <div class="box-value">{{ app.event.value.key }}</div>
          </div>
        </div>
        <div class="col-4">
          <div class="box-container">
            <div class="box-header">event.keyCode</div>
            <div class="box-value">{{ app.event.value.keyCode }}</div>
          </div>
        </div>
        <div class="col-4">
          <div class="box-container">
            <div class="box-header">event.which</div>
            <div class="box-value">{{ app.event.value.which }}</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="box-container">
            <div class="box-header">event.charCode</div>
            <div class="box-value">{{ app.event.value.charCode }}</div>
          </div>
        </div>
        <div class="col-4">
          <div class="box-container">
            <div class="box-header">event.code</div>
            <div class="box-value">{{ app.event.value.code }}</div>
          </div>
        </div>
        <div class="col-4">
          <div class="box-container">
            <div class="box-header">event.shiftKey</div>
            <div class="box-value">{{ app.event.value.shiftKey }}</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="box-container">
            <div class="box-header">event.altKey</div>
            <div class="box-value">{{ app.event.value.altKey }}</div>
          </div>
        </div>
        <div class="col-4">
          <div class="box-container">
            <div class="box-header">event.ctrlKey</div>
            <div class="box-value">{{ app.event.value.ctrlKey }}</div>
          </div>
        </div>
        <div class="col-4">
          <div class="box-container">
            <div class="box-header">event.metaKey</div>
            <div class="box-value">{{ app.event.value.metaKey }}</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="d-flex align-items-center justify-content-center">
            <input type="checkbox" id="prevent-default" v-model="app.isPreventDefault.value" />
            <label for="prevent-default" class="d-inline-block mx-2 user-select-none">{{ app.t("keycode.isPreventDefault") }}</label>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-center my-4">{{ app.t("keycode.welcome") }}</h1>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public event: Ref<KeyboardEvent | null> = this.ref(null);
    public isPreventDefault: Ref<boolean> = this.ref(false);

    public constructor() {
      super();

      document.addEventListener("keydown", (event) => {
        if (this.isPreventDefault.value) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
        this.event.value = event;
      });
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";

.box-container {
  box-shadow: 2px 2px 8px 0px $gray;
  margin: 8px 4px;

  & .box-header {
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: $primary;
    color: $light;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }

  & .box-value {
    width: 100%;
    height: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
  }
}
</style>
