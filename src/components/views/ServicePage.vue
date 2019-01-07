<template>
    <v-content>
        <section>
            <v-parallax :src="this.service.imgUrl" height="600">
                <v-layout column align-center justify-center class="white--text">
                    <!-- <img src="@/assets/logo.png" alt="go" height="200"> -->
                    <h1 class="white--text mb-2 display-1 text-xs-center">{{ this.service.heading }}</h1>
                    <div class="subheading mb-3 text-xs-center">{{this.service.ingress}}</div>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Våra tjänster</h2>
                        <span class="subheading">
                            alltid inom 24 timmar
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <!-- <v-parallax :src="this.service.imgUrl" height="600"> -->
                            <v-flex xs12 md3 v-for="(item, index) in services" :key="index">
                                <div class="wrapper">
                                    <v-parallax :src=" getImgUrl(item.imgUrl)" height="400" class="img-wrapper">
                                        <v-card class="elevation-20 text-wrapper" color="rgba(0,0,0,0.5)" dark>
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline2">{{item.heading}}</div>
                                                <!-- TODO:fixa hover  -->
                                            </v-card-title>
                                            <v-card-text>
                                                {{item.ingress}}
                                            </v-card-text>
                                        </v-card>
                                    </v-parallax>
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
    export default {

        mounted() {
            this.initService();
        },

        watch: {
            '$route': 'initService'
        },

        data() {
            return {
                service: {},
                services: serviceJson
            }
        },
        methods: {
            getImgUrl(img) {
                return require('../../assets/' + img)
            },


            initService: function () {
                this.service = this.findService(this.$route.params.id);
                return this.service;
            },

            findService: function (serviceName) {
                let isFound = false;
                let serviceObject = {};

                for (var i = 0; i < serviceJson.length; i++) {

                    if (serviceJson[i].heading == serviceName) {

                        serviceObject = {
                            heading: serviceJson[i].heading,
                            imgUrl: this.getImgUrl(serviceJson[i].imgUrl),
                            ingress: serviceJson[i].ingress
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

<style>
    .img-wrapper {
        /* filter: brightness(0.4); */
        background-color: rgb(19, 19, 19);
        position: relative;
        z-index: 10;
    }

    .wrapper:hover {
        filter: brightness(0.8);
    }

    .headline2 {
        color:white;
        font-size:1.6em;
        text-transform:capitalize;
    }

    .text-wrapper:hover {
       color: rgb(148, 189, 189) !important;
    }
</style>