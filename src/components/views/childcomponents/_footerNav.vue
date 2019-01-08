<template>
    <v-container grid-list-md text-xs-center>
        <v-layout justify-center row wrap>
            <v-flex xs6 md2>
                <v-card dark flat>
                    <v-card-text class="px-0 title white--text text-lg-left text-md-left text-xs-left">{{headings[0]}}</v-card-text>
                    <v-list-tile v-for="(item, index) in services" :key="index">
                        <router-link :to="`${item.url}`" class="v-list__tile__title list-item">{{item.heading}}</router-link>
                    </v-list-tile>
                </v-card>
            </v-flex>

            <v-flex xs6 md6>
                <v-card dark flat>
                    <v-card-text class="px-0 title white--text text-lg-left text-md-left text-xs-left">{{headings[1]}}</v-card-text>
                    <v-list-tile v-for="(item, index) in services" :key="index">
                        <router-link :to="`${item.url}`" class="v-list__tile__title list-item">{{item.heading}}</router-link>
                    </v-list-tile>
                </v-card>
            </v-flex>

            <v-flex black lg12 xs12 lighten-2 py-3 text-xs-center white--text>
                &copy;2019 — RenoveringsMäklarna
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import serviceJson from '../../services/services.json';

    export default {
        data: () => ({
            services: serviceJson,
            headings: [
                'Tjänster',
                'Om RenoveringsMäklarna',
                'Kontakt'
            ],
        }),
    }
</script>

<style>

</style>