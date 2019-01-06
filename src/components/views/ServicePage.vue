<template>
    <v-content>
        <section>
            <v-parallax src="../../../assets/badrum.jpg" 
                height="600">
                <v-layout column align-center justify-center class="white--text">
                    <!-- <img src="@/assets/logo.png" alt="go" height="200"> -->
                    <h1 class="white--text mb-2 display-1 text-xs-center">{{ this.service.heading }}</h1>
                    <div class="subheading mb-3 text-xs-center">{{this.service.ingress}}</div>
                </v-layout>
            </v-parallax>
        </section>

    </v-content>
</template>

<script>
    import serviceJson from '../../services/services.json';
    export default {
        components: {
            // stepOne,
        },

        mounted() {
            this.initService();
        },


        data() {
            return {
                service: {},
            }
        },
        methods: {
            initService: function () {
                this.service = this.findService(this.$route.params.id);
                return this.service;
            },

            findService: function (serviceName) {

                let isFound = false;
                let serviceObject = {};

                for (var i = 0; i < serviceJson.length; i++) {
                    if (serviceJson[i].heading == serviceName) {

                        isFound = true;

                        serviceObject = {
                            heading: serviceJson[i].heading,
                            icon: serviceJson[i].icon,
                            ingress: serviceJson[i].ingress
                        }
                    }
                }

                if (isFound) {
                    return serviceObject;
                }

                this.$router.push({
                    name: "startsida"
                })
            }
        }
    }
</script>

<style>

</style>