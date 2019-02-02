<template>
    <v-layout column wrap class="mt-5" align-center>
        <v-flex xs12 sm4 class="mt-3">
            <div class="text-xs-center">
                <h2 class="display-1 m-display1 heading">Varför?</h2>
                <span class="subheading heading">Snabbt, enkelt, svar inom 24 timmar</span>
                <hr>
            </div>
        </v-flex>
        <v-flex xs12>
            <v-container grid-list-xl>
                <v-layout row wrap align-center>
                    <v-flex xs12 sm6 md4>
                        <v-card class="elevation-0 height-fixer transparent">
                            <v-card-text class="text-xs-center">
                                <img class="icon" src="https://image.flaticon.com/icons/svg/1317/1317349.svg" alt="icon">
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                                <div class="text-xs-center heading">Den bästa lösningen för dig</div>
                            </v-card-title>
                            <v-card-text class="text-md-center text-xs-center paragraph__text">
                                Beskriv ditt behov och skapa en förfrågan. Undvik dyra felval och låt istället oss
                                hitta den bästa lösningen för just dig.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm6 md4 class="small-scale">
                        <v-card class="elevation-0 height-fixer transparent">
                            <v-card-text class="text-xs-center">
                                <img class="icon" src="https://image.flaticon.com/icons/svg/1170/1170619.svg" alt>
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                                <div class="heading text-xs-center">Jämför innan du väljer</div>
                            </v-card-title>
                            <v-card-text class="text-md-center text-xs-center paragraph__text">
                                Vi levererar dig upp till 3 offerter från olika rådgivare anpassat för ditt uppdrag med
                                bra beslutsunderlag. Här kan du också läsa omdömen från andra kunder som har värderat
                                rådgivarens kvalité och service.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 offset-sm3 offset-md0 sm6 md4 class="small-scale">
                        <v-card class="elevation-0 height-fixer transparent">
                            <v-card-text class="text-xs-center">
                                <img class="icon" src="https://image.flaticon.com/icons/svg/806/806704.svg" alt>
                            </v-card-text>
                            <v-card-title primary-title class="layout justify-center">
                                <div class="heading text-xs-center">Gratis och icke-bindande</div>
                            </v-card-title>
                            <v-card-text class="text-md-center text-xs-center paragraph__text">

                                Renoveringsmäklarna är en gratis förmedlingstjänst. Det är 100 % gratis och
                                icke-bindande för dig att leta efter en rådgivare genom Renoveringsmäklarna.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {

    }
</script>

<style>
    .height-fixer {
        height: 445px;
    }
</style>