<template>
  <div id="home">
    <div class="socials-container">
      <v-icon color="success" icon="mdi-plus" size="x-small"></v-icon>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

#home {
  width: 100%;
  height: 100vh;
  background-color: $dark;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("@/assets/img/img-home-banner.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  & .socials-container {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
