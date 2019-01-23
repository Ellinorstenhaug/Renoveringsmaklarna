<template>
  <div class="toolbar-wrapper">
    <v-card color="white lighten-4" flat>
      <v-toolbar color="white darken-1" light class="toolbar-wrapper" fixed>
        <!-- <v-btn flat gray class="number">
                    <v-icon class="teal--text text--lighten-2">phone</v-icon>
                    08–121 47 429
        </v-btn>-->
        <router-link :to="`/`" class="v_toolbar_title title nav-logo black--text fat-text">
          <!-- <img src="@/assets/RM-01.svg" alt class="logo"> -->
          <svg class="logo" viewBox="0 0 284.6 286.3" xmlns="http://www.w3.org/2000/svg">
          <!-- <path d="m.1 139c0-46.3 0-92.6 0-139h284.9v286.6c-14.5 0-29 0-43.4 0 0-.1 0-.2 0-.3 0-.5 0-1 0-1.6 0-42 0-84 0-126 0-.5 0-1 0-1.6h1.6c6.2 0 12.5.1 18.7 0 2.5 0 5-.2 7.4-.7 7-1.4 13.4-5.9 14.2-14.8.2-2.5-.5-3.4-3-3.4-18.8 0-37.7 0-56.5 0-.4 0-.8 0-1.3.1v129.2c-14.6 0-29 0-43.6 0 0-27.8 0-55.6 0-83.4-25 0-49.8 0-74.7 0v83.4c-14.5 0-29 0-43.5 0 0-43.1 0-86.1 0-129.3-13 0-26 0-39.2 0 .8-.8 1.3-1.5 1.9-2 38.2-38.2 76.4-76.5 114.7-114.7.5-.5 1-.9 1.5-1.4 1.5-1.2 2.6-1.2 4 0s2.7 2.6 4 3.9c2.5 2.3 5 4.6 7.5 7 4.2-4.2 8.6-8.7 13-13.2-1.3-1.3-2.3-2.4-3.4-3.5-3-2.9-5.9-6-9.1-8.7-5.3-4.5-11.5-6.4-18.4-4.9-4.9 1-8.9 3.7-12.3 7.2-38.9 39-77.9 77.9-116.7 116.9-2 2-3.9 4.3-5.4 6.8-1.4 2.3-2 4.9-2.9 7.4zm185.2-61.2c2.8-2.9 5.7-5.8 8.5-8.7 1.6-1.7 1.8-2.6.7-4.7-1.2-2.5-.8-4.3 1.3-6 .8-.6 1.6-1.3 2.2-2.1 1-1.3 2.1-1.6 3.8-1.1 2.8.9 5.2 2.2 7.3 4.4 4.1 4.4 8.4 8.6 12.7 12.9 15.6 15.7 31.3 31.3 46.9 46.9.2.2.5.5.8.7 5.1-5.2 10-10.2 14.9-15.2-1.4-1.3-2.9-2.7-4.4-4.2-4.6-4.6-9.1-9.2-13.7-13.8-9.6-9.6-19.2-19.3-28.8-28.9-4.9-4.9-9.8-9.8-14.7-14.7-1.3-1.3-2-2.7-2.2-4.5-.3-2.8-.6-5.7-1.2-8.4-.7-2.9.2-5.1 2.3-7 2.6-2.4 5.8-3.8 9.2-4.5 4.8-.9 9.5-1.9 14.3-2.8.3-.1.8-.3.8-.6.1-.3-.1-.7-.4-1-.9-.9-1.9-1.8-2.8-2.6-3.1-2.8-6-5.8-9.2-8.4-3.4-2.7-7.4-3.8-11.7-2.7-3.3.8-5.9 2.7-8.3 5-7.8 7.8-15.6 15.7-23.5 23.5-1.2 1.2-2.4 2.3-3.5 3.5-2 2-2.2 3.4-.9 5.9 1 2 .7 3.4-.9 4.8-.9.8-1.7 1.6-2.5 2.5-1 1.1-2.1 1.7-3.6 1.3-.9-.3-1.9-.7-2.8-1.1-1.2-.5-2.1-.4-3 .5-2.6 2.6-5.3 5.2-8 7.8-.5.5-1.1 1-1.5 1.3 7.5 7.6 14.7 14.8 21.9 22z"/> -->
          <path   d="m.1 139c.9-2.5 1.5-5.2 2.8-7.4 1.4-2.5 3.4-4.8 5.4-6.8 38.9-39 77.9-77.9 116.8-116.8 3.5-3.5 7.5-6.2 12.3-7.2 6.9-1.5 13.1.4 18.4 4.9 3.2 2.7 6.1 5.8 9.1 8.7 1.1 1.1 2.1 2.2 3.4 3.5-4.4 4.5-8.9 9-13 13.2-2.6-2.4-5.1-4.7-7.5-7-1.4-1.3-2.6-2.7-4-3.9s-2.5-1.2-4 0c-.5.4-1 .9-1.5 1.4-38.3 38.1-76.5 76.4-114.8 114.6-.6.6-1.1 1.2-1.9 2h39.2v129.3h43.5c0-27.8 0-55.5 0-83.4h74.7v83.4h43.6c0-43 0-86.1 0-129.2.5 0 .9-.1 1.3-.1h56.5c2.5 0 3.2.9 3 3.4-.8 8.9-7.1 13.4-14.2 14.8-2.4.5-4.9.6-7.4.7-6.2.1-12.5 0-18.7 0-.5 0-1 0-1.6 0v1.6 126 1.6c-.5 0-1 0-1.4 0-26.1 0-52.1 0-78.2 0-.5 0-1 0-1.4 0 0-.5 0-1 0-1.6 0-26.8 0-53.5 0-80.3 0-.5 0-1 0-1.6-.6 0-1.1 0-1.5 0-11.4 0-22.9 0-34.3 0-1.6 0-1.6 0-1.6 1.6v80.1c0 .6 0 1.1-.1 1.7-26.9 0-53.9 0-80.8 0 0-.5 0-1 0-1.6 0-41.9 0-83.8 0-125.8 0-.5 0-1 0-1.6-.6-.1-1.1-.2-1.7-.3-1.8-.1-3.5-.1-5.3-.1-2 0-4 0-6 0-5.3.1-10.6.4-15.9-.9-6-1.5-10.6-4.7-12.6-10.9-.2-.7-.4-1.5-.6-2.3 0-1 0-2.3 0-3.7z"/>
          <!-- <path  d="m.1 143.1c.2.8.4 1.5.6 2.3 2 6.2 6.6 9.4 12.6 10.9 5.2 1.3 10.6 1 15.9.9h6c1.8 0 3.5 0 5.3.1.5 0 1 .2 1.7.3v1.6 125.8 1.6.2c-14 0-28 0-42 0-.1-48-.1-95.9-.1-143.7z"/> -->
          <!-- <path  d="m123 286.4c0-.6.1-1.1.1-1.7 0-26.7 0-53.4 0-80.1 0-1.6 0-1.6 1.6-1.6h34.3 1.5v1.6 80.3 1.6.3c-12.5 0-25 0-37.4 0-.1-.3-.1-.3-.1-.4z" /> -->
          <path d="m185.3 77.8c-7.2-7.2-14.4-14.5-21.7-21.9.4-.4 1-.8 1.5-1.3 2.7-2.6 5.3-5.2 8-7.8.9-.9 1.9-1.1 3-.5.9.4 1.8.8 2.8 1.1 1.5.4 2.6-.1 3.6-1.3.8-.9 1.6-1.7 2.5-2.5 1.6-1.4 1.9-2.8.9-4.8-1.2-2.5-1-3.9.9-5.9 1.1-1.2 2.3-2.3 3.5-3.5 7.8-7.8 15.6-15.7 23.5-23.5 2.3-2.3 5-4.2 8.3-5 4.3-1.1 8.3 0 11.7 2.7 3.2 2.6 6.1 5.6 9.2 8.4.9.9 1.9 1.7 2.8 2.6.2.2.5.7.4 1s-.5.6-.8.6c-4.8 1-9.5 1.9-14.3 2.8-3.5.7-6.6 2-9.2 4.5-2.1 2-3 4.1-2.3 7 .6 2.7.9 5.6 1.2 8.4.2 1.8 1 3.3 2.2 4.5 4.9 4.9 9.8 9.8 14.7 14.7 9.6 9.6 19.2 19.3 28.8 28.9 4.6 4.6 9.1 9.2 13.7 13.8 1.5 1.5 3 2.9 4.4 4.2-4.9 5-9.9 10.1-14.9 15.2-.3-.3-.6-.5-.8-.7-15.6-15.6-31.3-31.3-46.9-46.9-4.3-4.3-8.6-8.5-12.7-12.9-2.1-2.2-4.4-3.5-7.3-4.4-1.7-.5-2.8-.3-3.8 1.1-.6.8-1.4 1.4-2.2 2.1-2.1 1.8-2.5 3.6-1.3 6 1 2.1.9 3-.7 4.7-3 2.8-5.8 5.7-8.7 8.6z"/>
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


              <!-- <div class="submenu-wrap dd-list-item" v-for="(item, index) in services.slice(1,8)" :key="index">
                <router-link
                  :to="`${item.url}`"
                  class="v-list__tile__title white--text list-item"
                >{{item.heading}}</router-link>
              </div> -->
            </div>

            <div class="menu-wrap">
              <h3 class="menu-heading">
                Vad vi erbjuder
                <!-- <v-icon dark>arrow_drop_down</v-icon> -->
              </h3>
              <div class="submenu-wrap dd-list-item">
                <router-link :to="'/våra-tjänster'" class="v-list__tile__title white--text list-item">Tjänster</router-link>
              </div>
              <h3 class="menu-heading">
                {{title}}
                <!-- <v-icon dark>arrow_drop_down</v-icon> -->
              </h3>
              <div class="submenu-wrap dd-list-item" v-for="(item, index) in omoss" :key="index">
                <router-link :to="`${item.url}`" class="v-list__tile__title white--text list-item">{{item.titles}}</router-link>
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
  } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`

  export default {
    components: {
      Slide // Register your component
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
        title: "Renoveringsmäklarna"
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
    /* margin-bottom: 1px; */
  }

  .subheading-nav {
    line-height: 4.5;
  }

  .logo {
    height: 24px;
    position:relative;
    left:0;
    top:2px;

  }
  .logo>path {
    margin-left:20px;
  }

  .nav-logo:hover,
  .logo>path:hover {
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

  /* .white-header-mobile {
  position: fixed;
  background-color: white;
  width: 100% !important;
  height: 62px !important;
  top: 0;
  z-index: 4000;
    box-shadow: 0px 1px 1px 0px rgba(44, 44, 44, 0.7) !important;

} */
.fat-text {
  font-weight: bold !important;
}

</style>