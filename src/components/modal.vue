<template>
    <div class=" v-container xs10 offset-xs1">
        <!-- Modal Template -->
        <div v-on:click="dialog =! dialog">

            <v-btn slot="activator" class="knapp1 " large>
                <div class="content-wrap text-md-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" /></svg>
                    <span class="knapp2-text">
                        Vad behöver du hjälp med?
                    </span>
                </div>
            </v-btn>
            <v-btn slot="activator" color="purple" class="knapp2" large dark>Kom igång!</v-btn>
        </div>
        <v-layout action row justify-center>

            <v-dialog v-model="dialog" block max-width="600px">
                <v-card>
                    <v-card-title>
                        <HeadingModal :title="headingLabel"></HeadingModal>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-xl class="static-container">
                            <v-layout row wrap align-center>
                                <v-flex xs4 md4>

                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M13 6c3.469 0 2 5 2 5s5-1.594 5 2v9h-12v-16h5zm.827-2h-7.827v20h16v-11.842c0-2.392-5.011-8.158-8.173-8.158zm.173-2l-3-2h-9v22h2v-20h10z" /></svg>
                                        </v-card-text>

                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="modal-link title3 text-xs-center hidden-xs-and-down">Välj
                                                tjänst</div>
                                        </v-card-title>

                                    </v-card>
                                </v-flex>
                                <v-flex xs4 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M22 3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981zm-5 6h-14v-1h14v1zm0 2h-14v1h14v-1zm-6 3h-8v1h8v-1z" /></svg>
                                            <!-- <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon> -->
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="modal-link title3">Beskriv ditt ärende</div>
                                        </v-card-title>
                                    </v-card>
                                </v-flex>
                                <v-flex xs4 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" /></svg>
                                            <!-- <v-icon x-large class="blue--text text--lighten-2">build</v-icon> -->
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
                                    <li @click.prevent="add(item.heading)" class="presentation">
                                            
                                        <a class="modal-link title2" href="#" v-html="item.icon"></a>
                                        <a class="modal-link title2" href="#">
                                              {{capitalizeFirstLetter(item.heading)}}
                                        </a>
                                    </li>


                                    <!-- <li @click.prevent="add" class="presentation">
                                        <a class="modal-link title2" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M12 3.571c3.658 5.437 6 9.223 6 12.503 0 3.268-2.691 5.926-6 5.926s-6-2.658-6-5.925c0-3.281 2.342-7.067 6-12.504zm0-3.571c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075zm2.656 12c.969 3.484-.406 6.859-2.656 7.781 3.318.475 5.994-3.466 2.656-7.781z" /></svg>
                                            Badrum</a></li>

                                    <li @click.prevent="add" class="presentation"><a class="modal-link title2" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M18.58 0c-1.234 0-2.377.616-3.056 1.649-.897 1.37-.854 3.261-1.368 4.444-.741 1.708-3.873.343-5.532-.524-2.909 5.647-5.025 8.211-6.845 10.448 6.579 4.318 1.823 1.193 12.19 7.983 2.075-3.991 4.334-7.367 6.825-10.46-1.539-1.241-4.019-3.546-2.614-4.945 1-1 2.545-1.578 3.442-2.95 1.589-2.426-.174-5.645-3.042-5.645zm-5.348 21.138l-1.201-.763c0-.656.157-1.298.422-1.874-.609.202-1.074.482-1.618 1.043l-3.355-2.231c.531-.703.934-1.55.859-2.688-.482.824-1.521 1.621-2.331 1.745l-1.302-.815c1.136-1.467 2.241-3.086 3.257-4.728l8.299 5.462c-1.099 1.614-2.197 3.363-3.03 4.849zm6.724-16.584c-.457.7-2.445 1.894-3.184 2.632-.681.68-1.014 1.561-.961 2.548.071 1.354.852 2.781 2.218 4.085-.201.265-.408.543-.618.833l-8.428-5.548.504-.883c1.065.445 2.1.678 3.032.678 1.646 0 2.908-.733 3.464-2.012.459-1.058.751-3.448 1.206-4.145 1.206-1.833 3.964-.017 2.767 1.812zm-.644-.424c-.265.41-.813.523-1.22.257-.409-.267-.522-.814-.255-1.223.267-.409.813-.524 1.222-.257.408.266.521.817.253 1.223z" /></svg>
                                            Målning och tapetsering</a></li>
                                    <li @click.prevent="add" class="presentation">
                                        <a class="modal-link title2" href="#">
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                                clip-rule="evenodd">
                                                <path d="M24 13.001h-3v10h-18v-10h-3l12-12.001 12 12.001zm-19-2.172v10.172h14v-10.172l-7-7-7 7zm10.332 8.043s-3.953-4.159-4.148-4.354c-.463-.464-1.003-.333-1.285-.051-.398.398-.037 1.019-.037 1.019l-.874.875-2.474-2.474.875-.874s.607.433 1.114-.074c.552-.552.301-1.288 1.525-2.21.726-.547 1.576-.728 2.384-.728 1.591 0 3.019.703 3.019.703-2.581.258-3.607 1.453-2.54 2.52l3.995 4.318c.808.808-.476 2.408-1.554 1.33zm4.668-16.871v5.576l-3-3v-2.576h3z" /></svg>
                                            Bygghjälp</a></li>
                                    <li v-on:click="add" class="presentation"><a class="modal-link title2" href="#">
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                                clip-rule="evenodd">
                                                <path d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z" /></svg>
                                            Flytt</a></li>
                                    <li @click.prevent="add" class="presentation"><a class="modal-link title2" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z" /></svg>
                                            Jag
                                            är osäker på
                                            vem</a></li> -->
                                </ul>
                            </div>
                        </div>

                        <div class=" step-container" v-else-if="count === 1">
                            <div class="modal-jumbotron">
                                <div class="v-container">
                                    <v-flex xs12>
                                        <textarea class="form-control" id="input-description" placeholder="Beskriv ditt ärende kortfattat"></textarea>
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
                                <v-text-field v-validate="'required|max:10'" v-model="name" :error-messages="errors.collect('name')"
                                    label="Namn" data-vv-name="name" required></v-text-field>
                                <v-text-field v-validate="'required|email'" v-model="email" :error-messages="errors.collect('email')"
                                    label="E-mail" data-vv-name="email" required></v-text-field>
                                <v-text-field v-validate="'required|city'" v-model="city" :error-messages="errors.collect('city')"
                                    label="Stad" data-vv-name="city" required></v-text-field>
                            </form>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-center>
                                <v-container grid-list-xl>
                                    <v-layout row wrap align-center>
                                        <v-flex xs12 md3>
                                            <v-btn block @click.prevent="minus" v-if="count >= 1">Tillbaka</v-btn>
                                        </v-flex>
                                        <v-flex xs12 md9>
                                            <v-btn block class="purple lighten-2" @click.prevent="add" v-if="count==1">Gå
                                                vidadre</v-btn>
                                            <v-btn block class="purple lighten-2" @click.prevent="submit" v-if="count==2">Få
                                                3 gratis
                                                offerter!</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-layout>
                        </v-container>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>

<script>
    import Vue from 'vue'
    import img from '@/assets/pen.png';
    import HeadingModal from '../components/HeadingModal.vue';
    import VeeValidate from 'vee-validate'

    Vue.use(VeeValidate)


    export default {
        props: ['service', 'allServices'],

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
                img: img,
                count: 0,
                headingLabel: 'Välj tjänst',
                currentService: '',
                name: '',
                email: '',
                city: "",
                dialog: false,
                userData: {
                    name: '',
                    email: '',
                    city: '',
                    service: ''
                },

            }
        },
        mounted() {

            this.$validator.localize('sv', this.dictionary);
        },
        methods: {
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

            success: function () {

            },

            handleState: function () {
                if (this.count === 0) {
                    this.headingLabel = "Välj tjänst";
                } else if (this.count === 1) {
                    this.headingLabel = "Beskriv ditt ärende";
                    this.userData = {
                        'tjänst': this.currentService
                    };
                } else if (this.count === 2) {
                    this.headingLabel = "Detaljer om dig";
                }
            },

            submit() {
                this.$validator.validateAll()
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
                }
            }
        },

        watch: {
            service: function (newVal) {
                this.currentService = newVal;
                this.count = 1;
                this.handleState();
            },

            // servies: function(newVal){
            //     this.ser
            // }
            dialog(val) {
                !val
            }
        },
    }

    // Vue.use(VeeValidate);
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
</style>