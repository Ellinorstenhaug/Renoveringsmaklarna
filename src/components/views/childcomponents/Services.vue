<template>
    <div>

        <v-layout column wrap class="mt-5 pb-5" align-center>
            <v-flex xs12 sm4 class="my-3">
                <v-card-title primary-title>
                    <div>
                        <h3 class="display-1 mb-0">Välj en tjänst för att få upp till tre offerter</h3>
                    </div>
                </v-card-title>
            </v-flex>
            <v-flex xs12 md12>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md4 v-for="(item, index) in services" :key="index">
                            <router-link :to="`${item.url}`">

                                <div class="img__wrap">
                                    <img class="img__img" :src="getImgUrl(item.images[0].medium)" :alt="item.images.alt" />
                                    <div class="img__description_layer">
                                        <div class="img__description">
                                            <v-card-title primary-title class="layout justify-center">
                                                <div class="headline2 fontweight-600-text">{{item.heading}}</div>
                                            </v-card-title>
                                            <v-card-text>
                                                {{item.ingress}}
                                                <div class="read-more-wrap">
                                                   
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24">
                                                        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" /></svg>
                                                </div>
                                            </v-card-text>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
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
                return require('@/assets/' + img);
            },
            // getImg (img) {
            //     return requi
            // }
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


    /* relevant styles */
    .img__wrap {
        position: relative;
        height: 300px;
        width: auto;
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

    .img__img {
        width: 100%;
        margin-bottom:20px !important;
        height: auto !important;
    }
    .read-more-wrap {
        text-align:right;
        fill:white;
        position: absolute;
        right:0;
        bottom:0;
    }
</style>