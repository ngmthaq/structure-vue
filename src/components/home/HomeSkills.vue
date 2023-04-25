<template>
  <div id="skills" @mousemove="app.onOver">
    <div class="title-cont">
      <div class="title-background">Skills</div>
      <h2 class="title">Skills</h2>
    </div>
    <p class="text-center text-white">This is my technical skills, please check it out!</p>
    <SlickCarosel
      id="slick"
      :slides-to-show="5"
      :center-mode="false"
      :dots="false"
      :autoplay="true"
      :arrows="false"
      :rtl="false"
      :pause-on-hover="false"
      :draggable="false"
    >
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-html.png" />
        <p>HTML</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-css.png" />
        <p>CSS</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-js.png" />
        <p>Javascript</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-jquery.png" />
        <p>jQuery</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-bootstrap.png" />
        <p>Bootstrap</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-sass.png" />
        <p>SASS</p>
      </div>
    </SlickCarosel>
    <SlickCarosel
      id="slick2"
      :slides-to-show="5"
      :center-mode="false"
      :dots="false"
      :autoplay="true"
      :arrows="false"
      :rtl="true"
      :pause-on-hover="false"
      :draggable="false"
    >
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-reactjs.png" />
        <p>React JS</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-nextjs.png" />
        <p>Next JS</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-electronjs.png" />
        <p>Electron</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-mui.png" />
        <p>Material UI</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-typescript.png" />
        <p>Typescript</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-vuejs.png" />
        <p>Vue JS</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-nuxt.png" />
        <p>Nuxt JS</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-vuetify.png" />
        <p>Vuetify</p>
      </div>
    </SlickCarosel>
    <SlickCarosel
      id="slick3"
      :slides-to-show="5"
      :center-mode="false"
      :dots="false"
      :autoplay="true"
      :arrows="false"
      :rtl="false"
      :pause-on-hover="false"
      :draggable="false"
    >
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-git.png" />
        <p>Git</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-express.png" />
        <p>Express JS</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-php.png" />
        <p>PHP</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-laravel.png" />
        <p>Laravel</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-mysql.png" />
        <p>MySQL</p>
      </div>
      <div class="skill_slider_item">
        <img src="@/assets/img/icon-sqlite.png" />
        <p>SQLite</p>
      </div>
    </SlickCarosel>
  </div>
</template>

<script setup lang="ts">
import EventBus from "@/plugins/bus.plugin";
import SlickCarosel from "../common/SlickCarosel.vue";
import { Component, defineClassComponent } from "@/core/component.core";
import { CUSTOM_EVENTS } from "@/const/app.const";

const app = defineClassComponent(
  class HomeBanner extends Component {
    public onOver = () => {
      EventBus.emit<string>(CUSTOM_EVENTS.onChangeTab, "skills");
    };
  },
);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

#skills {
  width: 100%;
  padding: 100px 0;
  min-height: 100vh;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("@/assets/img/img-home-banner.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  background-attachment: fixed;

  & #slick,
  & #slick2,
  & #slick3 {
    margin-top: 80px;
  }

  & .skill_slider_item {
    width: 126px;
    height: 126px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & img {
      width: auto;
      height: 80px;
      object-fit: contain;
      margin-bottom: 16px;
    }

    & p {
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 0;
      color: $light;
      opacity: 0.9;
    }
  }
}

.title-cont {
  height: 88px;
  position: relative;

  & .title {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 0;
    color: $light;
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  & .title-background {
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 0;
    color: $gray-light;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.1;
    user-select: none;
  }
}
</style>
