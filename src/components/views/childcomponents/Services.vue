<template>
    <div>



        <div class="img__wrap">
            <img class="img__img" src="http://placehold.it/257x200.jpg" />
            <div class="img__description_layer">
                <p class="img__description">This image looks super neat.</p>
            </div>
        </div>



        <v-layout column wrap class="mt-5 pb-5" align-center>
            <v-flex xs12 sm4 class="my-3">
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Välj en tjänst för att få upp till tre offerter</h3>
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

        
    </div>

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






    .img__wrap {
        position: relative;
        height: 200px;
        width: 257px;
    }

    .img__description_layer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(36, 62, 206, 0.6);
        color: #fff;
        visibility: hidden;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        /* transition effect. not necessary */
        transition: opacity .2s, visibility .2s;
    }

    .img__wrap:hover .img__description_layer {
        visibility: visible;
        opacity: 1;
    }

    .img__description {
        transition: .2s;
        transform: translateY(1em);
    }

    .img__wrap:hover .img__description {
        transform: translateY(0);
    }
</style>