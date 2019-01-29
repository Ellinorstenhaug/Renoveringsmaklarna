<template>
      <v-layout column wrap class="mt-5" align-center>
                <v-flex xs12 sm4 class="mt-3">
                    <div class="text-xs-center">
                        <h2 class="display-1 heading">Hur fungerar det</h2>
                        <span class="subheading heading">Snabbt, enkelt, svar inom 24 timmar</span>
                        <hr>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4 sm6 class="small-scale height-fixer">
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/306/306443.svg" alt>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="heading text-xs-center">Fyll i formuläret</div>
                                    </v-card-title>
                                    <v-card-text class="text-md-center text-xs-center paragraph__text">
                                      Beskriv ditt ärende och dina förväntningar på rådgivaren. Vi finner därefter 3 relevanta rådgivare vars kompetens lever upp till just dina behov och önskemål.    
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4 sm6 class="small-scale height-fixer">
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/292/292094.svg" alt>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="heading">Jämför offerter</div>
                                    </v-card-title>
                                    <v-card-text class="text-md-center text-xs-center paragraph__text">
                                    Inom 48 timmar ger de 3 rådgivarna sina respektive offerter, där du även kan se vad andra kunder tycker om deras kvalité och service. Därefter kan du jämföra offerterna baserat på dina preferenser.

                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4 sm6 offset-sm3 offset-md0 class="small-scale height-fixer">
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <img class="icon" src="https://image.flaticon.com/icons/svg/169/169513.svg" alt>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="heading text-xs-center">Välj din lösning</div>
                                    </v-card-title>
                                    <v-card-text class="text-md-center text-xs-center paragraph__text">
                                       Du väljer den offerten vars kvalité och pris passar dig bäst och inleder därefter ett samarbete med den valda rådgivaren. Vår service är gratis och icke-bindande.

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
    height:445px;
}
</style>
