<template>
  <div class="toolbar-wrapper">
    <v-card color="white lighten-4" flat>
      <v-toolbar color="white darken-1" light class="toolbar-wrapper" fixed>
        <router-link :to="`/`" class="v_toolbar_title title nav-logo black--text fat-text">
           <svg class="logo" viewBox="0 0 284.6 286.3" xmlns="http://www.w3.org/2000/svg">
            <path d="m.1 139c.9-2.5 1.5-5.2 2.8-7.4 1.4-2.5 3.4-4.8 5.4-6.8 38.9-39 77.9-77.9 116.8-116.8 3.5-3.5 7.5-6.2 12.3-7.2 6.9-1.5 13.1.4 18.4 4.9 3.2 2.7 6.1 5.8 9.1 8.7 1.1 1.1 2.1 2.2 3.4 3.5-4.4 4.5-8.9 9-13 13.2-2.6-2.4-5.1-4.7-7.5-7-1.4-1.3-2.6-2.7-4-3.9s-2.5-1.2-4 0c-.5.4-1 .9-1.5 1.4-38.3 38.1-76.5 76.4-114.8 114.6-.6.6-1.1 1.2-1.9 2h39.2v129.3h43.5c0-27.8 0-55.5 0-83.4h74.7v83.4h43.6c0-43 0-86.1 0-129.2.5 0 .9-.1 1.3-.1h56.5c2.5 0 3.2.9 3 3.4-.8 8.9-7.1 13.4-14.2 14.8-2.4.5-4.9.6-7.4.7-6.2.1-12.5 0-18.7 0-.5 0-1 0-1.6 0v1.6 126 1.6c-.5 0-1 0-1.4 0-26.1 0-52.1 0-78.2 0-.5 0-1 0-1.4 0 0-.5 0-1 0-1.6 0-26.8 0-53.5 0-80.3 0-.5 0-1 0-1.6-.6 0-1.1 0-1.5 0-11.4 0-22.9 0-34.3 0-1.6 0-1.6 0-1.6 1.6v80.1c0 .6 0 1.1-.1 1.7-26.9 0-53.9 0-80.8 0 0-.5 0-1 0-1.6 0-41.9 0-83.8 0-125.8 0-.5 0-1 0-1.6-.6-.1-1.1-.2-1.7-.3-1.8-.1-3.5-.1-5.3-.1-2 0-4 0-6 0-5.3.1-10.6.4-15.9-.9-6-1.5-10.6-4.7-12.6-10.9-.2-.7-.4-1.5-.6-2.3 0-1 0-2.3 0-3.7z" />
            <path d="m185.3 77.8c-7.2-7.2-14.4-14.5-21.7-21.9.4-.4 1-.8 1.5-1.3 2.7-2.6 5.3-5.2 8-7.8.9-.9 1.9-1.1 3-.5.9.4 1.8.8 2.8 1.1 1.5.4 2.6-.1 3.6-1.3.8-.9 1.6-1.7 2.5-2.5 1.6-1.4 1.9-2.8.9-4.8-1.2-2.5-1-3.9.9-5.9 1.1-1.2 2.3-2.3 3.5-3.5 7.8-7.8 15.6-15.7 23.5-23.5 2.3-2.3 5-4.2 8.3-5 4.3-1.1 8.3 0 11.7 2.7 3.2 2.6 6.1 5.6 9.2 8.4.9.9 1.9 1.7 2.8 2.6.2.2.5.7.4 1s-.5.6-.8.6c-4.8 1-9.5 1.9-14.3 2.8-3.5.7-6.6 2-9.2 4.5-2.1 2-3 4.1-2.3 7 .6 2.7.9 5.6 1.2 8.4.2 1.8 1 3.3 2.2 4.5 4.9 4.9 9.8 9.8 14.7 14.7 9.6 9.6 19.2 19.3 28.8 28.9 4.6 4.6 9.1 9.2 13.7 13.8 1.5 1.5 3 2.9 4.4 4.2-4.9 5-9.9 10.1-14.9 15.2-.3-.3-.6-.5-.8-.7-15.6-15.6-31.3-31.3-46.9-46.9-4.3-4.3-8.6-8.5-12.7-12.9-2.1-2.2-4.4-3.5-7.3-4.4-1.7-.5-2.8-.3-3.8 1.1-.6.8-1.4 1.4-2.2 2.1-2.1 1.8-2.5 3.6-1.3 6 1 2.1.9 3-.7 4.7-3 2.8-5.8 5.7-8.7 8.6z" />
          </svg>

          {{title}}
        </router-link>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div class="white-header-mobile">
        <div class="hamburg-logo-wrap">
          <Slide right>
            <div class="menu-wrap">
              <router-link :to="`/`" class="v_toolbar_title title nav-logo teal--text fat-text">
                {{title}}
              </router-link>
             
            </div>

            <div class="menu-wrap">
              <div class="submenu-cont">
                <h3 class="menu-heading">
                  Vad vi erbjuder
                </h3>
                <div class="submenu-wrap dd-list-item">
                  <router-link :to="'/våra-tjänster'" class="v-list__tile__title white--text list-item">Tjänster</router-link>
                </div>
              </div>
              <div class="submenu-cont">
                <h3 class="menu-heading">
                  {{title}}
                </h3>
                <div class="submenu-wrap dd-list-item" v-for="(item, index) in omoss" :key="index">
                  <router-link :to="`${item.url}`" class="v-list__tile__title white--text list-item">{{item.titles}}</router-link>
                </div>
              </div>
            </div>

            <div class="menu-wrap quick-contact">
              <a href="https://goo.gl/maps/GrzSNCTdF872" class="list-item burger-list" target="_blank">
                <v-icon class="teal--text text--lighten-2">place</v-icon>
                <br>Stockholm
              </a>
              <br>
              <a href="tel:+0812147429" class="list-item burger-list">
                <v-icon class="teal--text text--lighten-2">phone</v-icon>
                <br>08–121 47 429
              </a>
              <br>
              <a href="mailto:info@renoveringsmaklarna.se" class="list-item burger-list">
                <v-icon class="teal--text text--lighten-2 px-0">email</v-icon>
                <br>info@renoveringsmaklarna.se
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
  import serviceJson from "../../services/services.json";
  import {
    Slide
  } from "vue-burger-menu"; 

  export default {
    components: {
      Slide 
    },
    data() {
      return {
        services: serviceJson,

        omoss: [{
            titles: "Om Oss",
            url: "/om-oss"
          },
          {
            titles: "Kontakt",
            url: "/kontakt"
          }
        ],
        title: "RenoveringsMäklarna"
      };
    }
  };
</script>

<style>


  .v-list__tile__title {
    color: black;
    text-transform: capitalize;
  }

  .v-list__tile__title:hover {
    color: teal;
  }

  .menu-headings {
    position: relative;
    right: 0;
  }

  .dropdown-list {
    padding: 0 15px 0 15px !important;
  }

  .v-menu__content {
    top: 50px !important;
  }

  .dd-list-item {
    padding: 0 15px;
  }

  .toolbar-wrapper {
    box-shadow: 0px 1px 1px 0px rgba(44, 44, 44, 0.7) !important;
  }

  .subheading-nav {
    line-height: 4.5;
  }

  .logo {
    height: 31px;
    position: relative;
    left: 0;
    top: 2px;

  }

  .logo>path {
    margin-left: 20px;
  }

  .nav-logo:hover,
  .logo>.logo-g:hover {
    color: teal !important;
    fill: teal !important;
  }

  .bm-burger-button {
    z-index: 200;
    height: 20px;
    width: 26px;
    position: fixed !important;
    right: 20px !important;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 15px !important;
    cursor: pointer;
  }

  .submenu-wrap {
    padding: 0 00px 10px 0px !important;
  }

  .list-item:focus {
    color: teal !important;
  }

  .menu-wrap {
    display: block;
    width: 300px;
    position: relative;
    margin-top: 20px;
    right: 0;
    text-align: center;
  }

  .menu-heading {
    margin: 0 !important;
    color: #cacada;
    font-weight: 500;
    font-size: 1.1em;
  }

  .bm-menu {
    padding: 0 !important;
  }

  .quick-contact {
    font-size: 0.8em;
    filter: opacity(0.7);
    padding: 0 30px;
  }

  .bm-item-list {
    margin: 0 auto !important;
  }

  .burger-list {
    margin-bottom: 50px;
  }

  .hamburg-logo-wrap {
    display: inline;
  }

  .number {
    color: teal !important;
    font-weight: 300 !important;
    padding: 5px;
    line-height: 2;
    display: block;
    height: 68px !important;
  }
  .fat-text {
    font-weight: bold !important;
  }

  .submenu-cont {
    margin-bottom: 30px !important;
  }
</style>