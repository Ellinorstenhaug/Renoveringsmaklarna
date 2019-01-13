<template>
    <div class="toolbar-wrapper">
        <v-card color="white lighten-4" flat>
            <v-toolbar color="white darken-1" light class="toolbar-wrapper">
                <!-- <v-btn flat gray class="number">
                    <v-icon class="purple--text text--lighten-2">phone</v-icon>
                    08–121 47 429
                </v-btn> -->

                <router-link :to="`/`" class="v_toolbar_title title nav-logo black--text"><img src="@/assets/RM-01.svg"
                        alt="" class="logo"> {{title}}</router-link>
                <v-spacer></v-spacer>
            </v-toolbar>
            <div class="hamburg-logo-wrap">
                <Slide right>
                    <div class="menu-wrap">
                        <h3 class="menu-heading">Tjänster</h3>
                        <div class="submenu-wrap dd-list-item" v-for="(item, index) in services" :key="index">
                            <router-link :to="`${item.url}`" class="v-list__tile__title white--text list-item">{{item.heading}}</router-link>
                        </div>
                    </div>

                    <div class="menu-wrap">
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
                            <v-icon class="purple--text text--lighten-2">place</v-icon><br>Stockholm
                        </a><br>
                        <a href="tel:+7778675309" class="list-item burger-list">
                            <v-icon class="purple--text text--lighten-2">phone</v-icon><br>777-867-5309
                        </a><br>
                        <a href="mailto:info@renoveringsmaklarna.se" class="list-item burger-list">
                            <v-icon class="purple--text text--lighten-2 px-0">email</v-icon><br>info@renoveringsmaklarna.se
                        </a>
                    </div>

                </Slide>
            </div>
        </v-card>
    </div>
</template>

<script>
    import serviceJson from '../../services/services.json';
    import {
        Slide
    } from 'vue-burger-menu' // import the CSS transitions you wish to use, in this case we are using `Slide`


    export default {
        components: {
            Slide // Register your component
        },
        data() {
            return {
                services: serviceJson,
                tjanster: [{
                        titles: 'Badrum Badrum '
                    },
                    {
                        titles: 'Kök'
                    },
                    {
                        titles: 'Click Me'
                    },
                    {
                        titles: 'Click Me 2'
                    }
                ],
                omoss: [{
                        titles: 'Om Oss',
                        url: '/om-oss'
                    },
                    {
                        titles: 'Kontakt',
                        url: '/kontakt'
                    },
                ],
                title: 'Renoveringsmäklarna'
            }
        },
    }
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
        margin-right: 5px;
    }

    .nav-logo:hover,
    .logo:hover {
        color: teal !important;
        fill: teal !important;
    }

    .bm-burger-button {
        z-index: 200;
        height: 20px;
        width: 26px;
        /* left: 20px; */
        position: absolute;
        top: 26px;
        right: 20px;
    }

    .submenu-wrap {
        padding: 0 30px 10px 20px !important;

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
        color: purple !important;
        font-weight: 300 !important;
        padding: 5px;
        line-height: 2;
        display: block;
        height: 68px !important;
    }
</style>