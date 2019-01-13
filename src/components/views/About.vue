<template>

    <v-content>
        <section>
            <v-parallax :src="getImgUrl('about.jpg')">
                <v-layout column align-center justify-center class="white--text">
                    <!-- <div class="jumbotron"> -->
                    <!-- <img src="@/assets/logo.png" alt="go" height="200"> -->
                    <h1 class="black--text mb-2 display-2 text-xs-center jumbo-heading">Någonting klyshiiiiigt</h1>
                    <div class="black--text subheading mb-3 text-xs-center">Vi hjälper dig anlita byggfirmor och xxxxkonsulter!</div>
                    <!-- </div> -->
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Om RenoveringsMäklarna</h2>
                        <span class="subheading">
                            Cras facilisis mi vitae nunc
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md6>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center ">
                                        <div class="headline">Passion för att hjälpa</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                        ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                                <v-parallax class="about-pic" :src="getImgUrl('aboutmin.jpg')">

                                </v-parallax>
                            </v-flex>
                            <div class="about-pic">
                            </div>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>
        <!-- <section class="about-section">
            <v-parallax src="assets/section.jpg" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center"></div>
                    <em>Kick-start your application today</em>
                    <v-flex xs12 md3>
                        <v-btn class=" lighten-3 mt-5 selling-button" dark large href="/pre-made-themes">
                            Get started
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-parallax>
        </section> -->


        <section class="faq-section">
            <v-parallax src="assets/section.jpg" height="auto">
                <v-layout wrap column align-center justify-center>
                    <div class="my-5 align-center text-md-center text-xs-center justify-center">
                        <div class="headline white--text mb-3 text-xs-center">Vanliga frågor</div>
                        <em>Hittar du inte vad du söker? <a href="">Kontakta oss!</a></em>
                    </div>

                    <v-flex md6 :class="{'set50procent__width': $vuetify.breakpoint.mdAndUp}">

                        <v-expansion-panel expand>
                            <v-expansion-panel-content v-for="(item, i) in faq" :key="i">
                                <h3 slot="header">
                                    {{item.heading}}
                                </h3>
                                <v-card>
                                    <v-card-text class="lighten-3">
                                       {{item.ingress}}
                                    </v-card-text>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                    </v-flex>

                </v-layout>
            </v-parallax>
        </section>

    </v-content>

</template>


<script>
    export default {

        methods: {
            getImgUrl(img) {
                return require('../../assets/' + img)
            },
        },
        computed: {

            faq: {
                get: function () {

                    return [{
                            heading: 'Hur fungerar det?',
                            ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ',

                        },
                        {
                            heading: 'Är det gratis?',
                            ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ',

                        },
                        {
                            heading: 'Hur hanteras min data?',
                            ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ',

                        },
                        {
                            heading: 'Efter att jag gjort en förfrågan, hur lång tid tar det?',
                            ingress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ',

                        },
                    ]
                }
            }
        },
    }
</script>


<style scoped>
    .color {
        background-color: transparent !important;

    }

    .expansion-panel__container {
        background-color: rgba(0, 0, 0, 0) !important;
    }

    .about-section {
        background-color: #e9d2d8;
    }

    .faq-section {
        background-color: #ad9ba0;
    }

    .set50procent__width {
        width: 50% !important;
    }

    .about-pic {
        /* background-color: rgb(209, 209, 209); */
        height: 400px;

    }
</style>