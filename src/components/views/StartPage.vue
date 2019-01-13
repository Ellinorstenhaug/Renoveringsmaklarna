<template>

    <v-content>
        <section>
            <v-parallax :src="getUrl('apa3.png')">
                <!-- <v-parallax class="bajs" :src="getUrl('omoss.jpg')"> -->
                <!-- <v-parallax src="https://raw.githubusercontent.com/vuetifyjs/parallax-starter/master/template/assets/hero.jpeg"
                height="600"> -->
                <v-layout column align-center justify-center class="white--text">
                    <div class="jumbotron">
                        <div class="jumbo-container">
                            <h1 class="white--text mb-2 main-heading text-xs-center jumbo-heading">Jämför de bästa
                                renoveringsbyråerna
                                - <br> Helt kostnadsfritt! </h1>
                            <div class="subheading mb-3 text-xs-center ">Vi hjälper dig anlita byggfirmor och
                                konsulter!</div>
                            <div class="button-wrapper">

                                <Modal :allServices="this.services" ref="modalClick" />

                            </div>
                        </div>



                    </div>
                    <!-- <img src="@/assets/logo.png" alt="go" height="200"> -->

                </v-layout>
            </v-parallax>
        </section>



        <section class="section-why">
            <v-layout column wrap class="mt-5" align-center>
                <v-flex xs12 sm4 class="mt-3">
                    <div class="text-xs-center">
                        <h2 class="display-1 m-display1">Varför du bör använda RenoveringsMäklarna</h2>
                        <span class="subheading">
                            Cras facilisis mi vitae nunc
                        </span>
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
                                        <div class="headline text-xs-center">Den bästa lösningen för dig</div>
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
                                            alt="">
                                        <!-- <v-icon x-large class="purple--text text--lighten-2">flash_on</v-icon> -->
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Jämför innan du väljer</div>
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
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/806/806704.svg" alt="">
                                        <!-- <v-icon x-large class="purple--text text--lighten-2">build</v-icon> -->
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Gratis och icke-bindande</div>
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
                        <v-layout column align-center justify-center="">
                            <!-- <v-flex xs8 md3>
                                <v-btn class="purple lighten-2 selling-button" dark large href="/pre-made-themes">
                                    Get started
                                </v-btn>
                            </v-flex> -->
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
                            <h2 class="display-1">Välj en tjänst för att få upp till tre offerter</h2>

                        </div>
                    </v-card-title>
                </v-flex>
                <Services :allServices="this.services" />
            </v-layout>
        </section>

        <section>
            <v-parallax src="assets/section.jpg" class="section2" height="380">
                <v-layout column align-center justify-center>
                    <div class="display-1 m-display-1white--text mb-3 text-xs-center">Cras facilisis mi vitae nunc</div>
                    <em>Kom igång redan idag</em>
                    <v-btn class="purple lighten-2 mt-5 btn-large" dark large href="/pre-made-themes">
                        Få tre offerter
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-layout column wrap class="mt-5" align-center>
                <v-flex xs12 sm4 class="mt-3">
                    <div class="text-xs-center">
                        <h2 class="display-1">Så fungerar RenoveringsMäklarna</h2>
                        <span class="subheading">
                            Cras facilisis mi vitae nunc
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4 sm6>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/306/306443.svg" alt="">

                                        <!-- <v-icon x-large class="purple--text text--lighten-2">color_lens</v-icon> -->
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Fyll i formuläret</div>
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
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/292/292094.svg" alt="">
                                        <!-- <v-icon x-large class="purple--text text--lighten-2">flash_on</v-icon> -->
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Jämför offerter</div>
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
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/169/169513.svg" alt="">
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Välj din lösning</div>
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
                        <v-layout column align-center justify-center="">
                            <!-- <v-flex xs8 md3>
                                <v-btn class="purple lighten-2 selling-button" dark large href="/pre-made-themes">
                                    Get started
                                </v-btn>
                            </v-flex> -->
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
                            <span class="subheading">
                                Vad våra användare säger: </span>
                        </div>
                    </v-flex>
                    <v-flex xs12 md4 mr-1 ml-1>
                        <v-card>
                            <v-card-title primary-title class="v-card-wrapper my-4 pa-4">
                                <!-- <h3 class="headline mb-0"></h3> -->
                                <div class="quote-wrap">
                                    <img class="recension-dqm" src="@/assets/open.jpg" alt="">
                                     Motsvarade mina förväntningar! Allt gick smidigt och de som städare var fantastiska! Är supernöjd och rekommenderar dom gärna ...
                                    <img class="recension-dqm" src="@/assets/close.jpg" alt=""></div>
                                <br>
                                <em>
                                    Alexander Helsinghof, Stockholm
                                </em>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md4 ml-1 mr-1>
                        <v-card>

                            <v-card-title primary-title class="v-card-wrapper my-4 pa-4">
                                <div>
                                    <!-- <h3 class="headline mb-0">Kangaroo Valley Safari</h3> -->
                                    <div>
                                        <img class="recension-dqm" src="@/assets/open.jpg" alt="">
                                         Bra service och mkt bra kvalite på fönsterputs, har redan rekommenderat Helgens Städ till vår umgänges omkrets, och vi kommer beställa fler uppdrag ...
                                        <img class="recension-dqm" src="@/assets/close.jpg" alt=""></div>
                                    <br>
                                    <em>Alexander Helsinghof, Tumba</em>
                                </div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </div>

            <v-layout column align-center justify-center>
                <v-btn class="purple lighten-2 my-5 btn-large" dark large @click="trigger">
                    KOM IGÅNG!
                </v-btn>
            </v-layout>

        </section>
    </v-content>

</template>

<script>
    import Modal from '../modal.vue';
    import Services from './childcomponents/Services.vue';
    import serviceJson from '../../services/services.json';

    export default {
        data: function () {
            return {
                service: {},
                services: serviceJson

            }
        },
        components: {
            Modal,
            Services
        },

        methods: {
            getUrl(img) {
                return require('../../assets/' + img)
            },

            trigger() {
                this.$refs.modalClick.click()
            }

        }
    }
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
        padding: 7% 1% 5% 1%;
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

    /* 
    .sectionimg {
        height: 1000px;
        background-color:#1d1a2d;
        background: no-repeat;
    } */



    .action {
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 100vh; */
    }


    /* .headline {
        color: black;
        font-size: 5em !important;
    } */

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
        font-family: 'avenir' !important;
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

    .apa {
        height: 570px !important;
        width: 100%;
    }

    .recension {
        background-color: #e9d2d8;
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
        background-color: #F5F3FF;
    }

    .quote-wrap {
        margin-bottom: 30px !important;
        /* border:1px solid red; */
    }

    .main-heading {
        font-size: 45px !important;
        line-height: 50px !important;
    }

    @media (max-width:690px) {
        .jumbotron {
            width: 95%;
        }

        .subheading {
            margin: 60px 0 !important;
            line-height: 2;
        }

        .apa {
            height: 500px !important;
            width: 100%;
        }

        .m-display1 {
            font-size: 0.5em !important;
        }

    }

   

    /* modal */
    @media (max-width: 960px) {
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
</style>