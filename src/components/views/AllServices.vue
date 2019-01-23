<template>
<div>
    <v-layout row wrap class="pb-5">
        <v-flex xs12 md12>
            <div class="flex py-5 pb-2 xs12 services-heading">
                <div class="text-xs-center">
                    <h2 class="display-1 m-display1">Tjänster vi erbjuder</h2><span class="subheading">
Om du inte hittar kategorin du söker kan du välja en liknande och beskriva ditt behov där.</span>
                    <hr>
                </div>
            </div>

            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-flex d-inline xs12 sm6 md3 v-for="(category, index) in categories" :key="index" child-flex>
                        <h2 class="heading set-margin-service">
                            <div v-html="category.icon" class="service-icon"></div>{{category.name}}
                        </h2>
                        <v-flex d-inline child-flex class="set-padding_1_3 set-margin" v-for="(service, index) in filterServicesPerCategory(category.id)"
                            :key="index">
                            <div>
                                <span>
                                    <router-link :to="`${service.url}`" class="grey-link">
                                        {{service.heading}}
                                    </router-link>
                                </span>
                            </div>
                        </v-flex>
                    </v-flex>
                </v-layout>
            </v-container>



            <!-- SLUT  -->
        </v-flex>
    </v-layout>

    <!-- gammal -->

    <!-- <v-container grid-list-xl>
        <v-layout row wrap align-center justify-center>

            <v-flex xs6 md3 px-5 sm6 my-3 class="set-padding_1_3" v-for="(category, index) in categories" :key="index">
                <h2 class="heading set-margin-service">
                    <div v-html="category.icon" class="service-icon"></div>{{category.name}}
                </h2>

                <v-flex class="set-padding_1_3 set-margin" v-for="(service, index) in filterServicesPerCategory(category.id)"
                    :key="index">
                    <div>
                        <span>
                            <router-link :to="`${service.url}`" class="grey-link">
                                {{service.heading}}
                            </router-link>
                </span>
                </div>
                </v-flex>
            </v-flex>

        </v-layout>
    </v-container> -->
</div>
</template>

<script>
    import serviceJson from "../../services/services.json";
    import categoriesJson from "../../services/categories.json";

    export default {

        mounted: function () {
            this.services = serviceJson;
            this.categories = categoriesJson;

        },



        data: function () {
            return {
                services: this.serviceJson,
                categories: this.categoriesJson

            };
        },
        methods: {

            filterServicesPerCategory(catId) {
                return this.services.filter(function (service) {

                    return service.categoryId == catId;

                });
            },

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

    /* .set-padding_1_3 {
        padding: 1px 3px !important;
    } */

    .heading {
        font-size: 1.7em;
    }


    .grey-link {
        color: rgb(116, 116, 116) !important;
        text-decoration: underline;
        text-transform: capitalize;
    }

    .grey-link:hover {
        color: teal !important;
    }

    .set-margin {
        margin-bottom: 5px;
    }

    .services-heading {
        background-color: #9e57a4;
        color: white;
    }

    .service-icon {
        display: inline;
        position: relative;
        left: 15px;
        top: -2px;
        margin-right: 7px;
    }
</style>