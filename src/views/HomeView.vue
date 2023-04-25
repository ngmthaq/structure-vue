<template>
  <main>
    <header :class="{ colorer: app.state.isScrolled }">
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
    <HomeServices />
    <HomeSkills />
    <HomeExperiences />
    <HomeContact />
  </main>
</template>

<script setup lang="ts">
import { CUSTOM_EVENTS } from "@/const/app.const";
import { Component, defineClassComponent } from "@/core/component.core";
import EventBus from "@/plugins/bus.plugin";
import HomeBanner from "@/components/home/HomeBanner.vue";
import HomeServices from "@/components/home/HomeServices.vue";
import HomeSkills from "@/components/home/HomeSkills.vue";
import HomeExperiences from "@/components/home/HomeExperiences.vue";
import HomeContact from "@/components/home/HomeContact.vue";

const top = 150;
const nav = ["home", "services", "skills", "experiences", "contact"];

const app = defineClassComponent(
  class HomeView extends Component {
    public state = this.reactive({
      isScrolled: false,
      nav: nav,
      current: nav[0],
    });

    public onClickNav = (nav: string) => {
      this.state.current = nav;
      this.state.isScrolled = nav !== "home";
    };

    public onOver = (data: string) => {
      this.state.current = data;
      this.state.isScrolled = window.document.body.scrollTop > top;
    };

    public onWindowScroll = () => {
      this.state.isScrolled = window.document.body.scrollTop > top;
    };

    public onBeforeMount: () => void = () => {
      this.router.replace("/");
    };

    public onMounted: () => void = () => {
      window.addEventListener("scroll", this.onWindowScroll, true);
      EventBus.on<string>(CUSTOM_EVENTS.onChangeTab, (data) => {
        this.onOver(data);
      });
    };

    public onUnmounted: () => void = () => {
      window.removeEventListener("scroll", this.onWindowScroll, true);
      EventBus.off<string>(CUSTOM_EVENTS.onChangeTab, (data) => {
        this.onOver(data);
      });
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
  transition: all 0.2s linear;

  &.colorer {
    background-color: rgba($color: $black, $alpha: 1);
    padding: 8px 32px;

    & a {
      padding: 8px !important;
    }
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
