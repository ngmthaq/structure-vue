<template>
  <main>
    <header :class="{ colorer: app.state.current !== `home` }">
      <h3>Nguyen Manh Thang</h3>
      <nav>
        <a
          :key="index"
          :class="{ active: navItem === app.state.current }"
          :href="'#' + navItem"
          class="nav-item"
          @click="app.onClickNav(navItem)"
          v-for="(navItem, index) in app.state.nav"
        >
          <div>{{ index + 1 < 10 ? "0" + (index + 1) : index + 1 }}</div>
          <span>{{ navItem }}</span>
        </a>
      </nav>
    </header>
    <HomeBanner />
    <HomeService />
    <HomeSkills />
  </main>
</template>

<script setup lang="ts">
import { Component, defineClassComponent } from "@/core/component.core";
import HomeBanner from "@/components/home/HomeBanner.vue";
import HomeService from "@/components/home/HomeService.vue";
import HomeSkills from "@/components/home/HomeSkills.vue";

const nav = ["home", "services", "skills", "experiences", "contact"];

const app = defineClassComponent(
  class HomeView extends Component {
    public state = this.reactive({
      nav: nav,
      current: nav[0],
    });

    public onClickNav = (nav: string) => {
      this.state.current = nav;
    };

    public onBeforeMount: () => void = () => {
      this.router.replace("/");
    };
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  z-index: $z-index-header;
  background-color: transparent;
  transition: all 0.2s ease-in-out;

  &.colorer {
    background-color: rgba($color: $black, $alpha: 1);
  }

  & h3 {
    color: $light;
  }

  & nav {
    display: flex;

    & a.nav-item {
      margin-right: 24px;
      display: flex;
      flex-direction: column;
      padding: 16px;
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      cursor: pointer;

      &.active {
        background-color: $blue;

        & div {
          color: $light;
        }
      }

      & span {
        text-transform: uppercase;
        color: $light;
        font-size: 11px;
        line-height: 16px;
      }

      & div {
        text-transform: uppercase;
        color: $primary;
        font-size: 12px;
        line-height: 16px;
        font-weight: 800;
        transition: all 0.2s ease-in-out;
      }
    }
  }
}
</style>
