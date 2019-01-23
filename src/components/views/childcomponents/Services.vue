<template>
  <v-layout column wrap class="pb-5">
    <v-flex xs12 md12>
      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs6 md3 sm6 class="set-padding_1_3" v-for="(item, index) in serviceContextMethod" :key="index">
            <router-link :to="`${item.services[0].url}`" v-if="index < quantityToShow">
              <div class="img__wrap">
                <img class=" small-img-box" :src="getImgUrl(item.smallImage)">
                <v-card-text class="service-container">
                  <v-card-title primary-title class="layout justify-center center-align">
                    <div class="fontweight-600-text text__white align-center justify-center" v-html="item.icon"></div>
                    <div class="inner-service justify-center align-center service-headline mobile-overlay-text text--white paragraph__text">
                      {{textToUpperCase(item.name)}}</div>
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

          <v-flex xs12 md6 offset-md3 pt-4 pb-0>
            <v-btn large dark block color="purple lighten-2">
              <router-link class="white--text" :to="'/våra-tjänster'">
              Se alla tjänster
              </router-link>
            </v-btn>
          </v-flex>



          <!-- <v-flex xs6 md3 sm6 class="set-padding_1_3" v-for="(item, index) in services" :key="index">
            <router-link :to="`${item.url}`" v-if="index < quantityToShow">
              <div class="img__wrap">
                <img class="img__img" :src="getImgUrl(item.images[0].medium)" :alt="item.images.alt">
                <v-card-text class="service-container">
                  <v-card-title primary-title class="layout justify-center center-align">
                    <div class="fontweight-600-text text__white align-center justify-center" v-html="item.icon"></div>
                    <div class="inner-service justify-center align-center service-headline mobile-overlay-text text--white">
                      {{textToUpperCase(item.heading)}}</div>
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
          </v-flex> -->
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['allServices', 'quantity', 'serviceContext'],

    computed: {
      serviceContextMethod: function () {
        
        return this.serviceContext;
      },
      quantityToShow: {
        get: function () {
          return this.quantity == undefined ? this.allServices.length : this.quantity
        },

      }

    },
    data: function () {
      return {
        service: {},
        services: this.allServices
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

  .service-headline {
    color: white;
    font-size: 1.6em;
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
    position: absolute;
    top: 35%;
    left: 44%;
  }

  .img__wrap:hover .img__description_layer {
    visibility: visible;
    opacity: 1;
  }

  .img__wrap:hover .small-img-box {
    filter: brightness(90%);
  }

  .small-img-box {
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

  @media (max-width: 1024px) {
    .service-headline {
      font-size: 16px !important;
    }

    .inner-service {
      margin-top: 5px;
    }
  }


 

  .set-padding_1_3 {
    padding: 1px 3px !important;
  }

  .center-align {
    text-align: center !important;
  }

  .inner-service {
    position: absolute;
    margin-top: 10px;
  }
  .small-img-box {
    height:220px !important;
    width:100%;
  }

   @media (max-width: 690px) {
    .mobile-overlay-text {
      font-size: 15px !important
    }
     .small-img-box{
       height:150px !important;
     }
  }
</style>