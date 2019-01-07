<template>
    <v-content>
        <section>
            <v-parallax :src="this.service.imgUrl" height="600">
                <v-layout column align-center justify-center class="white--text">
                    <!-- <img src="@/assets/logo.png" alt="go" height="200"> -->
                    <h1 class="white--text mb-2 display-1 text-xs-center">{{ this.service.heading }}</h1>
                    <div class="subheading mb-3 text-xs-center">{{this.service.ingress}}</div>
                   
                      
                        <Modal/>
                    
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <!-- end -->
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                      <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Våra tjänster</h3>
            <div>Vi svarar alltid inom <br> 24 timmar, ...</div>
          </div>
        </v-card-title>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <!-- <v-parallax :src="this.service.imgUrl" height="600"> -->
                            <v-flex xs12 md3 v-for="(item, index) in services" :key="index">
                                <div class="wrapper">
                                     <router-link :to="`${item.url}`">  
                                    <v-parallax :src=" getImgUrl(item.imgUrl)"  class="img-wrapper grey lighten-2"   aspect-ratio="1">
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
                            heading: serviceJson[i].heading.toUpperCase(),
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

<style scoped>
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
    .fontweight-600-text{
        font-weight: 600;
    }

    .text-wrapper:hover {
       color: rgb(148, 189, 189) !important;
    }

    a{
        text-decoration: none;
        color:white;
    }
</style>