<template>
    <v-layout column wrap class="pb-5">
        <v-flex xs12 md12>
            <div class="flex mt-3 xs12 sm4">
                <div class="text-xs-center">
                    <h2 class="display-1 m-display1">Varför du bör använda RenoveringsMäklarna</h2><span class="subheading">
                        Cras facilisis mi vitae nunc
                    </span>
                    <hr>
                </div>
            </div>
            <v-container grid-list-xl>

                <v-layout row wrap align-center>
                    <v-flex xs6 md3 sm6 class="set-padding_1_3" v-for="(item, index) in this.services" :key="index">
                        <router-link :to="`${item.url}`">
                            <div class="img__wrap">
                                <img class="img__img" :src="getImgUrl(item.images[0].medium)" :alt="item.images.alt">
                                <v-card-text class="service-container">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="inner-service">
                                            <span class="headline2 fontweight-600-text text__white" v-html="item.icon"></span>
                                            <span class="headline2 mobile-overlay-text text--white">{{textToUpperCase(item.heading)}}</span>
                                        </div>
                                    </v-card-title>
                                </v-card-text>

                                <div class="img__description_layer">
                                    <div class="img__description">
                                        <div class="read-more-wrap">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    import serviceJson from "../../services/services.json";
    export default {

        mounted: function () {
            this.services = serviceJson;
        },
        //  computed: {
        //         allServices: function () {
        //             if (this.serviceJson != null) {
        //                 return this.serviceJson;
        //             }
        //             return "Tjänst saknas";
        //         }
        //     },


        data: function () {
            return {
                services: this.serviceJson

            };
        },
        methods: {
            getImgUrl(img) {
                return require("@/assets/" + img);
            },
            textToUpperCase(input) {
                var res = input.toUpperCase();
                return res;
            }
        }
    };
</script>

<style>
    .wrapper:hover {
        filter: brightness(100%);
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

    /* relevant styles */
    .img__wrap {
        position: relative;
        height: auto;
        width: auto;
    }

    .img__description_layer {
        position: absolute;
        top: 100px;
        bottom: 0;
        left: 0;
        right: 0;
        /* background: rgba(36, 62, 206, 0.6); */
        color: #fff;
        visibility: hidden;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        /* transition effect. not necessary */

        transition: opacity 0.2s, visibility 0.2s;
    }

    .service-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .service-container svg {
        fill: white;
    }

    .img__wrap:hover .img__description_layer {
        visibility: visible;
        opacity: 1;
    }

    .img__wrap:hover .img__img {
        filter: brightness(90%);
    }

    .img__img {
        filter: brightness(70%);
    }

    .img__description {
        transform: translateY(1em);
        transition: all 0.25s ease-in-out;
    }

    .img__wrap:hover .img__description {
        transform: translateY(0);
        opacity: 0.8;
    }

    .img__img {
        width: 100%;
        height: auto !important;
    }

    .read-more-wrap {
        text-align: right;
        fill: white;
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
    }

    @media (max-width: 690px) {
        .mobile-overlay-text {
            font-size: 1em !important
        }
    }

    @media only screen and (min-width: 1904px) {

        .container {
            max-width: 1185px !important;
        }
    }

    .set-padding_1_3 {
        padding: 1px 3px !important;
    }
</style>