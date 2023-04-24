<template>
  <div id="home" @mousemove="app.onOver">
    <div class="socials-container">
      <a href="https://www.facebook.com/ngmthaq" target="_blank" class="icon facebook" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
      <a href="https://www.linkedin.com/in/nguyen-manh-thang-62b589157/" target="_blank" class="icon linkedin" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </a>
      <a href="https://join.skype.com/invite/yoPkAbUB4kXA" target="_blank" class="icon skype" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'skype']" />
      </a>
      <a href="https://github.com/ngmthaq" target="_blank" class="icon github" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="mailto:nguyenmanhthang2000.fb@gmail.com" target="_blank" class="icon email" rel="noopener noreferrer">
        <font-awesome-icon :icon="['far', 'envelope']" />
      </a>
      <a href="tel:+84389884507" target="_blank" class="icon phone" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fas', 'phone']" />
      </a>
    </div>
    <div class="phone-number">
      <font-awesome-icon :icon="['far', 'circle']" size="xs" class="icon" />
      <p>+84 38 988 4507</p>
    </div>
    <div class="text-container">
      <p><code>index.js</code></p>
      <code> const name = "Nguyen Manh Thang"; </code>
      <code> let job = "software engineer"; </code>
      <div class="last-row">
        <code> let age = "{{ age }} year old"; </code>
        <span>{{ app.state.isShowSlash ? "|" : "&nbsp;" }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CUSTOM_EVENTS } from "@/const/app.const";
import { Component, defineClassComponent } from "@/core/component.core";
import EventBus from "@/plugins/bus.plugin";

const age = new Date().getFullYear() - 2000;

const app = defineClassComponent(
  class HomeBanner extends Component {
    public state = this.reactive({ isShowSlash: true });

    public onMounted: () => void = () => {
      setInterval(() => {
        this.state.isShowSlash = !this.state.isShowSlash;
      }, 350);
    };

    public onOver = () => {
      EventBus.emit<string>(CUSTOM_EVENTS.onChangeTab, "home");
    };
  },
);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

#home {
  width: 100%;
  min-height: 100vh;
  background-color: $dark;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("@/assets/img/img-home-banner.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  background-attachment: fixed;

  & .socials-container {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    padding: 16px;

    & .icon {
      padding: 16px;
      text-decoration: none;
      color: $light;
      transition: all 0.2s ease-in-out;

      &.facebook:hover {
        color: $blue-dark;
      }

      &.linkedin:hover {
        color: $blue;
      }

      &.skype:hover {
        color: $blue-light;
      }

      &.email:hover {
        color: $danger;
      }

      &.phone:hover {
        color: $info;
      }

      &.github:hover {
        color: $gray;
      }
    }
  }

  & .phone-number {
    position: absolute;
    right: -60px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(270deg);

    & .icon {
      color: $blue;
    }

    & p {
      color: $light;
      margin-left: 16px;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 3px;
    }
  }

  & .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 70vw;

    & p {
      & code {
        text-align: center;
        color: $yellow;
        font-weight: 500;
        font-size: 16px;
        user-select: none;
      }
    }

    & code,
    & span {
      text-align: center;
      color: $light;
      font-size: 48px;
      font-weight: 600;
      display: block;
      text-transform: lowercase;
      user-select: none;
    }

    & .last-row {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
