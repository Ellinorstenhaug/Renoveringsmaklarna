<template>
    <div>
        <!-- <div class="action v-container xs10 offset-xs1"> -->
        <!-- <div class=" modal-container" v-if="showModal"> -->
        <div class="modal-jumbotron">
            <HeadingModal :title="headingLabel"></HeadingModal>
            <v-container grid-list-xl>
                <v-layout row wrap align-center>
                    <v-flex xs4 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="modal-link title text-xs-center">Välj tjänst</div>
                            </v-card-title>
                            <v-card-text class="text-xs-center">
                                <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex xs4 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="modal-link title">Beskriv ditt ärende</div>
                            </v-card-title>
                            <v-card-text class="text-xs-center">
                                <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs4 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="modal-link title text-xs-center">Detaljer om
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
                        <li @click.prevent="add" class="presentation"><a class="modal-link title" href="#">Badrumsrenovering</a></li>
                        <li @click.prevent="add" class="presentation"><a class="modal-link title" href="#">Köksrenovering</a></li>
                        <li @click.prevent="add" class="presentation"><a class="modal-link title" href="#">Renovering</a></li>
                        <li @click.prevent="add" class="presentation"><a class="modal-link title" href="#">Målning
                                och
                                tapeter</a></li>
                        <li v-on:click="add" class="presentation"><a class="modal-link title" href="#">Takläggning</a></li>
                        <li @click.prevent="add" class="presentation"><a class="modal-link title" href="#">Jag
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
                            <p class="textcolor" >Du behöver inte ge oss en detaljerad beskrivning, en kort beskrivning räcker. Våra
                                experter kommer att granska ditt ärende innan vi matchar dig med rådgivare.</p>
                        </v-flex>

                    </div>
                </div>
            </div>

            <!-- Steg 3  -->
            <div class=" step-container" v-else-if="count === 2">
                <div class="modal-jumbotron">
                    <form>
                        <v-text-field v-validate="{required:true}" v-model="name" label="Namn" required @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"></v-text-field>
                        <v-text-field v-validate="{required:true, email:true}" type="email" v-model="email" label="E-mail"
                            required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                        <v-text-field v-validate="{required:true}" type="number" v-model="number" label="Telefonnummer"
                            required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                        <v-text-field v-validate="{required:true}" type="location" v-model="location" label="Stad"
                            required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                    </form>
                </div>
            </div>
        </div>



        <v-container grid-list-xl>
            <v-layout row wrap align-center>
                <v-flex xs12 md3>
                    <v-btn block @click.prevent="minus" v-if="count >= 1">Sänk</v-btn>
                </v-flex>
                <v-flex xs12 md9>
                    <v-btn block class="purple lighten-2" @click.prevent="add" v-if="count==1">Gå vidadre</v-btn>
                    <v-btn block class="purple lighten-2" @click.prevent="success" v-if="count==2">Få 3 gratis
                        offerter!</v-btn>
                </v-flex>

            </v-layout>
        </v-container>


        <!-- </div> -->
        <div class="step-container" v-if="count === 2">
        </div>
        <!-- </div> -->
        <!--Todo: Success-->
    </div>
</template>

<script>
    import img from '@/assets/pen.png';
    import HeadingModal from '../components/HeadingModal.vue';
    // import VeeValidate from 'vee-validate';
    // import {
    //     validationMixin
    // } from 'vuelidate'
    // import {
    //     required,
    //     maxLength,
    //     email
    // } from 'vuelidate/lib/validators'

    export default {
        components: {
            HeadingModal,
        },
        data() {
            return {
                showModal: false,
                img: img,
                count: 0,
                headingLabel: "Välj tjänst",
                name: '',
                email: '',
                checkbox: false
            }
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
            }
        }
    }
    // Vue.use(VeeValidate);
</script>

<style>
    @media (max-width: 960px) {
        .modal-container {
            width: 100%;
        }
        .textcolor{
        padding:0;

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
        color:black !important;
                padding:30px;

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
</style>