<template>

    <v-content>
        <section>
            <v-parallax src="https://raw.githubusercontent.com/vuetifyjs/parallax-starter/master/template/assets/hero.jpeg"
                height="600">
                <v-layout column align-center justify-center class="white--text">
                    <div class="jumbotron">
                        <!-- <img src="@/assets/logo.png" alt="go" height="200"> -->
                        <h1 class="white--text mb-2 display-1 text-xs-center jumbo-heading">Jämför de bästa xxxxxxxxxx
                            - <br> Helt kostnadsfritt! </h1>
                        <div class="subheading mb-3 text-xs-center">Vi hjälper dig anlita byggfirmor och xxxxkonsulter!</div>
                        <Modal/>
                    </div>
                    <!-- Slut  -->
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">The best way to start developing</h2>
                        <span class="subheading">
                            Cras facilisis mi vitae nunc
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="purple--text text--lighten-2">color_lens</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Material Design</div>
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
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="purple--text text--lighten-2">flash_on</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Fast development</div>
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
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="purple--text text--lighten-2">build</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Completely Open Sourced</div>
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
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section>
            <v-parallax src="assets/section.jpg" class="section2" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
                    <em>Kick-start your application today</em>
                    <v-btn class="purple lighten-2 mt-5" dark large href="/pre-made-themes">
                        Get started
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-container grid-list-xl>
                <v-layout row wrap justify-center class="my-5">
                    <v-flex xs12 sm4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Company info</div>
                            </v-card-title>
                            <v-card-text>
                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                turpis egestas.
                                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse
                                potenti.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm4 offset-sm1>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Contact us</div>
                            </v-card-title>
                            <v-card-text>
                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                            </v-card-text>
                            <v-list class="transparent">
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="purple--text text--lighten-2">phone</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>777-867-5309</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="purple--text text--lighten-2">place</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Chicago, US</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <v-icon class="purple--text text--lighten-2">email</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>

    </v-content>

</template>

<script>
    import Modal from '../modal.vue';
    import HeadingModal from '../../components/HeadingModal.vue';


    export default {
        components: {
            Modal,
            HeadingModal
        },

        data: function () {
            return {
                count: 0,
                showModal: false,
                // img: img,
                headingLabel: "Välj tjänst",
                name: '',
                email: '',
                checkbox: false,
                dialog: false,
                knappText: "",
            }
        },
        watch: {
            dialog(val) {
                !val
                
            }
        },
        methods: {
            add: function () {
                this.count++;
                this.handleState();
                // return this.count++;
            },
            minus: function () {
                this.count--;
                this.handleState();
                // return this.count--;
            },
            close: function () {
                this.dialog = !this.dialog;
                // this.knappText="Stäng";
            },
            success: function () {

            },
            handleExit: function () {
                if (this.count === 0) {
                    this.close();
                }
                if (this.count >= 1) {
                    this.minus();
                    this.knappText = "Tillbaka";
                }
            },
            handleState: function () {

                if (this.count === 0) {
                    this.headingLabel = "Välj tjänst";
                } else if (this.count === 1) {
                    this.headingLabel = "Beskriv ditt ärende";
                } else if (this.count === 2) {
                    this.headingLabel = "Detaljer om dig";
                }
            }
        }
    }
</script>

<style>
    /*Kommer från modal!*/
    .static-container {
        padding: 0 !important;
    }

    .jumbotron {
        background-color: #1b0f187d;
        height: 70vh;
        padding: 7% 0 5% 0;
    }

    .jumbo-heading {
        font-weight: 400 !important;
    }

    .subheading {
        margin: 40px 0;
    }

    @media (max-width:690px) {
        .jumbotron {
            width: 95%;
        }

    }

    @media (min-width:690px) {
        .jumbotron {
            width: 650px;
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

    .action {
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 100vh; */
    }

    .btn {
        width: 100%;
    }

    .headline {
        color: black;
        font-size: 0.8em !important;
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
</style>