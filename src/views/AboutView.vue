<template>
  <div class="about">
    <h1>This is an about page of {{ app.state.name }}</h1>
    <p>Is loading: {{ app.commonStore.isLoading }}</p>
    <button @click="app.onToggleIsLoading">Click here to toggle is loading</button>
  </div>
</template>

<script setup lang="ts">
import { defineClassComponent, Component } from "@/core/component.core";
import { useCommonStore } from "@/stores/common.store";
import { Api } from "@/plugins/api.plugin";

const app = defineClassComponent(
  class AboutView extends Component {
    public state = this.reactive({ name: "Thang" });
    public commonStore = useCommonStore();

    public onToggleIsLoading() {
      this.commonStore.setIsLoading(!this.commonStore.isLoading);
    }

    protected onMounted(): void {
      new Api().get("todos");
    }
  }
);
</script>
