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
            <HomeTimelines
              :data="[
                {
                  company: { name: `Thuong Mai University`, image: `/favicon.ico`, url: `#`, description: `Hihi hehe haha`, time: `24/04.2023` },
                  actions: [
                    {
                      name: `Nguyen Manh Thang`,
                      image: `/favicon.ico`,
                      url: `#`,
                      title: `Hihi hehe hahahaha`,
                      label: `fa-solid fa-user`,
                    },
                  ],
                },
              ]"
            />
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
    public state = this.reactive({});

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
