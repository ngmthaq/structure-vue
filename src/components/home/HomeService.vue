<template>
  <div id="services" @mouseover="app.onOver">
    <v-container fluid class="h-100 pa-0">
      <v-row no-gutters class="h-100">
        <v-col lg="6">
          <img :src="app.state.img" alt="Services image" class="service-image" />
        </v-col>
        <v-col lg="6">
          <div class="card-container">
            <div v-for="(card, index) in app.state.cards" class="card" :key="index" @click="app.onCardHover(card.img)" @mouseover="app.onCardHover(card.img)">
              <h1>{{ card.title }}</h1>
              <p>{{ card.content }}</p>
              <font-awesome-icon :icon="card.icon" class="icon" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { Component, defineClassComponent } from "@/core/component.core";
import imgECommerce from "@/assets/img/img-e-comerce.jpg";
import imgWebApp from "@/assets/img/img-web-app.jpg";
import imgPWA from "@/assets/img/img-progressive-web-app.jpg";
import EventBus from "@/plugins/bus.plugin";
import { CUSTOM_EVENTS } from "@/const/app.const";

const app = defineClassComponent(
  class HomeBanner extends Component {
    public state = this.reactive({
      img: imgECommerce,
      cards: [
        {
          title: "E-Commerce and Landing Page",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero neque aspernatur error quo voluptatem cumque perspiciatis sint, corrupti consectetur eligendi! Quibusdam quis deleniti minus quidem sunt ea itaque eos! Quaerat.",
          img: imgECommerce,
          icon: "fa-solid fa-dollar-sign",
        },
        {
          title: "Blog, News and Web Application",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero neque aspernatur error quo voluptatem cumque perspiciatis sint, corrupti consectetur eligendi! Quibusdam quis deleniti minus quidem sunt ea itaque eos! Quaerat.",
          img: imgWebApp,
          icon: "fa-regular fa-newspaper",
        },
        {
          title: "Progressive Web App",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero neque aspernatur error quo voluptatem cumque perspiciatis sint, corrupti consectetur eligendi! Quibusdam quis deleniti minus quidem sunt ea itaque eos! Quaerat.",
          img: imgPWA,
          icon: "fa-solid fa-mobile-screen",
        },
      ],
    });

    public onCardHover = (img: string) => {
      app.state.img = img;
    };

    public onOver = () => {
      EventBus.emit<string>(CUSTOM_EVENTS.onChangeTab, "services");
    };
  },
);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

#services {
  width: 100%;
  min-height: 100vh;
  background-color: $dark;

  & .service-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .card-container {
    margin-top: 100px;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .card {
      background: transparent;
      box-shadow: none;
      color: $light;
      border: 1px solid $gray;
      margin: 0 40px;
      padding: 16px;
      border-radius: 8px;
      cursor: pointer;
      height: 100%;
      margin-bottom: 32px;
      transition: all 0.1s ease-in-out;
      position: relative;
      overflow: hidden;

      &:hover {
        background-color: $black;
      }

      & p {
        color: $gray-light;
        text-align: justify;
      }

      & .icon {
        position: absolute;
        right: -24px;
        bottom: -24px;
        font-size: 200px;
        color: $blue-light;
        opacity: 0.05;
        z-index: 0;
      }
    }
  }
}
</style>
