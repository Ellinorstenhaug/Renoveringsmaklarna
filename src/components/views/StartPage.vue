<template>
    <v-content>
        <section>
            <v-parallax :src="getUrl('header.png')" class="overlay-helper" v-if="$vuetify.breakpoint.mdAndUp">
                <v-layout column align-center justify-center class="white--text" style="margin-top:30px">
                    <div class="jumbotron">
                        <div class="jumbo-container">
                            <h1 class="white--text mb-2 main-heading text-xs-center jumbo-heading heading">
                                Jämför de
                                bästa
                                renoveringsbyråerna
                                -
                                <br>Helt kostnadsfritt!
                            </h1>
                            <div class="subheading mb-3 text-xs-center">
                                Vi hjälper dig anlita byggfirmor och
                                konsulter!
                            </div>
                            <div class="button-wrapper">
                                <Modal :serviceContext="mapServicesIntoCategories" :allServices="this.services" :service="this.service" :showDialog="this.activateDialog" />
                            </div>
                        </div>
                    </div>
                </v-layout>
            </v-parallax>
            <v-img :src="this.getUrl('header-small.jpg')" alt="skriv något här" v-if=" $vuetify.breakpoint.smAndDown"
                class="overlay-helper">
                <v-layout column align-center justify-center class="white--text">
                    <div class="jumbotron">
                        <div class="jumbo-container">
                            <h1 class="white--text mb-2 main-heading text-xs-center jumbo-heading heading">
                                Jämför de
                                bästa
                                renoveringsbyråerna
                                -
                                <br>Helt kostnadsfritt!
                            </h1>
                            <div class="subheading mb-3 text-xs-center">
                                Vi hjälper dig anlita byggfirmor och
                                konsulter!
                            </div>
                            <div class="button-wrapper">
                                <Modal :serviceContext="mapServicesIntoCategories" :allServices="this.services" :service="this.service" :showDialog="this.activateDialog" />
                            </div>
                        </div>
                    </div>
                </v-layout>
            </v-img>
        </section>

        <section class="section-why">
            <v-layout column wrap class="mt-5" align-center>
                <v-flex xs12 sm4 class="mt-3">
                    <div class="text-xs-center">
                        <h2 class="display-1 m-display1 heading">Varför du bör använda RenoveringsMäklarna</h2>
                        <span class="subheading heading">Cras facilisis mi vitae nunc</span>
                        <hr>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 sm6 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/1317/1317349.svg"
                                            alt="icon">
                                        <!-- <v-icon x-large class="purple--text text--lighten-2">color_lens</v-icon> -->
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="text-xs-center heading">Den bästa lösningen för dig</div>
                                    </v-card-title>
                                    <v-card-text class="text-md-center text-xs-center">
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                        ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/1170/1170619.svg"
                                            alt>
                                        <!-- <v-icon x-large class="purple--text text--lighten-2">flash_on</v-icon> -->
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="heading text-xs-center">Jämför innan du väljer</div>
                                    </v-card-title>
                                    <v-card-text class="text-md-center text-xs-center">
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                        ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 offset-sm3 offset-md0 sm6 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/806/806704.svg" alt>
                                        <!-- <v-icon x-large class="purple--text text--lighten-2">build</v-icon> -->
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="heading text-xs-center">Gratis och icke-bindande</div>
                                    </v-card-title>
                                    <v-card-text class="text-md-center text-xs-center">
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                        ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-layout column align-center justify-center>
                            <!-- <v-flex xs8 md3>
                                <v-btn class="purple lighten-2 selling-button" dark large href="/pre-made-themes">
                                    Get started
                                </v-btn>
              </v-flex>-->
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section class="section-service pb-5 text-center">¨
            <v-layout column wrap class="mt-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <v-card-title primary-title>
                        <div class="text-xs-center">
                            <h2 class="display-1 heading">Välj en tjänst för att få upp till tre offerter</h2>
                            <hr>
                        </div>
                    </v-card-title>
                </v-flex>
                <Services :allServices="this.services" :quantity="8" />
            </v-layout>
        </section>

        <section>
            <v-parallax src="assets/section.jpg" class="section2" height="380">
                <v-layout column align-center justify-center>
                    <div class="display-1 m-display-1 white--text mb-3 text-xs-center heading">
                        Cras facilisis mi vitae
                        nunc
                    </div>
                    <em>Kom igång redan idag</em>
                    <hr class="white">
                 
                    <v-btn large class="purple lighten-2 mt-5 btn-large" dark @click="activateDialog = !activateDialog">Få
                        tre offerter</v-btn>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-layout column wrap class="mt-5" align-center>
                <v-flex xs12 sm4 class="mt-3">
                    <div class="text-xs-center">
                        <h2 class="display-1 heading">Så fungerar RenoveringsMäklarna</h2>
                        <span class="subheading heading">Cras facilisis mi vitae nunc</span>
                        <hr>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4 sm6>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/306/306443.svg" alt>

                                        <!-- <v-icon x-large class="purple--text text--lighten-2">color_lens</v-icon> -->
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="heading text-xs-center">Fyll i formuläret</div>
                                    </v-card-title>
                                    <v-card-text class="text-md-center text-xs-center">
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                        ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4 sm6>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/292/292094.svg" alt>
                                        <!-- <v-icon x-large class="purple--text text--lighten-2">flash_on</v-icon> -->
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="heading">Jämför offerter</div>
                                    </v-card-title>
                                    <v-card-text class="text-md-center text-xs-center">
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                        ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4 sm6 offset-sm3 offset-md0>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <!-- <v-icon x-large class="purple--text text--lighten-2">build</v-icon> -->
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/169/169513.svg" alt>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="heading text-xs-center">Välj din lösning</div>
                                    </v-card-title>
                                    <v-card-text class="text-md-center text-xs-center">
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                        ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-layout column align-center justify-center>
                            <!-- <v-flex xs8 md3>
                                <v-btn class="purple lighten-2 selling-button" dark large href="/pre-made-themes">
                                    Get started
                                </v-btn>
              </v-flex>-->
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section class="recension">
            <div class="r-content">
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 md12 class="my-3">
                        <div class="text-xs-center">
                            <h2 class="display-1 m-display1">Tusentals kunder har lyckats med sina projekt!</h2>
                            <span class="subheading heading">Vad våra användare säger:</span>
                            <hr>
                        </div>
                    </v-flex>
                    <v-flex xs12 md4 mr-1 ml-1>
                        <v-card>
                            <v-card-title primary-title class="v-card-wrapper my-4 pa-4">
                                <!-- <h3 class="headline mb-0"></h3> -->
                                <div class="quote-wrap">
                                    <img class="recension-dqm" src="@/assets/open.jpg" alt>
                                    Motsvarade mina förväntningar! Allt gick smidigt och de som städare var
                                    fantastiska! Är supernöjd och rekommenderar dom gärna ...
                                    <img class="recension-dqm" src="@/assets/close.jpg" alt>
                                </div>
                                <br>
                                <em>Alexander Helsinghof, Stockholm</em>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md4 ml-1 mr-1>
                        <v-card>
                            <v-card-title primary-title class="v-card-wrapper my-4 pa-4">
                                <div>
                                    <!-- <h3 class="headline mb-0">Kangaroo Valley Safari</h3> -->
                                    <div>
                                        <img class="recension-dqm" src="@/assets/open.jpg" alt>
                                        Bra service och mkt bra kvalite på fönsterputs, har redan rekommenderat Helgens
                                        Städ till vår umgänges omkrets, och vi kommer beställa fler uppdrag ...
                                        <img class="recension-dqm" src="@/assets/close.jpg" alt>
                                    </div>
                                    <br>
                                    <em>Alexander Helsinghof, Tumba</em>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </div>
            <v-layout column align-center justify-center>
                <v-btn class="purple lighten-2 my-5 btn-large" dark large @click="activateDialog = !activateDialog">KOM
                    IGÅNG!</v-btn>
            </v-layout>
        </section>

        <section class="clients">
            <Clients />
        </section>
    </v-content>
</template>

<script>
    import Modal from "../modal.vue";
    import Services from "./childcomponents/Services.vue";
    import servicesJson from "../../services/services.json";
    import categoriesJson from "../../services/categories.json";
    import Clients from "./childcomponents/clients.vue";

    export default {
        computed: {
            mapServicesIntoCategories: function () {

                let mappedServicesArray = [];
                var categoryObject = { }
               
                categoriesJson.forEach(cat => {
                    categoryObject = {
                        id: cat.id,
                        name: cat.name,
                        icon: cat.icon,
                        color: cat.color,
                        overlay: cat.overlay,
                        subImage: cat.subImage,
                        smallImage: cat.smallImage,
                        services: this.mapServices(cat.id),
                    }
                    mappedServicesArray.push(categoryObject)
                });
           
                return mappedServicesArray;
            },

        },
        data: function () {
            return {
                service: {},
                services: servicesJson,
                activateDialog: false
            };
        },

        components: {
            Modal,
            Services,
            Clients
        },

        methods: {
            getUrl(img) {
                return require("../../assets/" + img);
            },
            mapServices(catId) {
               
                return servicesJson.filter(function (service) {
                    return service.categoryId == catId
                })
            }
        }
    };
</script>

<style>
    .wrapper:hover {
        filter: brightness(0.8);
    }

    .fontweight-600-text {
        font-weight: 600;
    }

    .text-wrapper:hover {
        color: rgb(148, 189, 189) !important;
    }

    a {
        text-decoration: none;
        color: white;
    }

    @media (min-width: 1500px) {
        .service-img {
            height: 600px;
        }

        .v-parallax__content {
            padding: 80px 0 !important;
        }
    }

    .finance {
        padding: 80px 0;
    }

    .static-container {
        padding: 0 !important;
    }

    .jumbotron {
        background-color: #1b0f187d;
        /* height: 70vh; */
        padding: 4% 2% 5% 2%;
    }

    .jumbo-heading {
        font-weight: 400 !important;
    }

    .subheading {
        margin: 40px 0;
    }

    .selling-button {
        width: 400px;
    }

    .imgwrapp {
        height: auto;
        background-color: #e6d3d8;
    }

    .action {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-container {
        position: fixed;
        z-index: 99;
        width: 670px;
        height: 95%;
        top: 20px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0px 0px 10px 0px rgba(153, 153, 153, 1);
        /* overflow: hidden; */
        animation: fadein 0.3s ease-in alternate;
        outline: 1000px solid rgba(0, 0, 0, 0.5);
    }

    .modal-link {
        color: black;
        font-weight: 300 !important;
        text-decoration: none;
        display: block;
        padding: 0 !important;
        margin: 0 !important;
    }

    .presentation-icon {
        width: 25px;
        height: 25px;
    }

    ul li {
        padding: 20px;
        border-bottom: 1px solid #eee;
        list-style-type: none;
    }

    h1 {
        color: black;
        font-weight: 300 !important;
    }

    ol,
    ul {
        margin: 0 !important;
        padding: 0 !important;
    }

    textarea {
        border: 1px solid rgb(141, 141, 141) !important;
        height: 100px;
        width: 100%;
        color: black !important;
        font-family: "avenir" !important;
        padding: 10px;
    }

    .step-container {
        color: red !important;
        /* animation: fadein2 0.2s ease-in alternate; */
        /*TODO Klass funkar ej?*/
    }

    .textcolor {
        color: black !important;
        padding: 30px;
    }

    .knapp1 {
        width: 100%;
    }

    .section2 {
        background-color: rgb(34, 31, 31);
        /* color:rgb(43, 40, 40) !important; */
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadein2 {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    #page-wrap {
        margin-top: 64px;
    }

    .overlay-helper {
        height: 750px !important;
        width: 100%;
    }

    .recension {
        background-color: #e8edf2;
        height: auto;
    }

    .r-content {
        padding-top: 40px !important;
    }

    .button-wrapper {
        padding: 20px 0;
        background-color: rgba(0, 0, 0, 0.521);
    }

    .section-why {
        /* background-color: #eee; */
        height: auto;
        padding: 20px 0;
    }

    .icon {
        width: 100px;
    }

    .recension-dqm {
        height: 25px;
    }

    .v-card-wrapper {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .btn-large {
        width: 300px;
    }

    .section-service {
        background-color: #f5f3ff;
    }

    .quote-wrap {
        margin-bottom: 30px !important;
        /* border:1px solid red; */
    }

    .main-heading {
        font-size: 45px !important;
        line-height: 50px !important;
    }

    .bm-item-list>* {
        display: block !important;
        padding: 0.7em;
        text-decoration: none;
    }

    /* modal */
    @media (max-width: 960px) {
        .jumbotron {
            padding: 10%;
        }

        .modal-container {
            width: 100%;
        }

        .textcolor {
            padding: 0;
        }

        .main-heading {
            font-size: 30px !important;
            line-height: 35px !important;
        }
    }

    @media (min-width: 960px) {
        .modal-container {
            width: 600px;
        }

        .presentation:hover {
            border-left: 2px solid rgb(39, 39, 39);
            cursor: pointer;
        }
    }

    .white {
        border-color: white !important;
        fill: white;
    }

    hr {
        width: 100px;
        margin: 5px auto 0 auto;
    }

    .clients {
        background-color: white;
    }

    .jumbo-container {
        margin: 60px 0 30px 0 !important;
    }

    @media (max-width: 690px) {
        .jumbotron {
            width: 95%;
            padding: 2%;
        }

        .subheading {
            margin: 60px 0 !important;
            line-height: 2;
        }

        .overlay-helper {
            height: 70vh !important;
            width: 100%;
        }

        #page-wrap {
            margin-top: 57px;
        }

        .m-display1 {
            font-size: 0.5em !important;
        }

        .jumbo-container {
            width: 100%;
        }
    }

    .display-1 {
        font-size: 10px !important;
    }
</style>