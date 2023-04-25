<template>
  <div id="contact" @mousemove="app.onOver">
    <div class="contact-cont">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="title-cont">
              <div class="title-background">Contact</div>
              <h2 class="title">Contact</h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <p class="text-center text-white">If you need a software engineer, please contact me through the information below</p>
          </v-col>
        </v-row>
        <div class="row mt-2">
          <v-col cols="12">
            <div class="social-links">
              <a target="blank" href="https://www.facebook.com/ngmthaq/" class="facebook social">
                <font-awesome-icon :icon="['fab', 'facebook']" />
              </a>
              <a href="https://www.linkedin.com/in/nguyen-manh-thang-62b589157/" target="blank" class="social in">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
              <a href="https://github.com/ngmthaq" class="github social" target="blank">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a target="blank" href="https://join.skype.com/invite/yoPkAbUB4kXA" class="skype social">
                <font-awesome-icon :icon="['fab', 'skype']" />
              </a>
              <a href="tel:+84389884507" class="phone social" target="blank">
                <font-awesome-icon :icon="['fas', 'phone']" />
              </a>
              <a href="mailto:nguyenmanhthang2000.fb@gmail.com" target="blank" class="mail social">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
            </div>
          </v-col>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Component, defineClassComponent } from "@/core/component.core";
import EventBus from "@/plugins/bus.plugin";
import { CUSTOM_EVENTS } from "@/const/app.const";

const app = defineClassComponent(
  class HomeBanner extends Component {
    public onOver = () => {
      EventBus.emit<string>(CUSTOM_EVENTS.onChangeTab, "contact");
    };
  },
);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

#contact {
  width: 100%;
  height: 100%;
  background-color: #0d1117;
}

.contact-cont {
  position: relative;
}

.contact-cont .custom-box {
  box-shadow: 0px 0px 8px 2px #cccccc;
  border-radius: 4px;
  padding: 36px;
  min-height: 258px;
}

.contact-cont .icon-box {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  font-size: 24px;
  color: #ffb727;
  background-color: #fff6e4;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.contact-cont h3 {
  font-size: 20px;
  color: #777777;
  font-weight: 700;
  margin: 16px 0 32px;
  text-align: center;
}

.contact-cont .social-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-cont a.social {
  font-size: 18px;
  display: inline-block;
  color: #687683;
  line-height: 1;
  margin: 0 8px;
  transition: 0.3s;
  padding: 14px;
  border-radius: 50px;
  background-color: #fefefe;
  transition: all 0.2s ease-in-out;
}

.contact-cont a.social.facebook:hover {
  background-color: #0f91f3;
  color: #fefefe;
}

.contact-cont a.social.skype:hover {
  background-color: #00b7f0;
  color: #fefefe;
}

.contact-cont a.social.in:hover {
  background-color: #006b8b;
  color: #fefefe;
}

.contact-cont a.social.mail:hover {
  background-color: #ea4335;
  color: #fefefe;
}

.contact-cont a.social.phone:hover {
  background-color: #3b3b3b;
  color: #fefefe;
}

.contact-cont a.social.github:hover {
  background-color: #000000;
  color: #fefefe;
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
