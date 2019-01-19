<template>
    <v-layout row wrap align-center>
        <v-container grid-list-xl >
            <v-layout row wrap align-center>
                <v-flex xs12>
                    <div class="client-wrapper">
                    <img src="@/assets/dunkin-donuts.svg" alt="" class="client-logo">
                    <img src="@/assets/mariefredsekonomi.jpg" alt="" class="client-logo">
                    <img src="@/assets/bjork.png" alt="" class="client-logo">
                    <img src="@/assets/folkteatern.png" alt="" class="client-logo">
                    <img src="@/assets/ndr.png" alt="" class="client-logo">
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
    export default {

    }
</script>

<style>
    .client-logo {
        width: auto;
        height: 60px;
        filter: grayscale(1);
        margin: 10px 40px;
    }
    .client-wrapper {
        width:100%;
        margin: 0 auto; 
    }
</style>