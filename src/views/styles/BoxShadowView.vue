<template>
  <BaseLayout>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="box d-flex justify-content-center flex-column w-100" style="height: 100vh">
            <div class="code">
              <div>.preview {</div>
              <div>
                <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                <span>box-shadow: &nbsp;</span>
                <input type="text" v-model="app.boxShadow.value" />
                <span>;</span><br />
                <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                <span>border-radius: &nbsp;</span>
                <input type="text" v-model="app.borderRadius.value" />
                <span>;</span><br />
                <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                <span>width: &nbsp;</span>
                <input type="text" v-model="app.width.value" />
                <span>;</span><br />
                <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                <span>height: &nbsp;</span>
                <input type="text" v-model="app.height.value" />
                <span>;</span><br />
              </div>
              <div>}</div>
              <br />
            </div>
            <div class="preview-container">
              <div
                class="preview"
                :style="{ boxShadow: app.boxShadow.value, borderRadius: app.borderRadius.value, width: app.width.value, height: app.height.value }"
              >
                Box Shadow
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";
import type { Ref } from "vue";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public boxShadow: Ref<string> = this.ref("0px 0px 4px 1px grey");
    public borderRadius: Ref<string> = this.ref("2px");
    public width: Ref<string> = this.ref("100%");
    public height: Ref<string> = this.ref("320px");
  },
);
</script>

<style scoped lang="scss">
@import "../../assets/scss/modules";

.code {
  height: 200px;
  padding: 8px;
}

.preview {
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in-out;
}

.preview-container {
  width: 100%;
  border: 1px solid grey;
  padding: 16px;
  height: calc(100% - 200px);
  margin-bottom: 8px;
  overflow-y: scroll;
}

input {
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
}
</style>
