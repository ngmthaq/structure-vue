<template>
  <div id="skills">
    <SlickCarosel id="slick">
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
      <div><h3>6</h3></div>
    </SlickCarosel>
  </div>
</template>

<script setup lang="ts">
import SlickCarosel from "../common/SlickCarosel.vue";
// import { Component, defineClassComponent } from "@/core/component.core";

// const app = defineClassComponent(class HomeBanner extends Component {});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

#services {
  width: 100%;
  height: 100vh;
  background-color: $dark;
}
</style>
