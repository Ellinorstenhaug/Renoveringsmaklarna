<template>
    <v-layout column wrap class="mt-5 pb-5" align-center>
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
                    <v-flex xs12 md4 v-for="(item, index) in services" :key="index">
                        <div class="wrapper">
                            <router-link :to="`${item.url}`">
                                <v-parallax :src=" getImgUrl(item.imgUrl)" class="img-wrapper grey lighten-2 service-img"
                                    aspect-ratio="1">
                                    <v-card class="elevation-20 text-wrapper" color="rgba(0,0,0,0.5)" dark>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="headline2 fontweight-600-text">{{item.heading}}</div>
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


</template>

<script>
    import serviceJson from '../../../services/services.json';

    export default {
        data: function () {
            return {
                service: {},
                services: serviceJson

            }
        },
        methods: {
            getImgUrl(img) {
                return require('@/assets/' + img)
            },

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
</style>