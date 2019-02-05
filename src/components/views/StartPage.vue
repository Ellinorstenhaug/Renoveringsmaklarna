<template>
    <v-content>
        <section>
            <v-parallax :src="getUrl('header.png')" alt="headerbild" class="overlay-helper" v-if="$vuetify.breakpoint.mdAndUp">
                <v-layout column align-center justify-center class="white--text" style="margin-top:30px">
                    <div class="jumbotron">
                        <div class="jumbo-container">
                            <h1 class="white--text mb-2 main-heading text-xs-center jumbo-heading heading">
                                     Jämför de
                                bästa
                                byggföretagen<br>
                                -
                                Helt kostnadsfritt!
                            </h1>
                            <div class="subheading mb-3 text-xs-center">
                                Vi hjälper dig anlita byggfirmor och
                                konsulter!
                            </div>
                            <div class="button-wrapper">
                                <Modal :serviceContext="mapServicesIntoCategories" :allServices="this.services"
                                    :service="this.service" :showDialog="this.activateDialog" />
                            </div>
                        </div>
                    </div>
                </v-layout>
            </v-parallax>
            <v-img :src="this.getUrl('header-small.jpg')" alt="startbild man ritar" v-if=" $vuetify.breakpoint.smAndDown"
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
                                <Modal :serviceContext="mapServicesIntoCategories" :allServices="this.services"
                                    :service="this.service" :showDialog="this.activateDialog" />
                            </div>
                        </div>
                    </div>
                </v-layout>
            </v-img>
        </section>

        <section class="section-why">
            <Why />

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
                <Services :serviceContext="mapServicesIntoCategories" />
            </v-layout>
        </section>
        <section>
            <v-parallax src="assets/section.jpg" class="section2" height="380">
                <v-layout column align-center justify-center>
                    <div class="display-1 m-display-1 white--text mb-3 text-xs-center heading">
                        Snabbt, enkelt, svar inom 24 timmar
                    </div>
                    <em>Kom igång redan idag</em>
                    <hr class="white">

                    <v-btn large class="teal lighten-2 mt-5 btn-large" dark @click="activateDialog = !activateDialog">Få
                        tre offerter</v-btn>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <How />
        </section>

        <section class="recension">
            <Recension />
        </section>

        <section class="clients">
            <Clients />
        </section>
    </v-content>
</template>

<script>
    import Modal from "../modal.vue";
    import Services from "./childcomponents/Services.vue";
    import Why from "./childcomponents/startWhy.vue";
    import How from "./childcomponents/startHow.vue";
    import Recension from "./childcomponents/startRecension.vue";
    import servicesJson from "../../services/services.json";
    import categoriesJson from "../../services/categories.json";
    import Clients from "./childcomponents/clients.vue";

    export default {
     metaInfo() {
      return {
        title: 'Få offerter gratis från renoverings- & byggföretag - Renoveringsmäklarna' ,
       
        meta: [{
            charset: 'utf-8'
          },
          {
            vmid: 'description',
            name: 'description',
            content: 'Vi erbjuder offerter från olika tjänster som bygg, renovering, målning,uthyrning & mijö. Erbjudanden från experter. Svar inom 24h. Kostnadsfritt. Ansök snabbt och enkelt.'
          }
        ]
      }
    },
        computed: {
            mapServicesIntoCategories: function () {

                let mappedServicesArray = [];
                var categoryObject = {}

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
            Clients,
            Why,
            How,
            Recension

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
        padding: 4% 2% 5% 2%;
        max-width: 900px;
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
        font-size: 16px !important;
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
        position: relative;
        top:-20px;
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
        background-color: rgb(231, 238, 237);
    }

    .quote-wrap {
        margin-bottom: 30px !important;
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
            width: 100%;
            padding: 2%;
            
        }

        .subheading {
            margin: 60px 0 !important;
            line-height: 2;
        }

        .overlay-helper {
            height: 80vh !important;
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