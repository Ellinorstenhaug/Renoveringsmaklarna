<template>
    <div class=" v-container xs10 offset-xs1">
        <!-- Modal Template -->
        <div v-on:click="dialog =! dialog">
            <v-btn slot="activator" class="knapp1 " large v-if="this.service">
                <div class="content-wrap text-md-left">
                    <span class="knapp2-text">
                        <span v-html="this.service.icon"></span>
                        Starta jämförelse med {{this.service.heading}}
                    </span>
                </div>
            </v-btn>

            <v-btn slot="activator" class="knapp1 " large v-if="!this.service">
                <div class="content-wrap text-md-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" /></svg>
                    <span class="knapp2-text" v-if="!this.service">

                        Vad behöver du hjälp med?
                    </span>

                </div>
            </v-btn>
            <v-btn slot="activator" color="purple lighten-2" class="knapp2" large dark>Kom igång!</v-btn>
        </div>
        <v-layout action row justify-center>

            <v-dialog v-model="dialog" block max-width="600px">
                <v-card>
                    <v-card-title>
                        <HeadingModal :title="headingLabel" :procentValue="procentCount"></HeadingModal>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-xl class="static-container">
                            <v-layout row wrap align-center>
                                <v-flex xs4 md4 class="step-wrap justify-center">

                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <svg v-if="count>=1" version="1.1" id="Layer_1" class="step-icon" width="34"
                                                height="34" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                x="0px" y="0px" viewBox="0 0 164.2 200" style="enable-background:new 0 0 164.2 200; fill: green;"
                                                xml:space="preserve">
                                                <g>
                                                    <path d="M91.8,25.2h-0.6L56.4,44l-5.2-20.6L94.9,0h23.1v200H91.8V25.2z" />
                                                </g>
                                            </svg>
                                            <svg v-else="" class="step-icon" version="1.1" id="Layer_1" width="34"
                                                height="34" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                x="0px" y="0px" viewBox="0 0 164.2 200" style="enable-background:new 0 0 164.2 200;"
                                                xml:space="preserve">
                                                <g>
                                                    <path d="M91.8,25.2h-0.6L56.4,44l-5.2-20.6L94.9,0h23.1v200H91.8V25.2z" />
                                                </g>
                                            </svg>

                                        </v-card-text>

                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="modal-link title3 text-xs-center">Välj
                                                tjänst </div>
                                        </v-card-title>

                                    </v-card>
                                </v-flex>
                                <v-flex xs4 md4 class="step-wrap justify-center">
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">


                                            <svg v-if="count >=2" class="step-icon" version="1.1" id="Layer_1" width="34"
                                                height="34" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                x="0px" y="0px" viewBox="0 0 164.2 200" style="enable-background:new 0 0 164.2 200; fill: green;"
                                                xml:space="preserve">
                                                <g>
                                                    <path d="M19.3,200v-16.3l20.9-20.3c50.2-47.8,72.9-73.2,73.2-102.9c0-20-9.7-38.4-39-38.4c-17.9,0-32.7,9.1-41.8,16.6L24.1,20 C37.8,8.5,57.1,0,79.8,0C122.2,0,140,29,140,57.2c0,36.3-26.3,65.7-67.8,105.6l-15.7,14.5v0.6h88.3V200H19.3z" />
                                                </g>
                                            </svg>
                                            <svg v-else="" class="step-icon" version="1.1" id="Layer_1" width="34"
                                                height="34" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                x="0px" y="0px" viewBox="0 0 164.2 200" style="enable-background:new 0 0 164.2 200; "
                                                xml:space="preserve">
                                                <g>
                                                    <path d="M19.3,200v-16.3l20.9-20.3c50.2-47.8,72.9-73.2,73.2-102.9c0-20-9.7-38.4-39-38.4c-17.9,0-32.7,9.1-41.8,16.6L24.1,20 C37.8,8.5,57.1,0,79.8,0C122.2,0,140,29,140,57.2c0,36.3-26.3,65.7-67.8,105.6l-15.7,14.5v0.6h88.3V200H19.3z" />
                                                </g>
                                            </svg>

                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="modal-link title3 text-xs-center">Beskriv ditt ärende</div>
                                        </v-card-title>
                                    </v-card>
                                </v-flex>
                                <v-flex xs4 md4 class="step-wrap justify-center">
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <svg class="step-icon" version="1.1" id="Layer_1" width="34" height="34"
                                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                x="0px" y="0px" viewBox="0 0 164.2 200" style="enable-background:new 0 0 164.2 200;"
                                                xml:space="preserve">
                                                <g>
                                                    <path d="M25.2,166.7c7.4,4.8,24.7,12.2,42.9,12.2c33.6,0,44-21.4,43.8-37.5c-0.3-27.1-24.7-38.7-50-38.7H47.3V83h14.6 c19,0,43.2-9.8,43.2-32.7c0-15.5-9.8-29.2-33.9-29.2c-15.5,0-30.4,6.8-38.7,12.8l-6.8-19C35.7,7.4,55.3,0,76.1,0 c38.1,0,55.4,22.6,55.4,46.1c0,19.9-11.9,36.9-35.7,45.5v0.6c23.8,4.8,43.2,22.6,43.2,49.7c0,31-24.1,58-70.5,58 c-21.7,0-40.8-6.8-50.3-13.1L25.2,166.7z" />
                                                </g>
                                            </svg>

                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="modal-link title3 text-xs-center">Detaljer
                                                om
                                                dig</div>
                                        </v-card-title>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>

                        <div class="step-container" v-if="count === 0">
                            <div class="wrapper">
                                <ul v-for="(item, index) in allServicesMethod" :key="index">
                                    <li @click.prevent="addService(item.heading)" value="mask" class="presentation">


                                        <a class="modal-link title2" href="#" v-html="item.icon"></a>
                                        <a class="modal-link title2" href="#">
                                            {{capitalizeFirstLetter(item.heading)}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class=" step-container" v-else-if="count === 1">
                            <div class="modal-jumbotron">
                                <div class="v-container">
                                    <v-flex xs12>
                                        <textarea class="form-control" v-model="userData.description" id="input-description"
                                            placeholder="Beskriv ditt ärende kortfattat"></textarea>
                                    </v-flex>
                                    <v-flex xs12>
                                        <p class="textcolor">Du behöver inte ge oss en detaljerad
                                            beskrivning, en kort beskrivning räcker. Våra
                                            experter kommer att granska ditt ärende innan vi
                                            matchar
                                            dig med rådgivare.</p>
                                    </v-flex>
                                </div>
                            </div>
                        </div>
                        <div class="step-container" v-else-if="count===2">
                            <form>
                                <v-text-field v-validate="'required|max:10'" v-model="userData.name" :error-messages="errors.collect('name')"
                                    label="Namn" @blur="handleBlur" data-vv-name="name" required></v-text-field>
                                <v-text-field @blur="handleBlur" v-validate="'required|email'" v-model="userData.email"
                                    :error-messages="errors.collect('email')" label="E-mail" data-vv-name="email"
                                    required></v-text-field>
                                <v-text-field @blur="handleBlur" v-validate="'required'" v-model="userData.city"
                                    :error-messages="errors.collect('city')" label="Stad" data-vv-name="city" required></v-text-field>
                            </form>
                        </div>
                        <div class="step-container" v-else-if="count===3">
                            <v-flex xs12>
                                <p class="textcolor">Tack!
                                    Vi bearbetar din förfrågan och återkommer så snart som möjligt.
                                </p>
                                <p>Har du några frågor når du oss enklast på telefon: <a href="tel:0763295932">0763295932</a></p>
                            </v-flex>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-center>
                                <v-container grid-list-xl>
                                    <v-layout row wrap align-center>
                                        <v-flex xs12 md3>
                                            <v-btn block @click.prevent="minus" large v-if="count >= 1">Tillbaka</v-btn>
                                        </v-flex>
                                        <v-flex xs12 md9>
                                            <v-btn block class="purple lighten-2  white--text" large @click.prevent="add"
                                                v-if="count==1">Gå vidare</v-btn>

                                            <v-btn :loading="loading3" :disabled="loading3" color="purple" class="purple white--text lighten-2"
                                                @click.prevent="submit" block v-if="count==2">

                                                Få 3 gratis offerter
                                                <v-icon light></v-icon>
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-layout>
                        </v-container>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-layout>
        <!-- snackbar start -->

        <!-- snackbar slut -->
    </div>

</template>

<script>
    import Vue from 'vue'
    import axios from 'axios';
    import img from '@/assets/pen.png';
    import HeadingModal from '../components/HeadingModal.vue';
    import VeeValidate from 'vee-validate'

    Vue.use(VeeValidate)


    export default {
        props: ['service', 'allServices', 'showDialog'],

        computed: {
            allServicesMethod: function () {
                return this.allServices;

            }
        },
        components: {
            HeadingModal,
        },

        $_veeValidate: {
            validator: 'new'
        },


        data() {
            return {
                loader: null,
                img: img,
                count: 0,
                procentCount: 0,
                headingLabel: 'Välj tjänst',
                currentService: this.service === undefined ? '' : this.service,
                dialog: false,
                postBtn: true,
                loading3: false,

                userData: {
                    name: '',
                    email: '',
                    city: '',
                    interest: '',
                    description: '',
                },


            }
        },
        mounted() {

            this.$validator.localize('sv', this.dictionary);


        },
        methods: {
            handleBlur: function () {

                this.$validator.validateAll().then((result) => {
                    if (result) {
                        console.log(result);
                        this.procentCount = 100;
                    }
                });
            },

            addService: function (serviceName) {

                this.userData.interest = serviceName;
                this.add();
            },


            capitalizeFirstLetter: function (input) {
                return input.charAt(0).toUpperCase() + input.slice(1);
            },
            add: function () {
                this.count++;
                this.handleState();
            },
            minus: function () {
                this.count--;
                this.handleState();
                this.knappText = "Tillbaka";

            },

            handleState: function () {

                if (this.count === 0) {
                    this.headingLabel = "Välj tjänst";
                    this.procentCount = 0;

                } else if (this.count === 1) {
                    this.headingLabel = "Beskriv ditt ärende";
                    this.procentCount = 33;

                } else if (this.count === 2) {
                    this.headingLabel = "Detaljer om dig";
                    this.procentCount = 66;

                } else if (this.count === 3) {
                    this.headingLabel = "Tack för din förfrågan!";
                }

            },

            submit() {

                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.procentCount = 100;
                        this.loader = 'loading3'

                        let userObject = {
                            from: this.userData.email,
                            description: this.userData.description,
                            name: this.userData.name,
                            interest: this.userData.interest,
                            city: this.userData.city
                        };


                        axios.post('http://api.redovisningsmaklarna.local/api/Renoveringsmaklarna/', userObject, {
                            headers: {
                                'Content-type': 'application/json; charset=utf=8',
                                "Access-Control-Allow-Origin": "*"
                            },
                            dataType: 'json',
                            crossDomain: true

                        }).then(
                            response => {

                                if (response.data) {
                                    setTimeout(() => {
                                        this.$router.push({
                                        name: "klart"
                                    });
                                    }, 3000);
                                    
                                }
                                this.loader = null;
                            });
                    }
                });
            },
        },
        dictionary: {
            attributes: {
                email: 'E-mail adress'
                // custom attributes
            },
            custom: {
                name: {
                    required: () => 'Namn måste vara ifyllt',
                    max: 'The name field may not be greater than 10 characters'
                    // custom messages
                },
                email: {
                    required: 'Email måste vara ifylld'
                },
                location: {
                    required: 'fyll i stad'
                }
            }
        },

        watch: {

            service: function (newVal) {
                this.currentService = newVal.heading;
                this.userData.interest = newVal.heading;
                this.count = 1;
                this.handleState();
            },
            showDialog: function () {
                this.dialog = !this.dialog;
            },
            dialog(val) {
                !val
            },
            loader() {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            }
        },
    }
</script>

<style>
    @media (max-width: 960px) {
        .modal-container {
            width: 100%;
        }

        .textcolor {
            padding: 0;

        }
    }


    @media (min-width: 960px) {
        .modal-container {
            width: 600px;
        }

        .presentation:hover {
            border-left: 2px solid rgb(39, 39, 39);
            cursor: pointer;
        }
    }



    .action {
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 100vh; */
    }

    .btn {
        width: 100%;
    }

    .headline {
        color: black;
        font-size: 0.8em !important;
    }

    .modal-container {
        position: fixed;
        z-index: 99;
        width: 670px;
        height: 95%;
        top: 20px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0px 0px 10px 0px rgba(153, 153, 153, 1);
        /* overflow: hidden; */
        animation: fadein 0.3s ease-in alternate;
        outline: 1000px solid rgba(0, 0, 0, 0.5);

    }

    .modal-link {
        color: black;
        font-weight: 300 !important;
        text-decoration: none;
        display: inline !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    .presentation-icon {
        width: 25px;
        height: 25px;
    }



    ul li {
        padding: 20px;
        border-bottom: 1px solid #eee;
        list-style-type: none;
    }

    h1 {
        color: black;
        font-weight: 300 !important;
    }

    ol,
    ul {
        margin: 0 !important;
        padding: 0 !important;
    }

    textarea {
        border: 1px solid rgb(141, 141, 141) !important;
        height: 100px;
        width: 100%;
        color: black !important;
        font-family: 'avenir' !important;
        padding: 10px;
    }

    .step-container {
        color: red !important;
        /* animation: fadein2 0.2s ease-in alternate; */
        /*TODO Klass funkar ej?*/
    }

    .textcolor {
        color: black !important;
        padding: 30px;

    }

    @keyframes fadein {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadein2 {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }


    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }

    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @keyframes loader {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    .title3 {
        font-size: 1.3em;
    }

    .title2 {
        font-size: 1.1em;
    }

    .knapp1 {
        background-color: white;
        border: 2px solid black;
        float: left !important;
        width: 79% !important;
        min-width: 0;
        height: 60px !important;
        text-transform: none !important;


        /* line-height: 12 !important; */

        /* padding: 20px 0 20px 0 !important; */
    }

    .knapp2 {
        /* padding: 20px 0 !important; */
        margin-left: 0 !important;
        margin-right: 0 !important;
        /* float: right !important; */
        width: 16% !important;
        background-color: white;
        border: 2px solid black;
        height: 60px !important;
        /* height: 100px;
        width: 500px; */
    }

    .knapp2-text {
        line-height: 2.5;
    }

    svg {
        position: relative;
        top: 5px;
        left: -13px;
    }

    .button-wrapper {
        padding: 20px 0;
        background-color: rgba(0, 0, 0, 0.521);
    }

    .content-wrap {
        position: absolute;
        left: 0;
        font-size: 0.9em !important;
        filter: opacity(0.4)
    }

    .v-btn__content {
        float: left;
        text-align: left !important;
    }

    @media (max-width:561px) {
        .knapp1 {
            width: 96% !important;
            /* width:80% !important;
        margin: 0 auto !important; */
        }

        .knapp2 {
            width: 96% !important;
            margin-left: 8px !important;
        }
    }

    .step-wrap {
        padding: 20px;
        text-align: center;
    }

    .v-card__text {
        padding: unset auto !important;
    }
</style>