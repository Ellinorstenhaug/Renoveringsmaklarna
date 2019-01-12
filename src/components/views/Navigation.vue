<template>
    <div class="toolbar-wrapper">
        <v-card color="white lighten-4" flat>
            <v-toolbar color="white darken-1" light class="toolbar-wrapper">
                <v-menu class="menu-headings">
                    <v-toolbar-side-icon class="hidden-md-and-up" slot="activator"></v-toolbar-side-icon>
                    <div>
                        <v-list dense>
                            <v-list-tile>
                                <v-list-tile-title>Tjänster</v-list-tile-title>
                            </v-list-tile>
                            <v-menu offset-x open-on-hover>
                                <v-list-tile slot="activator">
                                    <v-list-tile-title>Om oss 2</v-list-tile-title>
                                    <v-list-tile-action class="justify-end">
                                        <v-icon>play_arrow</v-icon>
                                    </v-list-tile-action>
                                </v-list-tile>
                                <v-list dense>
                                    <v-list-tile v-for="(item, index) in omoss" :key="index">
                                        <v-list-tile-title>{{ item.titles }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        </v-list>
                    </div>
                </v-menu>

                
                <router-link :to="`/`" class="v_toolbar_title title nav-logo black--text"><img src="@/assets/logo-rm2.png" alt="" class="logo"> {{title}}</router-link>
                <v-spacer></v-spacer>


                <div class="dropdown hidden-sm-and-down">

                    <v-spacer></v-spacer>

                    <v-menu class="menu-headings mr-5" top open-on-hover>
                        <v-toolbar-items slot="activator">
                            <v-btn flat class="subheading-nav">Tjänster</v-btn>
                            <v-icon light>arrow_drop_down</v-icon>
                        </v-toolbar-items>

                        <v-list class="dropdown-list">
                            <v-list-tile v-for="(item, index) in services" :key="index" class="dd-list-item">
                                <router-link :to="`${item.url}`" class="v-list__tile__title">{{item.heading}}</router-link>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                    <v-menu class="menu-headings mr-5" top open-on-hover>
                        <v-toolbar-items slot="activator">
                            <v-btn flat class="subheading-nav ">Om Oss</v-btn>
                            <v-icon light>arrow_drop_down</v-icon>
                        </v-toolbar-items>
                        <v-list class="dropdown-list">
                            <v-list-tile v-for="(item, index) in omoss" :key="index" class="dd-list-item">
                                <router-link :to="`${item.url}`" class="v-list__tile__title">{{item.titles}}</router-link>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </div>

            </v-toolbar>
        </v-card>
    </div>


</template>

<script>
    import serviceJson from '../../services/services.json';

    export default {
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
                        titles: 'Om RenoveringsMäklarna',
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
</style>