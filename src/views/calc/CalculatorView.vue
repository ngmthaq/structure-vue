<template>
  <BaseLayout>
    <form @submit="app.onSubmit">
      <div class="container" style="max-width: 400px">
        <div class="row g-0">
          <div class="col-12">
            <p class="text-center text">Simple Calculator</p>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-12">
            <input type="text" v-model="app.text.value" @focus="app.onInputFocus" @blur="app.onInputBlur" />
          </div>
        </div>
        <div class="row g-0">
          <div class="col-6">
            <button @click="app.onClear">C</button>
          </div>
          <div class="col-3">
            <button @click="app.onDelete">
              <i class="bi bi-backspace"></i>
            </button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('+', true)">+</button>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-3">
            <button @click="() => app.onButtonClick('1')">1</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('2')">2</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('3')">3</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('-', true)">-</button>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-3">
            <button @click="() => app.onButtonClick('4')">4</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('5')">5</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('6')">6</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('*', true)">*</button>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-3">
            <button @click="() => app.onButtonClick('7')">7</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('8')">8</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('9')">9</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('/', true)">/</button>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-3">
            <button @click="app.onEval">=</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('0')">0</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('.', true)">.</button>
          </div>
          <div class="col-3">
            <button @click="() => app.onButtonClick('%', true)">%</button>
          </div>
        </div>
      </div>
    </form>
  </BaseLayout>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class Component extends BaseComponent {
    public text: Ref<string> = this.ref("");

    public constructor() {
      super();
    }

    public onSubmit = (e: any) => {
      e.preventDefault();
    };

    public onKeydown = (e: any) => {
      e.preventDefault();
    };

    public onInputFocus = (e: any) => {
      document.addEventListener("keydown", this.onKeydown);
    };

    public onInputBlur = (e: any) => {
      document.removeEventListener("keydown", this.onKeydown);
    };

    public onButtonClick = (data: string, isSymbol: boolean = false) => {
      if (this.text.value === "" && isSymbol) return false;
      this.text.value += data;
    };

    public onEval = () => {
      try {
        this.text.value = eval(this.text.value) + "";
      } catch (error: any) {
        this.onClear();
        alert(error.message);
      }
    };

    public onClear = () => {
      this.text.value = "";
    };

    public onDelete = () => {
      this.text.value = this.text.value.substring(0, this.text.value.length - 1);
    };
  },
);
</script>

<style scoped lang="scss">
@import "../../assets/scss/modules";

form {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  width: 100%;
  height: 80px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 24px;
  border-radius: 0;
  outline: none;
  border: 2px solid $gray;
}

p.text {
  background-color: $gray;
  color: $light;
  margin: 0;
  padding: 16px 0;
  text-transform: uppercase;
}
</style>
