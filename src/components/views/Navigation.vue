<template>
    <div class="toolbar-wrapper">
        <!-- <v-app> -->
            <v-toolbar >
                <v-menu :nudge-width="100">
                    <v-toolbar-title slot="activator">
                        <span v-text="title"></span>
                    </v-toolbar-title>
                </v-menu>
                <v-spacer></v-spacer>
                <div>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <div class="text-xs-center">
                            <v-menu offset-y  open-on-hover>
                                <v-btn slot="activator" flat class="menu-item" >Tjänster</v-btn>
                                <v-list>

                                <v-list-tile v-for="(item, index) in services" :key="index" >
                                <router-link :to="`${item.url}`" class="v-list__tile__title">{{item.heading}}</router-link>
                                <!-- <v-list-tile-title>{{ item.heading }}</v-list-tile-title> -->
                                           
                                    </v-list-tile>


                                    <!-- <v-list-tile v-for="(item, index) in tjanster" :key="index" >
                                        <v-list-tile-title>{{ item.titles }}</v-list-tile-title>
                                    </v-list-tile> -->
                                </v-list>
                            </v-menu>
                        </div>
                    </v-toolbar-items>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <div class="text-xs-center">
                            <v-menu offset-y  open-on-hover>
                                <v-btn slot="activator" flat class="menu-item" >Om Oss</v-btn>
                                <v-list>
                                      <router-link to="/start">Start</router-link>
                                    <v-list-tile v-for="(item, index) in omoss" :key="index" >
                                        <v-list-tile-title>{{ item.titles }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-toolbar-items>
                </div>
                <!-- <v-btn flat>Om Oss</v-btn>
                <v-icon light>arrow_drop_down</v-icon>
                <v-btn flat>Kontakt</v-btn>
                <v-icon light>arrow_drop_down</v-icon> -->
            </v-toolbar>
        <!-- </v-app> -->
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
                    titles: 'Om RenoveringsMäklarna'
                },
                {
                    titles: 'Kök'
                },
            ],
            title: 'Renoveringsmäklarna'
            }
        },
    }
</script>

<style>
.toolbar-wrapper {
    box-shadow: 0px 1px 1px 0px rgba(44, 44, 44, 0.7) !important;
    margin-bottom:1px;

}
</style>