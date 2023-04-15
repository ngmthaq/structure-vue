<template>
  <div class="about">
    <h1>This is an about page of {{ app.state.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import { defineClassComponent, Component } from "@/core/component.core";

const app = defineClassComponent(
  class AboutView extends Component {
    public state = this.reactive({ name: "Thang" });
  }
);
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
