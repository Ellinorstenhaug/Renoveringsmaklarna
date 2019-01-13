<template>
    <v-content>


        <section>
            <v-parallax :src="this.service.imgUrl" class="apa">
                <v-layout column align-center justify-center class="white--text">
                    <div class="jumbotron">
                        <div class="jumbo-container ">
                            <h1 class="white--text mb-2 display-2 text-xs-center big-text">{{ this.service.heading }}</h1>
                            <div class="subheading mb-3 text-xs-center">{{this.service.ingress}}</div>
                            <div class="button-wrapper">
                                <Modal :service="this.service.heading" :allServices="this.services" />

                            </div>

                        </div>
                    </div>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-layout column wrap align-center>
                <v-flex xs12>
                    <v-card-title primary-title class="layout justify-center">
                        <h2 class="display-1 my-5 text-xs-center">{{this.service.subheading}} {{this.service.heading}}</h2>
                    </v-card-title>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md6>
                                <v-card class="elevation-0 transparent">

                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Kom igång redan idag!</div>
                                    </v-card-title>
                                    <v-card-text>
                                        {{this.service.caption}}
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                                <v-card class="elevation-0 transparent">
                                    <v-parallax :src=" (this.service.subImgUrl)" class="img-wrapper grey lighten-2 service-img"
                                        aspect-ratio="1"></v-parallax>
                                </v-card>
                            </v-flex>

                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section>
            <!-- end -->
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Fler tjänster</h3>
                        </div>
                    </v-card-title>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <!-- <v-parallax :src="this.service.imgUrl" height="600"> -->
                            <v-flex xs12 sm6 md6 lg4 v-for="(item, index) in services" :key="index">
                                <div class="wrapper">
                                    <router-link :to="`${item.url}`">
                                        <v-parallax :src=" getImgUrl(item.imgUrl)" class="img-wrapper grey lighten-2 service-img"
                                            aspect-ratio="1">
                                            <v-card class="elevation-20 text-wrapper" color="rgba(0,0,0,0.5)" dark>
                                                <v-card-title primary-title class="layout justify-center">
                                                    <div class="headline2 fontweight-600-text">{{item.heading}}</div>
                                                    <!-- TODO:fixa hover  -->
                                                </v-card-title>
                                                <v-card-text>
                                                    {{item.ingress}}
                                                </v-card-text>
                                            </v-card>
                                        </v-parallax>
                                    </router-link>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

    </v-content>
</template>

<script>
    import serviceJson from '../../services/services.json';
    import Modal from '../modal.vue';
    export default {

        mounted() {
            this.initService();
        },

        watch: {
            '$route': 'initService'
        },

        components: {
            Modal
        },

        data() {
            return {
                service: {},
                services: {},

            }
        },
        methods: {

            getImgUrl(img) {
                return require('../../assets/' + img)
            },


            initService: function () {
                this.services = serviceJson;
                this.service = this.findService();
                return this.service;
            },

            findService: function () {
                let serviceName = this.$route.params.id;              
                let isFound = false;
                let serviceObject = {};

                for (var i = 0; i < serviceJson.length; i++) {

                    if (serviceJson[i].heading == serviceName) {

                        serviceObject = {
                            heading: serviceJson[i].heading,
                            imgUrl: this.getImgUrl(serviceJson[i].imgUrl),
                            ingress: serviceJson[i].ingress,
                            subImgUrl: this.getImgUrl(serviceJson[i].subImgUrl),
                            subheading: serviceJson[i].subheading,
                            caption: serviceJson[i].caption
                        }

                        isFound = true;
                        break;

                    }
                }

                if (isFound) {
                    return serviceObject;
                }

                this.$router.push({
                    name: "startsida"
                })
            }
        }
    }
</script>

<style scoped>
    .img-wrapper {
        /* filter: brightness(0.4); */
        background-color: rgb(19, 19, 19);
        position: relative;
        z-index: 10;
        height: 400px !important;
    }

    .wrapper:hover {
        filter: brightness(0.8);
    }

    .headline2 {
        color: white;
        font-size: 1.6em;
        text-transform: capitalize;
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

    .big-text {
        text-transform: uppercase;
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

    .jumbotron2 {
        /* background-color: #1b0f187d; */
        height: 70vh;
        padding: 7% 1% 5% 1%;
    }

    .jumbo-container2 {
        width: 600px;
    }

    @media (max-width: 600) {
        .jumbo-container2 {
            width: 100% !important;
            padding: 40px !important;

        }
    }
</style>