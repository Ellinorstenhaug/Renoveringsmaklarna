<template>


    <v-content>
        <section>
            <v-parallax :src="getUrl('success.jpg')">

                <v-layout column align-center justify-center class="black--text">
                    <div class="white-jumbotron">
                        <div class="jumbo-container" style="margin-top:60px;margin-bottom:30px;">
                            <h1 class="black--text mb-2 main-heading text-xs-center jumbo-heading">Tack!
                                <br> Vi har mottagit ditt uppdrag. </h1>
                            <div class="subheading mb-3 text-xs-center "></div>
                        </div>
                    </div>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Det här kommer att hända nu..</h2>
                        <hr>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md6>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text>
                                        Vårt mål är så snart som möjligt matcha ditt uppdrag med 3
                                        specialister som passar in på ditt uppdrag. För varje matchning får du ett mejl
                                        med
                                        information om den specialist som visat intresse för ditt ärende. Det kan hända
                                        att
                                        vi behöver kompletterande uppgifter om ditt uppdrag. Då tar vi kontakt med dig
                                        via
                                        telefon för att se till att vi förmedlar så bra förslag som möjligt. Så håll
                                        dig
                                        nära telefonen - Vi ser fram emot att hjälpa dig.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                                <v-icon class="purple--text text--lighten-2">phone</v-icon><a href="tel:+7778675309"
                                    class="link">777-867-5309</a>
                                <div> Tveka inte med att kontakta oss under våra öppettider. Vi finns här för att på
                                    bästa möjliga sätt besvara dina frågor.</div>

                                <table class="table">
                                    <tr>
                                        <td>Måndag</td>
                                        <td class="text-right">09:00 - 21:00</td>
                                    </tr>
                                    <tr>
                                        <td>Tisdag</td>
                                        <td class="text-right">09:00 - 21:00</td>
                                    </tr>
                                    <tr>
                                        <td>Onsdag</td>
                                        <td class="text-right">09:00 - 21:00</td>
                                    </tr>
                                    <tr>
                                        <td>Torsdag</td>
                                        <td class="text-right">09:00 - 21:00</td>
                                    </tr>
                                    <tr>
                                        <td>Fredag</td>
                                        <td class="text-right">09:00 - 21:00</td>
                                    </tr>
                                    <tr>
                                        <td>Lördag</td>
                                        <td class="text-right">09:00 - 21:00</td>
                                    </tr>
                                    <tr>
                                        <td>Söndag</td>
                                        <td class="text-right">09:00 - 21:00</td>
                                    </tr>
                                </table>



                            </v-flex>
                            <v-flex xd12 md8 offset-md2>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center ">
                                        <div class="headline"><a href="/om-oss" target="_blank" class="link">Om
                                                RenoveringsMäklarna</a></div>
                                    </v-card-title>
                                    <v-card-text>
                                        Vår vision är att skapa en transparent marknad för tjänster inom
                                        redovisning och
                                        revision.
                                        Vi strävar efter att göra det enkelt för dig att fatta rätt beslut, där
                                        både
                                        kvalitet och pris är
                                        invägda faktorer.
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


        <!-- <h3 class="text-center">Tack! Vi har mottagit ditt uppdrag. Det här kommer att hända
            nu…</h3>
        <p class="regular">Vårt mål är så snart som möjligt matcha ditt uppdrag med 3
            specialister som passar in på ditt uppdrag. För varje matchning får du ett mejl med
            information om den specialist som visat intresse för ditt ärende. Det kan hända att
            vi behöver kompletterande uppgifter om ditt uppdrag. Då tar vi kontakt med dig via
            telefon för att se till att vi förmedlar så bra förslag som möjligt. Så håll dig
            nära telefonen - Vi ser fram emot att hjälpa dig.</p>


        <h4 class="promoted">Våra resurser</h4>
        <p class="regular"><a href="/om-oss" target="_blank">Om RedovisningsMäklarna:</a>
            <p class="regular">
                Vår vision är att skapa en transparent marknad för tjänster inom redovisning och
                revision.
                Vi strävar efter att göra det enkelt för dig att fatta rätt beslut, där både
                kvalitet och pris är
                invägda faktorer.
            </p>



            <i class="mdi mdi-phone"></i> 08–121 47 429

            <p>Tveka inte med att kontakta oss under våra öppettider. Vi finns här för att på
                bästa möjliga sätt besvara dina frågor.</p>

            <table class="table">
                <tr>
                    <td>Måndag</td>
                    <td class="text-right">09:00 - 21:00</td>
                </tr>
                <tr>
                    <td>Tisdag</td>
                    <td class="text-right">09:00 - 21:00</td>
                </tr>
                <tr>
                    <td>Onsdag</td>
                    <td class="text-right">09:00 - 21:00</td>
                </tr>
                <tr>
                    <td>Torsdag</td>
                    <td class="text-right">09:00 - 21:00</td>
                </tr>
                <tr>
                    <td>Fredag</td>
                    <td class="text-right">09:00 - 21:00</td>
                </tr>
                <tr>
                    <td>Lördag</td>
                    <td class="text-right">09:00 - 21:00</td>
                </tr>
                <tr>
                    <td>Söndag</td>
                    <td class="text-right">09:00 - 21:00</td>
                </tr>
            </table>-->
    </v-content>
</template>

<script>
    export default {
        methods: {
            getUrl(img) {
                return require('../../assets/' + img)
            },
        }
    }
</script>

<style>
    .white-jumbotron {
        background-color: rgba(255, 255, 255, 0.63);
        /* height: 70vh; */
        padding: 2% 1% 5% 1%;
    }

    .link {
        color: black;
    }

    .link:hover {
        color: teal;
    }
</style>