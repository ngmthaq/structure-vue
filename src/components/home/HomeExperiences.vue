<template>
  <div id="experiences" @mouseover="app.onOver">
    <div class="resume-cont">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="title-cont">
              <div class="title-bg">Resume</div>
              <h2 class="title">Resume</h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <p class="text-center px-5">
              My résumé includes my learning process in university and my working experiences. I have a little bit of working experiences and I need your
              company to grow it up
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col cols="6">
            <div class="education">
              <h4 class="resume-title">Education</h4>
              <div class="resume-item pb-4">
                <h4>Thuong Mai University</h4>
                <p><em>Management Infomation System and Digital Marketing.</em></p>
                <ul>
                  <li><strong>GPA:</strong> 3.58 / 4.0</li>
                  <li><strong>TOEIC:</strong> 745 / 900</li>
                  <li>
                    <strong>What i'am learned from university:</strong>
                    <br />
                    Database Administration <br />
                    Website Design and Implementation <br />
                    Data Structures and Algorithms
                  </li>
                </ul>
              </div>
              <div class="resume-item pb-4">
                <h4>ITPlus Academy</h4>
                <p><em>Website analysis and design</em></p>
                <ul>
                  <li><strong>Description:</strong> Good</li>
                  <li>
                    <strong>What i'am learned:</strong>
                    <br />
                    Frontend with HTML/CSS/JS/jQuery <br />
                    Backend with PHP/Laravel/MySQL/OOP <br />
                    Convert PSD, PDF to HTML
                  </li>
                </ul>
              </div>
              <div class="resume-item pb-4">
                <h4>VietIS Software Corporation</h4>
                <p><em>Website development internship</em></p>
                <ul>
                  <li>Join project <i>Lecre Album App</i>. <br />This is a web app for manage image and video<br /><br /></li>
                  <li>
                    <strong>What i'am trained:</strong>
                    <br />
                    Frontend with Javascript ES6 and Vuejs <br />
                    Backend with PHP/Laravel/MySQL <br />
                    Convert XD to HTML
                  </li>
                </ul>
              </div>
              <div class="resume-item pb-0">
                <h4>Sun Asterisk Inc.</h4>
                <p><em>Website analysis and design internship</em></p>
                <ul>
                  <li>
                    <strong>What i'am learned:</strong>
                    <br />
                    Frontend with HTML/CSS/JS/jQuery <br />
                    Backend with PHP/Laravel/MySQL/OOP <br />
                    Convert Figma design to HTML
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
          <v-col cols="6" class="mt-4 mt-md-0">
            <div class="working-exp">
              <h3 class="resume-title">bGlobal JSC</h3>
              <div class="resume-item pb-3">
                <h4>bGlobal Website Demo</h4>
                <p><em>Develop website with Next.js</em></p>
                <ul>
                  <li><strong>Role:</strong> Team member</li>
                  <li>The website has features such as posting job vacancies, sharing knowledge, sharing history and developing direction of the company</li>
                  <li>Compatible with all types of desktop, tablet and phone screens</li>
                </ul>
              </div>
              <div class="resume-item pb-3">
                <h4>Trios Web Admin</h4>
                <p><em>Develop website with Reactjs</em></p>
                <ul>
                  <li><strong>Role:</strong> Team member</li>
                  <li>This website is used to manage the administrator features of the server in the Trios application ecosystem</li>
                  <li>Compatible with desktop only</li>
                </ul>
              </div>
              <div class="resume-item pb-3">
                <h4>Trios Desktop App</h4>
                <p><em>Develop desktop application with Electron, Reactjs and SQLite</em></p>
                <ul>
                  <li><strong>Role:</strong> Team member</li>
                  <li>This is application for chat, calling audio/video and create a meeting with E2E encryption</li>
                  <li>Compatible with desktop only</li>
                </ul>
              </div>
              <div class="resume-item pb-3">
                <h4>Blayn Web Admin</h4>
                <p><em>Develop website with PHP and Smarty template engine</em></p>
                <ul>
                  <li><strong>Role:</strong> Team member</li>
                  <li>This website is used to manage the administrator features of the server in the Blayn application ecosystem</li>
                  <li>Compatible with desktop only</li>
                </ul>
              </div>
              <div class="resume-item pb-0">
                <h4>Coast guard information monitoring system</h4>
                <p><em>Develop with Reactjs and Leaflet map</em></p>
                <ul>
                  <li><strong>Role:</strong> Team member</li>
                  <li>Vessel monitoring system supports marine police work</li>
                  <li>Compatible with desktop only</li>
                </ul>
              </div>
            </div>
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

const app = defineClassComponent(
  class HomeBanner extends Component {
    public onOver = () => {
      EventBus.emit<string>(CUSTOM_EVENTS.onChangeTab, "experiences");
    };
  },
);
</script>

<style lang="scss">
#experiences {
  width: 100%;
  margin-top: 100px;
}
</style>
