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
import AppConst from "@/const/app.const";
import { Component, defineClassComponent } from "@/core/component.core";
import EventBus from "@/plugins/bus.plugin";
import HomeTimelines from "./HomeTimelines.vue";
import LogoTMU from "@/assets/img/logo-tmu.jpg";
import LogoITPlus from "@/assets/img/logo-itplus.jpg";
import LogoVietIS from "@/assets/img/logo-vietis.jpg";
import LogoSunAsterisk from "@/assets/img/logo-sun-asterisk.jpg";
import LogoBGlobal from "@/assets/img/logo-bglobal.svg";

const app = defineClassComponent(
  class HomeBanner extends Component {
    public state = this.reactive({
      timelines: [
        {
          company: {
            name: `Thuongmai University - Faculty of Economic Information Systems and E-commerce`,
            image: LogoTMU,
            url: `https://httttmdt.tmu.edu.vn/`,
            description: `Faculty of Economic Information Systems and E-commerce is the leading
            Faculty of E-commerce and Management Information Systems in the Universities of Economics
            and Management. Specializing in training experts in E-Commerce and Information
            Systems for the country at university level. The Faculty is also an in-depth research
            unit, providing macro policy advice on E-commerce and Information systems for state management
            agencies, local e-commerce development centers and technology transfer and consulting and
            corporate governance. Students will learn about specialized subjects on information systems,
            analysis and design of information systems, software development process, website programming, database, ...`,
            time: `2008`,
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `entered Thuongmai University, faculty of Economic Information Systems in 2018`,
              label: `fa-solid fa-hat-wizard`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `got certificate of basic informatics issued by Thuongmai University in 2018`,
              label: `fa-solid fa-certificate`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `got TOEIC (745) certificate issued by IIG in 2020`,
              label: `fa-solid fa-certificate`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `in the top of 60 best graduated students (2018 - 2022)`,
              label: `fa-solid fa-certificate`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `graduated with a distinction bachelor's degree in 2022, GPA: 3.58/4.0`,
              label: `fa-solid fa-graduation-cap`,
            },
          ],
        },
        {
          company: {
            name: `ITPlus Institute of Information Technology`,
            image: LogoITPlus,
            url: `http://itplus-academy.edu.vn/`,
            description: `ITPlus Institute of Information Technology is a leading information technology research and
            skills training unit in Vietnam with specialties such as: "Application Programming" and "Graphic Design -
            Multimedia Communication" . Currently, ITPlus Institute of Information Technology is cooperating with more than
            60 leading enterprises in the field of information technology and graphic design such as: Samsung, LG, FPT Software,
            Viettel, VNPT, CMC, VCCorp, Netnam, Tinhvan, VNG, Gameloft, Esoftflow, Telsoft, Izisolution, Ecommage, Vnext, EcoIT….
            In order to provide high-quality information technology human resources, improve and enhance training programs in line
            with market demand.`,
            time: `2014`,
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `entered ITPlus Academy "Professional web design and programming course with PHP" in 04/2020`,
              label: `fa-solid fa-hat-wizard`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started learning about HTML, CSS, Javascript and jQuery`,
              label: `fa-solid fa-plus`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `can convert PDF files to HTML and build a static site`,
              label: `fa-solid fa-certificate`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started learning about PHP, OOP, MySQL and Laravel`,
              label: `fa-solid fa-plus`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `created a news website project by using Laravel`,
              label: `fa-solid fa-certificate`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `graduated with a distinction's degree in 10/2020`,
              label: `fa-solid fa-graduation-cap`,
            },
          ],
        },
        {
          company: {
            name: `VietIS Software Corporation`,
            image: LogoVietIS,
            url: `https://vietis.com.vn/`,
            description: `By providing a new creative platform, VIETIS enhances people's creativity and productivity,
            and supports developers and companies responsible for next-generation technologies. By incorporating the
            latest technology and innovative business, we create new value and aim to be a globally reliable partner.`,
            time: `2009`,
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started joining VietIS as a intern in 10/2021`,
              label: `fa-solid fa-check`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started learning more about Vuejs, Laravel`,
              label: `fa-solid fa-check`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `join the "Lecre Album App" project to learn more about the real project`,
              label: `fa-solid fa-check`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `stop the internship contract to go back to school in 01/2022`,
              label: `fa-solid fa-xmark`,
            },
          ],
        },
        {
          company: {
            name: `Sun Asterisk`,
            image: LogoSunAsterisk,
            url: `https://sun-asterisk.vn/en/`,
            description: `"Sun" means the Sun with a great source of energy.
            We aim to be a powerful source of illumination and energy to ensure the growth of our current and future business sector
            that has been and will be done here. Sun* is also the Sun that shines, spreads positive energy and brings good things to
            the community and society. The asterisk means multiplication in the programming language, implying that the values Sun*
            brings to society will multiple continuously.`,
            time: `March 1, 2013`,
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started joining Sun* as a intern in 01/2022`,
              label: `fa-solid fa-check`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started learning more about Laravel advanced`,
              label: `fa-solid fa-check`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `created a HRM project by the requirement of the Thuongmai University for the final project`,
              label: `fa-solid fa-check`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `stop the internship contract in 04/2022`,
              label: `fa-solid fa-xmark`,
            },
          ],
        },
        {
          company: {
            name: `bGlobal JSC`,
            image: LogoBGlobal,
            url: `https://bglobalcorp.com/`,
            description: `Our mission is to create innovative information technology products to serve the community.
            For our partners, we reveal the hidden value of their business by providing innovative advice and solutions.
            Thereby, we help partners to compete and succeed in this fluctuating technology world.`,
            time: `2019`,
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started joining bGlobal as a fresher frontend developer in 04/2022`,
              label: `fa-solid fa-check`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started learning more about Reactjs, Nextjs, Electron, Typescript,...`,
              label: `fa-solid fa-check`,
            },
          ],
        },
        {
          company: {
            name: `bGlobal JSC - Trios Web Admin`,
            image: LogoBGlobal,
            url: `https://bglobalcorp.com/`,
            description: `This website is used to manage the administrator features of the server in the Trios
            application ecosystem and it compatible with desktop only. Application will be built with Reactjs,
            Redux, Saga, Material-UI and Axios. Project's team member is 1 member. Project features: login, logout,
            setup user infomation for user who login into this application for the first time, change user password,
            change user information, invite people into Trios ecosystem and upgrage server pricing. Some pictures of the application:`,
            time: `2022`,
            descriptionImage: ["/trios-web-admin-0.png", "/trios-web-admin-1.png", "/trios-web-admin-2.png", "/trios-web-admin-3.png"],
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started building this project`,
              label: `fa-solid fa-check`,
            },
          ],
        },
        {
          company: {
            name: `bGlobal JSC - Company Website`,
            image: LogoBGlobal,
            url: `https://bglobalcorp.com/`,
            description: `The website has features such as posting job vacancies, sharing knowledge, sharing history and developing direction of the company.
            Compatible with all types of desktop, tablet and phone screens. Application will be built with Reactjs, Nextjs,
            Redux, Saga, Material-UI and Axios. Project's team member is 2 members. Project features: homepage, about us, blogs, products, career, 
            services and contact. Some pictures of the application:`,
            time: `2022`,
            descriptionImage: ["/bglobal-website-0.png", "/bglobal-website-1.png", "/bglobal-website-2.png", "/bglobal-website-3.png"],
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `started building this project`,
              label: `fa-solid fa-check`,
            },
          ],
        },
        {
          company: {
            name: `bGlobal JSC - Trios Desktop App`,
            image: LogoBGlobal,
            url: `https://bglobalcorp.com/`,
            description: `This is a messaging application that can message individuals through the phone number they have registered. 
            Apps can create groups to message each other. In the later phases, the application has integrated calling for 
            individuals as well as calling in groups. In addition, the application also supports setting up online meetings and screen sharing. 
            This is an application located in the Trios ecosystem including: Trios Web Admin, Trios Android, Trios IOS and Trios Desktop. 
            Project is using Reactjs, Electron, SQLite, Redux, Saga, I18n, Axios, Material-UI and E2E encryption. Project team member: 4 members.`,
            time: `2022`,
            descriptionImage: ["/trios-desktop-0.png", "/trios-desktop-1.png"],
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `joined PJ16 - Improve UI in 2022`,
              label: `fa-solid fa-check`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `joined PJ06 - Init audio calling in 2022`,
              label: `fa-solid fa-check`,
            },
          ],
        },
        {
          company: {
            name: `bGlobal JSC - Blayn Web Admin`,
            image: LogoBGlobal,
            url: `https://bglobalcorp.com/`,
            description: `This is a website for managing POS machines in the ecosystem of Blayn (https://www.blayn.com/) - a company that specializes 
            in providing payment solutions for F&B businesses with its POS products. Project features: Login, logout, manage category of POS machine, 
            manage products in POS machine, manage favorive products, export/import products into POS machine from CSV, employee manager, multiple language of 
            products, preview products in POS machine, update holiday and dayoff, toggle show/hide product in POS machine, create logger,... 
            Project team member: 5 members. Project is using HTML, CSS, jQuery, PHP, Smarty Template engine, PHP-Mailer and MySQL. Some pictures of project:`,
            time: `2022`,
            descriptionImage: ["/blayn-0.png", "/blayn-1.png", "/blayn-2.png", "/blayn-3.png"],
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `joined PJ106 - Improve UI of Web Admin in 2022`,
              label: `fa-solid fa-check`,
            },
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `joined PJ110 - Init multi language for POS Machine in 2023`,
              label: `fa-solid fa-check`,
            },
          ],
        },
        {
          company: {
            name: `bGlobal JSC - Coast Guard`,
            image: LogoBGlobal,
            url: `https://bglobalcorp.com/`,
            description: `This is a website with the purpose of supporting the management of ships and weather used internally 
            in the Coast Guard management system. The functions of the project include: login, log out, add users to the system, 
            manage ships in police observation groups, port management, violation ship management, area management monitor at sea, 
            view information about ships, view ship's movement history, generate reports, view reports,... Project is using Reactjs, Redux, 
            Saga, Material-UI, Leaflet. Project team member: 2 members. Some pictures of project:`,
            time: `2022`,
            descriptionImage: ["/csb-0.png", "/csb-1.png", "/csb-2.png", "/csb-3.png"],
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `joined PJ01 - Init application to support marine police work in 2022`,
              label: `fa-solid fa-check`,
            },
          ],
        },
        {
          company: {
            name: `bGlobal JSC - HAJ`,
            image: LogoBGlobal,
            url: `https://bglobalcorp.com/`,
            description: `This is a website that aims to provide job search services in Japan. 
            Built with PWA technology that can be downloaded and installed on both computers, 
            android and ios. The functions of the application are filtering jobs, saving and deleting 
            jobs that are not suitable, viewing job details, contacting companies to work, viewing 
            history of viewed jobs,... Project is using Typescript, Reactjs, Redux-toolkits, Material-UI, 
            Service Worker, Google Analytics, Firebase Cloud Messaging,... Project member: 2 members.
            (https://pwa.shufukita.com/)`,
            time: `2023`,
            descriptionImage: ["/haj-0.png", "/haj-1.png", "/haj-2.png", "/haj-3.png"],
          },
          actions: [
            {
              name: `Nguyen Manh Thang`,
              image: `https://avatars.githubusercontent.com/u/77906116?v=4`,
              url: `https://github.com/ngmthaq`,
              title: `joined PJ01 - Init minestone 1 in 2023`,
              label: `fa-solid fa-check`,
            },
          ],
        },
      ],
    });

    public onOver = () => {
      EventBus.emit<string>(AppConst.CUSTOM_EVENTS.onChangeTab, "experiences");
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
  background: #0d1117;
  border-bottom: 1px solid $dark;
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
