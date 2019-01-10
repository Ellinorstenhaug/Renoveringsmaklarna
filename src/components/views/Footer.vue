<template>
    <v-footer height="auto" color="rgb(66, 66, 66)">
        <v-container fluid text-xs-center>
            <v-layout justify-center row wrap>
                <v-flex xs12 md2>
                    <v-card dark flat>
                        <v-card-text class="px-0 title white--text text-lg-left text-md-left text-xs-left">{{headings[0]}}</v-card-text>
                        <v-list-tile v-for="(item, index) in links" :key="index">
                            <router-link :to="`${item.url}`" class="v-list__tile__title list-item">{{item.heading}}</router-link>
                        </v-list-tile>
                    </v-card>
                </v-flex>

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


                <v-flex xs12 md3>
                    <v-card dark flat>
                        <v-card-text class="px-0 title white--text text-lg-left text-md-left text-xs-left">{{headings[3]}}</v-card-text>
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon class="purple--text text--lighten-2">phone</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>  <a href="tel:+7778675309" class="list-item">777-867-5309</a>
                                        </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon class="purple--text text--lighten-2">place</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title> <a href="https://goo.gl/maps/GrzSNCTdF872" class="list-item" target="_blank">Stockholm</a>
                                       </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon class="purple--text text--lighten-2 px-0">email</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title> <a href="mailto:info@renoveringsmaklarna.se" class="list-item">info@renoveringsmaklarna.se</a></v-list-tile-title>
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
                    &copy;2019 — RenoveringsMäklarna
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
        color: white;
        padding: 0 0 0 0 !important;
        text-transform: capitalize;
        font-size:0.95em !important;
    }

    .color {
        background-color: #3c3b3b;
        width: 100% !important;
    }

    .list-item:hover,
    .footer-heading:hover {
        color: teal !important;
    }

    .v-list__tile {
        padding: 10px !important;
        height: auto !important;
        line-height: 20px !important;
    }
    .v-list__tile__action {
        padding-right:2px !important;
        /* width:20px; */
        min-width: unset !important;
    }

    .v-list {
        padding:0px !important;
    }
    
</style>