<template>
  <div>

    <v-content>
      <section>

        <v-parallax :src="this.category.overlay" :alt="`En bild om ${this.service.heading}`" v-if="$vuetify.breakpoint.mdAndUp" class="service-overlay">
          <v-layout column align-center justify-center class="white--text">
            <div class="jumbotron">
              <div class="jumbo-container">
                <h1 class="white--text mb-2 main-heading text-xs-center big-text">{{ this.service.heading}}
                  {{this.service.a}}</h1>
                <div class="subheading mb-3 text-xs-center">{{this.category.ingress}}</div>
                <div class="button-wrapper">
                  <Modal :service="this.service" :serviceContext="mapServicesIntoCategories" :allServices="this.services"
                    :showDialog="this.activateDialog" />
                </div>
              </div>
            </div>

          </v-layout>
        </v-parallax>

        <v-img :src="this.category.smallImage" :alt="`En bild om ${this.service.heading}`" v-if="$vuetify.breakpoint.smAndDown" class="service-overlay-mobil">
          <v-layout column align-center justify-center class="white--text" style="background: #1b0f187d; ">
            <div class="jumbo-container">
              <h1 class="white--text mb-2 main-heading text-xs-center big-text">{{ this.service.heading }}</h1>
              <div class="subheading mb-3 text-xs-center">{{this.category.ingress}}</div>
              <div class="button-wrapper">
                <Modal :service="this.service" :serviceContext="mapServicesIntoCategories" :allServices="this.services"
                  :showDialog="this.activateDialog" />

              </div>
            </div>
          </v-layout>
        </v-img>
      </section>
      <section>
        <v-layout column wrap align-center>
          <v-flex xs12>
            <v-card-title primary-title class="layout justify-center hidden-sm-and-down">
              <h2 class="headline my-5 text-xs-center">{{this.category.subheading}}
                {{textToLowerCase(this.category.name)}}</h2>
            </v-card-title>
            <v-container grid-list-xl>
              <v-layout row wrap align-center justify-center>
                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Kom igång redan idag!</div>
                    </v-card-title>
                    <v-card-text><span class="paragraph__text">
                        {{this.service.caption}}
                      </span></v-card-text>
                    <v-flex xs12 md8 offset-md2 align-center justify-center>
                      <v-btn class="teal lighten-2 mt-2 set-width-100" dark large @click="activateDialog = !activateDialog">Intresserad?</v-btn>
                    </v-flex>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card class="elevation-0 transparent hidden-sm-and-down">
                    <img :src="this.category.subImage" class="img-wrapper grey lighten-2 service-img" :alt="`En bild om ${this.service.heading}`"
                      aspect-ratio="1" />
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>

      </section>
      <section class="section-service pb-5" align-center>
        <v-layout column wrap align-center>
          <v-flex xs12 sm4 class="mt-3">
            <div class="text-xs-center my-4">
              <h2 class="display-1 my-3">Våra tjänster</h2>
              <hr>
            </div>
          </v-flex>

          <Services :serviceContext="mapServicesIntoCategories" />

        </v-layout>
      </section>
    </v-content>
  </div>
</template>

<script>
  import servicesJson from "../../services/services.json";
  import categoriesJson from "../../services/categories.json";

  import Services from "./childcomponents/Services.vue";
  import Modal from "../modal.vue";

  export default {

    mounted() {

      this.initService();
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
            subheading: cat.subheading,
            services: this.mapServices(cat.id),
          }
          mappedServicesArray.push(categoryObject)
        });

        return mappedServicesArray;
      },

    },

     metaInfo() {
            return {
                title: this.service.heading + ' - Renoveringsmäklarna',

                meta: [{
                        charset: 'utf-8'
                    },
                    {
                        vmid: 'description',
                        name: 'description',
                        content: this.service.subheading + ' ' + this.service.heading
                    },
                    {
                        vmid: 'content',
                        name: 'GOOGLEBOT',
                        content: 'INDEX,FOLLOW'
                    },
                    {
                        vmid: 'content',
                        name: 'ROBOTS',
                        content: 'INDEX,FOLLOW'
                    },
                  

                ]
            }
        },

    watch: {
      $route: "initService"
    },


    components: {
      Modal,
      Services
    },

    data() {
      return {
        service: {},
        services: servicesJson,
        categories: categoriesJson,
        category: [],
        overlay: '',
        activateDialog: false,
      };
    },
    methods: {

      textToLowerCase: function (input) {
        return (input || '').toLowerCase();
      },

      mapServices(catId) {

        return servicesJson.filter(function (service) {
          return service.categoryId == catId
        })
      },
      getCategoryById(id) {

        return this.categories.filter(function (category) {

          return id == category.id;
        });
      },

      mapCategorToObject(currentCategory) {

        let mappedObj = {
          id: currentCategory[0].id,
          name: currentCategory[0].name,
          overlay: this.getImgUrl(currentCategory[0].overlay),
          smallImage: this.getImgUrl(currentCategory[0].smallImage),
          subImage: this.getImgUrl(currentCategory[0].subImage),
          icon: currentCategory[0].icon,
          color: currentCategory[0].color,
          subheading: currentCategory[0].subheading,
          ingress: currentCategory[0].ingress
        }
        return mappedObj
      },

      getImgUrl(img) {

        return require("@/assets/" + img);
      },

      initService: function () {
        this.categories = categoriesJson;
        this.service = this.findService();

        if (this.service) {
          let arrayCategory = this.getCategoryById(this.service.categoryId);
          this.category = this.mapCategorToObject(arrayCategory);
          this.overlay = this.category.overlay;
        }
      },

      findService: function () {
        let isFound = false;
        let serviceObject = {};


        for (var i = 0; i < servicesJson.length; i++) {
          if (servicesJson[i].url == this.$route.path) {
            serviceObject = {
              id: servicesJson[i].id,
              categoryId: servicesJson[i].categoryId,
              heading: servicesJson[i].heading,
              ingress: servicesJson[i].ingress,
              subheading: servicesJson[i].subheading,
              caption: servicesJson[i].caption,
              icon: servicesJson[i].icon,
              alt: servicesJson[i].alt,
              alt2: servicesJson[i].alt2
            };

            isFound = true;
            break;
          }
        }

        if (isFound) {
          return serviceObject;
        }

        this.$router.push({
          name: "startsida"
        });
      }
    }
  };
</script>

<style>
  .paragraph__text {
    font-size: 18px !important;
  }

  .img-wrapper {
    background-color: rgb(19, 19, 19);
    position: relative;
    z-index: 10;
    height: 400px !important;
  }

  .wrapper:hover {
    filter: brightness(0.8);
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

  .set-width-100 {
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }


  .display-1 {
    font-size: 0 !important;
    line-height: 0 !important;
  }

  .v-parallax__content {
    padding: 80px 0 !important;
  }

  .finance {
    padding: 80px 0;
  }

  .jumbotron-service {
    margin-top: 200px;
  }


  .service-overlay {
    height: 700px !important;
    width: 100%;
    position: relative;
    top: -20px;
  }
  


  @media (max-width: 600px) {
    .my-5 {
      margin-bottom: 0 !important;
    }

    .service-overlay {
      top: -20px !important;
    }
  }

  @media (min-width: 1500px) {
    .service-img {
      height: 600px;
    }
  }

  @media (max-width: 600px) {
    .my-5 {
      margin-top: 48px !important;
      margin-bottom: unset !important;
    }

    .display-1 {
      font-size: 26px !important;
      line-height: unset !important;
    }

    #page-wrap {
      position: relative;
      top: -20px;
    }
  }
</style>