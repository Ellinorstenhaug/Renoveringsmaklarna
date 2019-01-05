<template>

    <!-- <v-toolbar class="white">
            <v-toolbar-title v-text="title"></v-toolbar-title>   
        </v-toolbar> -->
    <div>
        <v-app id="inspire">
            <v-toolbar>
                <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

                <v-menu :nudge-width="100">
                    <v-toolbar-title slot="activator">
                        <span v-text="title"></span>
                    </v-toolbar-title>

                </v-menu>


                <v-spacer></v-spacer>


                <div>
                    <v-toolbar-items class="hidden-sm-and-down">
                        <div class="text-xs-center">
                            <v-menu offset-y>
                                <v-btn slot="activator" flat>Tjänster</v-btn>
                                <v-list>
                                      <router-link to="/start">Start</router-link>
                                    <v-list-tile v-for="(item, index) in items" :key="index" >
                                        <v-list-tile-title>{{ item.titles }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-toolbar-items>
                </div>

                <v-btn flat>Om Oss</v-btn>
                <v-icon light>arrow_drop_down</v-icon>
                <v-btn flat>Kontakt</v-btn>
                <v-icon light>arrow_drop_down</v-icon>
            </v-toolbar>
        </v-app>
    </div>




    <!-- <v-spacer></v-spacer> -->
    <!--
    <router-link to="/about">About</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/about">About</router-link> 
    </div> 

    </v-app> -->
</template>

<script>
    export default {

        data() {
            return {
              items: [{
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
            title: 'Renoveringsmäklarna'
            }
        },


      
    }
</script>

<style>

</style>