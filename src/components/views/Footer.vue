<template>
    <v-footer height="auto" color="rgb(66, 66, 66)">
        <v-container fluid text-xs-center>
            <v-layout justify-center row wrap>
                <v-flex xs12 md2>
                    <v-card dark flat>
                        <v-card-text class="px-0 title white--text text-lg-left text-md-left text-xs-left">{{headings[1]}}</v-card-text>
                        <v-list-tile>
                            <router-link :to="`/om-oss`" class="v-list__tile__title list-item px-0">Om oss</router-link>
                        </v-list-tile>
                        <v-list-tile>
                            <router-link :to="`/kontakt`" class="v-list__tile__title list-item">Kontakt</router-link>
                        </v-list-tile>
                    </v-card>
                </v-flex>
                <v-flex xs12 md2>
                    <v-card dark flat>
                        <v-card-text class="px-0 title white--text text-lg-left text-md-left text-xs-left">
                              <router-link :to="`/våra-tjänster`" class="v-list__tile__title list-item">{{headings[0]}}</router-link>
                            </v-card-text>
                        <v-list-tile v-for="(item, index) in links" :key="index">
                            <router-link :to="`${item.url}`" class="v-list__tile__title list-item">{{item.heading}}</router-link>
                        </v-list-tile>
                    </v-card>
                </v-flex>

                <v-flex xs12 md3>
                    <v-card dark flat>
                        <v-card-text class="px-0 title white--text text-lg-left text-md-left text-xs-left">{{headings[3]}}</v-card-text>
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon class="purple--text text--lighten-2  margin-right-5">phone</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title> <a href="tel:+0812147429" class="list-item">08–121 47 429</a>
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon class="purple--text text--lighten-2 px-0  margin-right-5">email</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title> <a href="mailto:info@renoveringsmaklarna.se" class="list-item ">info@renoveringsmaklarna.se</a></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon class="purple--text text--lighten-2  margin-right-5">place</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title> <a href="https://goo.gl/maps/GrzSNCTdF872" class="list-item margin-right-5"
                                            target="_blank">Grevgatan 12, 114 53 Stockholm</a>
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-flex>


                <v-flex xs12 md2>
                    <v-card dark flat>
                        <v-card-text class="px-0 title white--text text-lg-left text-md-left text-xs-left">{{headings[2]}}</v-card-text>
                        <v-list-tile>
                            <router-link :to="`/om-oss`" class=" px-0 v-list__tile__title list-item">Redovisningsmäklarna</router-link>
                        </v-list-tile>
                        <v-list-tile>
                            <router-link :to="`/kontakt`" class="v-list__tile__title list-item">Sveriges
                                KonferensLokaler</router-link>
                        </v-list-tile>
                        <v-list-tile>
                            <router-link :to="`/kontakt`" class="v-list__tile__title list-item">FestMäklarna</router-link>
                        </v-list-tile>
                    </v-card>
                </v-flex>

            </v-layout>
            <v-layout row>
                <v-flex lighten-2 py-3 text-xs-center white--text class="color">
                    <router-link :to="`/`" class="white--text footer-link">
                    &copy;{{new Date().getFullYear()}} —<svg class="footer-logo" viewBox="0 0 284.6 286.3" xmlns="http://www.w3.org/2000/svg">
          <!-- <path d="m.1 139c0-46.3 0-92.6 0-139h284.9v286.6c-14.5 0-29 0-43.4 0 0-.1 0-.2 0-.3 0-.5 0-1 0-1.6 0-42 0-84 0-126 0-.5 0-1 0-1.6h1.6c6.2 0 12.5.1 18.7 0 2.5 0 5-.2 7.4-.7 7-1.4 13.4-5.9 14.2-14.8.2-2.5-.5-3.4-3-3.4-18.8 0-37.7 0-56.5 0-.4 0-.8 0-1.3.1v129.2c-14.6 0-29 0-43.6 0 0-27.8 0-55.6 0-83.4-25 0-49.8 0-74.7 0v83.4c-14.5 0-29 0-43.5 0 0-43.1 0-86.1 0-129.3-13 0-26 0-39.2 0 .8-.8 1.3-1.5 1.9-2 38.2-38.2 76.4-76.5 114.7-114.7.5-.5 1-.9 1.5-1.4 1.5-1.2 2.6-1.2 4 0s2.7 2.6 4 3.9c2.5 2.3 5 4.6 7.5 7 4.2-4.2 8.6-8.7 13-13.2-1.3-1.3-2.3-2.4-3.4-3.5-3-2.9-5.9-6-9.1-8.7-5.3-4.5-11.5-6.4-18.4-4.9-4.9 1-8.9 3.7-12.3 7.2-38.9 39-77.9 77.9-116.7 116.9-2 2-3.9 4.3-5.4 6.8-1.4 2.3-2 4.9-2.9 7.4zm185.2-61.2c2.8-2.9 5.7-5.8 8.5-8.7 1.6-1.7 1.8-2.6.7-4.7-1.2-2.5-.8-4.3 1.3-6 .8-.6 1.6-1.3 2.2-2.1 1-1.3 2.1-1.6 3.8-1.1 2.8.9 5.2 2.2 7.3 4.4 4.1 4.4 8.4 8.6 12.7 12.9 15.6 15.7 31.3 31.3 46.9 46.9.2.2.5.5.8.7 5.1-5.2 10-10.2 14.9-15.2-1.4-1.3-2.9-2.7-4.4-4.2-4.6-4.6-9.1-9.2-13.7-13.8-9.6-9.6-19.2-19.3-28.8-28.9-4.9-4.9-9.8-9.8-14.7-14.7-1.3-1.3-2-2.7-2.2-4.5-.3-2.8-.6-5.7-1.2-8.4-.7-2.9.2-5.1 2.3-7 2.6-2.4 5.8-3.8 9.2-4.5 4.8-.9 9.5-1.9 14.3-2.8.3-.1.8-.3.8-.6.1-.3-.1-.7-.4-1-.9-.9-1.9-1.8-2.8-2.6-3.1-2.8-6-5.8-9.2-8.4-3.4-2.7-7.4-3.8-11.7-2.7-3.3.8-5.9 2.7-8.3 5-7.8 7.8-15.6 15.7-23.5 23.5-1.2 1.2-2.4 2.3-3.5 3.5-2 2-2.2 3.4-.9 5.9 1 2 .7 3.4-.9 4.8-.9.8-1.7 1.6-2.5 2.5-1 1.1-2.1 1.7-3.6 1.3-.9-.3-1.9-.7-2.8-1.1-1.2-.5-2.1-.4-3 .5-2.6 2.6-5.3 5.2-8 7.8-.5.5-1.1 1-1.5 1.3 7.5 7.6 14.7 14.8 21.9 22z"/> -->
          <path   d="m.1 139c.9-2.5 1.5-5.2 2.8-7.4 1.4-2.5 3.4-4.8 5.4-6.8 38.9-39 77.9-77.9 116.8-116.8 3.5-3.5 7.5-6.2 12.3-7.2 6.9-1.5 13.1.4 18.4 4.9 3.2 2.7 6.1 5.8 9.1 8.7 1.1 1.1 2.1 2.2 3.4 3.5-4.4 4.5-8.9 9-13 13.2-2.6-2.4-5.1-4.7-7.5-7-1.4-1.3-2.6-2.7-4-3.9s-2.5-1.2-4 0c-.5.4-1 .9-1.5 1.4-38.3 38.1-76.5 76.4-114.8 114.6-.6.6-1.1 1.2-1.9 2h39.2v129.3h43.5c0-27.8 0-55.5 0-83.4h74.7v83.4h43.6c0-43 0-86.1 0-129.2.5 0 .9-.1 1.3-.1h56.5c2.5 0 3.2.9 3 3.4-.8 8.9-7.1 13.4-14.2 14.8-2.4.5-4.9.6-7.4.7-6.2.1-12.5 0-18.7 0-.5 0-1 0-1.6 0v1.6 126 1.6c-.5 0-1 0-1.4 0-26.1 0-52.1 0-78.2 0-.5 0-1 0-1.4 0 0-.5 0-1 0-1.6 0-26.8 0-53.5 0-80.3 0-.5 0-1 0-1.6-.6 0-1.1 0-1.5 0-11.4 0-22.9 0-34.3 0-1.6 0-1.6 0-1.6 1.6v80.1c0 .6 0 1.1-.1 1.7-26.9 0-53.9 0-80.8 0 0-.5 0-1 0-1.6 0-41.9 0-83.8 0-125.8 0-.5 0-1 0-1.6-.6-.1-1.1-.2-1.7-.3-1.8-.1-3.5-.1-5.3-.1-2 0-4 0-6 0-5.3.1-10.6.4-15.9-.9-6-1.5-10.6-4.7-12.6-10.9-.2-.7-.4-1.5-.6-2.3 0-1 0-2.3 0-3.7z"/>
          <!-- <path  d="m.1 143.1c.2.8.4 1.5.6 2.3 2 6.2 6.6 9.4 12.6 10.9 5.2 1.3 10.6 1 15.9.9h6c1.8 0 3.5 0 5.3.1.5 0 1 .2 1.7.3v1.6 125.8 1.6.2c-14 0-28 0-42 0-.1-48-.1-95.9-.1-143.7z"/> -->
          <!-- <path  d="m123 286.4c0-.6.1-1.1.1-1.7 0-26.7 0-53.4 0-80.1 0-1.6 0-1.6 1.6-1.6h34.3 1.5v1.6 80.3 1.6.3c-12.5 0-25 0-37.4 0-.1-.3-.1-.3-.1-.4z" /> -->
          <path d="m185.3 77.8c-7.2-7.2-14.4-14.5-21.7-21.9.4-.4 1-.8 1.5-1.3 2.7-2.6 5.3-5.2 8-7.8.9-.9 1.9-1.1 3-.5.9.4 1.8.8 2.8 1.1 1.5.4 2.6-.1 3.6-1.3.8-.9 1.6-1.7 2.5-2.5 1.6-1.4 1.9-2.8.9-4.8-1.2-2.5-1-3.9.9-5.9 1.1-1.2 2.3-2.3 3.5-3.5 7.8-7.8 15.6-15.7 23.5-23.5 2.3-2.3 5-4.2 8.3-5 4.3-1.1 8.3 0 11.7 2.7 3.2 2.6 6.1 5.6 9.2 8.4.9.9 1.9 1.7 2.8 2.6.2.2.5.7.4 1s-.5.6-.8.6c-4.8 1-9.5 1.9-14.3 2.8-3.5.7-6.6 2-9.2 4.5-2.1 2-3 4.1-2.3 7 .6 2.7.9 5.6 1.2 8.4.2 1.8 1 3.3 2.2 4.5 4.9 4.9 9.8 9.8 14.7 14.7 9.6 9.6 19.2 19.3 28.8 28.9 4.6 4.6 9.1 9.2 13.7 13.8 1.5 1.5 3 2.9 4.4 4.2-4.9 5-9.9 10.1-14.9 15.2-.3-.3-.6-.5-.8-.7-15.6-15.6-31.3-31.3-46.9-46.9-4.3-4.3-8.6-8.5-12.7-12.9-2.1-2.2-4.4-3.5-7.3-4.4-1.7-.5-2.8-.3-3.8 1.1-.6.8-1.4 1.4-2.2 2.1-2.1 1.8-2.5 3.6-1.3 6 1 2.1.9 3-.7 4.7-3 2.8-5.8 5.7-8.7 8.6z"/>
          </svg> RenoveringsMäklarna
          </router-link>
                </v-flex>

            </v-layout>
        </v-container>
    </v-footer>
</template>

<script>
    export default {
        props: ['serviceLinks'],
        components: {},
        data: function () {
            return {
                links: this.serviceLinks,
                headings: [
                    'Tjänster',
                    'Mer om oss',
                    'Externa länkar',
                    'Kontakt'
                ],
            }
        },
    }
</script>


<style>
    .foot {
        height: 200px;
        color: rgb(66, 66, 66);
    }

    .list-item {
        text-decoration: none;
        color: white !important;
        padding: 0 0 0 0 !important;
        text-transform: capitalize;
        font-size: 0.95em !important;
    }

    .color {
        background-color: #3c3b3b;
        width: 100% !important;
    }

    .list-item:hover,
    .footer-heading:hover {
        color: teal !important;
        fill:teal !important;
    }

    .v-list__tile {
        padding: 10px !important;
        height: auto !important;
        line-height: 20px !important;
    }

    .v-list__tile__action {
        padding-right: 2px !important;
        /* width:20px; */
        min-width: unset !important;
    }

    .v-list {
        padding: 0px !important;
    }
    .margin-right-5 {
        margin-right:5px !important;
    }
    .footer-logo {
        width:15px;
        left:3px;
        top:1px;
        fill:white;
        margin-right:3px;   
    }
   
</style>