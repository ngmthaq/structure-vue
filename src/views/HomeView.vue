<template>
  <main>
    <TheWelcome name="Thang" @click="app.onTheWelcomeClick" />
  </main>
</template>

<script setup lang="ts">
import { Component, defineClassComponent } from "@/core/component.core";
import TheWelcome from "../components/TheWelcome.vue";

const app = defineClassComponent(
  class HomeView extends Component {
    public onTheWelcomeClick(e: any) {
      alert("Hi, I'm " + e.name);
    }
  }
);
</script>
