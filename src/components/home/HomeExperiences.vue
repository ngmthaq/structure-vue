<template>
  <div id="experiences" @mousemove="app.onOver">
    <div class="resume-cont">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="title-cont">
              <div class="title-background">experiences</div>
              <h2 class="title">experiences</h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <p class="text-center px-5 text-white">
              My résumé includes my learning process in university and my working experiences. I have a little bit of working experiences and I need your
              company to grow it up
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col cols="12">
            <HomeTimelines :data="app.state.timelines" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CUSTOM_EVENTS } from "@/const/app.const";
import { Component, defineClassComponent } from "@/core/component.core";
import EventBus from "@/plugins/bus.plugin";
import HomeTimelines from "./HomeTimelines.vue";

const app = defineClassComponent(
  class HomeBanner extends Component {
    public state = this.reactive({
      timelines: [
        {
          company: {
            name: `Thuongmai University - Faculty of Economic Information Systems and E-commerce`,
            image: `https://tmu.edu.vn/template_dhtm/images/logo-sm.png`,
            url: `https://httttmdt.tmu.edu.vn/`,
            description: `Faculty of Economic Information Systems and E-commerce is the leading 
            Faculty of E-commerce and Management Information Systems in the Universities of Economics 
            and Management. Specializing in training experts in E-Commerce and Information 
            Systems for the country at university level. The Faculty is also an in-depth research 
            unit, providing macro policy advice on E-commerce and Information systems for state management 
            agencies, local e-commerce development centers and technology transfer and consulting and 
            corporate governance.`,
            time: `2008`,
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `entering Thuongmai University, faculty of Economic Information Systems in 2018`,
              label: `fa-solid fa-hat-wizard`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `get certificate of basic informatics issued by Thuongmai University in 2018`,
              label: `fa-solid fa-certificate`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `get TOEIC (745) certificate issued by IIG in 2020`,
              label: `fa-solid fa-certificate`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `in the top of 60 best students in the course (2018 - 2022)`,
              label: `fa-solid fa-certificate`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `graduated with a good bachelor's degree in 2022, GPA: 3.58/4.0`,
              label: `fa-solid fa-graduation-cap`,
            },
          ],
        },
      ],
    });

    public onOver = () => {
      EventBus.emit<string>(CUSTOM_EVENTS.onChangeTab, "experiences");
    };
  },
);
</script>

<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

#experiences {
  width: 100%;
  padding-top: 100px;
  background: $dark;
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
    color: $white;
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
