<template>

    <v-content>
        <section>
            <v-parallax class="bajs" height="600">
                <v-layout column align-center justify-center class="white--text">
                    <!-- <div class="jumbotron"> -->
                    <!-- <img src="@/assets/logo.png" alt="go" height="200"> -->
                    <h1 class="white--text mb-2 display-1 text-xs-center jumbo-heading">Någonting klyshiiiiigt</h1>
                    <div class="subheading mb-3 text-xs-center">Vi hjälper dig anlita byggfirmor och xxxxkonsulter!</div>
                    <!-- </div> -->
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Om RenoveringsMäklarna</h2>
                        <span class="subheading">
                            Cras facilisis mi vitae nunc
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md6>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center ">
                                        <div class="headline">Fast development</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                        ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                        ac turpis egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        <div class="about-pic">

                        </div>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>
        <section class="about-section">
            <v-parallax src="assets/section.jpg" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
                    <em>Kick-start your application today</em>
                </v-layout>
            </v-parallax>
        </section>
        
    </v-content>

</template>


<script>
</script>


<style>
    .about-section {
        background-color: #e9d2d8;
    }

    .bajs {
        background: url("/Users/ellinorstenhaug/Desktop/vue2/Renoveringsmaklarna/src/assets/om.jpg") no-repeat cover;
        height: auto;
        width:auto;
        background-color: rgb(41, 31, 31);
    } .about-pic {
position: relative;
right:-100px;
        background-color: rgb(209, 209, 209);
        width:50%;
        height:400px;
    }
</style>