<template>

    <v-content>
        <section>

            <v-parallax :src="getImgUrl('about.jpg')" v-if="$vuetify.breakpoint.mdAndUp" class="service-overlay">
                <v-layout column align-center justify-center class="white--text">
                    <div class="jumbotron">
                        <div class="jumbo-container">
                            <h1 class="white--text mb-2 main-heading text-xs-center jumbo-heading">Passion för att
                                hjälpa</h1>
                            <div class="white--text subheading mb-3 text-xs-center">  Vi hjälper dig anlita byggfirmor och
                                konsulter!</div>
                            <div class="subheading mb-3 text-xs-center "></div>
                        </div>
                    </div>
                </v-layout>
            </v-parallax>
            <v-img :src="getImgUrl('about.jpg')" alt="skriv något här" v-if=" $vuetify.breakpoint.smAndDown" class="service-overlay-mobil">
                <v-layout column align-center justify-center class="white--text" style="background: #1b0f187d; ">
                    <div class="jumbo-container">
                        <h1 class="white--text mb-2 main-heading text-xs-center jumbo-heading">Passion för att
                            hjälpa</h1>
                        <div class="white--text subheading mb-3 text-xs-center">Vi hjälper dig anlita byggfirmor
                            och
                            konsulter!</div>
                        <div class="subheading mb-3 text-xs-center "></div>
                    </div>
                </v-layout>
            </v-img>

        </section>

        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Om RenoveringsMäklarna</h2>
                        <span class="subheading">
                            Mer om oss
                        </span>
                        <hr>
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
                                        <span class="paragraph__text">
                                            RenoveringsMäklarna hjälper dig att hitta bra tjänsteföretag när du behöver hjälp med företagets ekonomi. Tjänsten är helt gratis för dig att använda och du sparar dyrbar tid genom att låta oss ta in offerter åt dig. Vår vision är att skapa en transparent marknad för tjänster inom redovisning och revision. Vi strävar efter att göra det enkelt för dig att fatta rätt beslut, där både kvalitet och pris är invägda faktorer.
                                        </span>

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
                        <em>Hittar du inte vad du söker? <a href="" class="white-link">Kontakta oss!</a></em>
                        <hr>
                    </div>

                    <v-flex md6 pb-5 :class="{'set50procent__width': $vuetify.breakpoint.mdAndUp}">
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
        metaInfo:{
        
        title: 'Om Renoveringsmäklarna – Renoveringsmaklarna.se',
        },
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
                            ingress: 'Du beskriver vad du behöver hjälp med t.ex. renovering, flytthjälp eller städning och skickar in din förfrågan som matchas med företag verksamma i den bransch och kommun du söker. Du blir sedan kontaktad av upp till sex företag som är intresserade av att utföra ditt uppdrag och du väljer själv vem du vill anlita för att utföra uppdraget.',

                        },
                        {
                            heading: 'Är det gratis?',
                            ingress: 'Ja, det är alltid helt gratis för dig att skicka in en förfrågan och använda RenoveringsMäklarna',

                        },
                        {
                            heading: 'Hur hanteras min data?',
                            ingress: 'Dina uppgifter syns bara när ett företag besvarat ditt uppdrag och publiceras aldrig offentligt. Max tre företag kan besvara din förfrågan och först då får de tillgång till dina kontaktuppgifter. Du blir kontaktad via telefon eller e-post',

                        },
                        {
                            heading: 'Efter att jag gjort en förfrågan, hur lång tid tar det?',
                            ingress: 'Vi läser alltid genom alla förfrågningar och arbetar effektivt för att du snabbt ska få hjälp. När vi publicerat din förfrågan matchas den med företag verksamma i det område du söker. Vanligtvis blir du kontaktad av intresserade företag inom några dagar från det att du gjort din förfrågan.',

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