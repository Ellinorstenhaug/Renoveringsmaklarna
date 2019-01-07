<template>
    <div class="action v-container xs10 offset-xs1">
        <!-- Modal Template -->
        <v-layout row justify-center>
            <v-dialog v-model="dialog" block max-width="600px">
                <v-btn slot="activator" block class="knapp1">Vad behöver du hjälp med?</v-btn>
                <v-btn slot="activator" color="purple" block dark>Kom igång!</v-btn>
                <v-card>
                    <v-card-title>
                        <HeadingModal :title="headingLabel"></HeadingModal>
                    </v-card-title>
                    <v-card-text> 
                        <v-container grid-list-xl class="static-container">
                            <v-layout row wrap align-center>
                                <v-flex xs4 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="modal-link title3 text-xs-center">Välj
                                                tjänst</div>
                                        </v-card-title>
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs4 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="modal-link title3">Beskriv ditt ärende</div>
                                        </v-card-title>
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs4 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-title primary-title class="layout justify-center">
                                            <div class="modal-link title3 text-xs-center">Detaljer
                                                om
                                                dig</div>
                                        </v-card-title>
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>

                        <div class="step-container" v-if="count === 0">
                            <div class="wrapper">
                                <ul>
                                    <li @click.prevent="add" class="presentation"><a class="modal-link  title2" href="#">Badrumsrenovering</a></li>
                                    <li @click.prevent="add" class="presentation"><a class="modal-link title2" href="#">Köksrenovering</a></li>
                                    <li @click.prevent="add" class="presentation"><a class="modal-link title2" href="#">Renovering</a></li>
                                    <li @click.prevent="add" class="presentation"><a class="modal-link title2" href="#">Målning
                                            och
                                            tapeter</a></li>
                                    <li v-on:click="add" class="presentation"><a class="modal-link title2" href="#">Takläggning</a></li>
                                    <li @click.prevent="add" class="presentation"><a class="modal-link title2" href="#">Jag
                                            är osäker på
                                            vem</a></li>
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
                                <v-text-field v-validate="'required|max:10'" v-model="name" :counter="10"
                                    :error-messages="errors.collect('name')" label="Namn" data-vv-name="name" required></v-text-field>
                                <v-text-field v-validate="'required|email'" v-model="email" :error-messages="errors.collect('email')"
                                    label="E-mail" data-vv-name="email" required></v-text-field>
                                <v-text-field v-validate="'required|city'" v-model="city" :error-messages="errors.collect('city')"
                                    label="Stad" data-vv-name="city" required></v-text-field>
                                <!-- <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6>
                                        <v-text-field label="Förnamn*" required></v-text-field>
                                    </v-flex>

                                    <v-flex xs12 sm6 md6>
                                        <v-text-field label="Efternman*" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field label="Email*" required></v-text-field>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-text-field label="Stad*" required></v-text-field>
                                    </v-flex>
                                
                                    <small>*indicates required field</small>
                                </v-layout>
                            </v-container> -->
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
        components: {
            HeadingModal,
        },

        $_veeValidate: {
            validator: 'new'
        },

        data() {
            return {
                showModal: false,
                img: img,
                count: 0,
                headingLabel: "Välj tjänst",
                name: '',
                email: '',
                city: "",
                dialog: false,
                knappText: "",
                // items: ['Vad behöver du hjälp med?']
            }
        },
        mounted() {
            this.$validator.localize('sv', this.dictionary)
        },
        methods: {

            add: function () {
                this.count++;
                this.handleState();
                // return this.count++;
            },
            minus: function () {
                this.count--;
                this.handleState();
                this.knappText = "Tillbaka";
                // return this.count--;
            },

            success: function () {

            },

            handleState: function () {
                if (this.count === 0) {
                    this.headingLabel = "Välj tjänst";
                } else if (this.count === 1) {
                    this.headingLabel = "Beskriv ditt ärende";
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
        display: block;
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
        background-color:white;
        border:2px solid black;
    }
</style>