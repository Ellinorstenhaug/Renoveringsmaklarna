<template>
    <v-content>
        <section>
            <v-parallax class="headColor">
                <v-layout column align-center justify-center class="white--text">
                    <!-- <img src="@/assets/logo.png" alt="go" height="200"> -->
                    <h1 class="white--text mb-2 display-2 text-xs-center">Kontakta oss</h1>
                    <div class="subheading mb-3 text-xs-center">
                        <span class="paragraph__text">
   Om du behöver kontakta oss kan du göra det här. Du kan
                        antingen använda formuläret nedan
                        eller kontakta oss på de kontaktuppgifter du hittar nedan till vänster.
                        </span>
                     </div>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Om RenoveringsMäklarna</h2>
                        <div>
 <p class="paragraph__text mt3">
                            Om du behöver kontakta oss kan du göra det här. Du kan antingen använda formuläret nedan
                            eller kontakta oss på de kontaktuppgifter du hittar nedan till vänster. </p>
                        </div>
                       
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md5 mr-5>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline align-left">Kontaktuppgifter
                                            <hr>
                                        </div>
                                    </v-card-title>
                                    <v-card-text align-center text-md-center text-xs-center>
                                        <div class="table-wrapper">
                                            <address>
                                                <table>
                                                    <tr>
                                                        <th>Adress</th>
                                                        <td>Grevgatan 12, 114 53 Stockholm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Telefon</th>
                                                        <td><a class="link" href="tel:+812147429">08–121 47 429</a></td>
                                                    </tr>
                                                    <tr>
                                                        <th>E-mail</th>
                                                        <td><a class="link" href="mailto:info@renoveringsmaklarna.se">info@renoveringsmaklarna.se</a></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Org.nr </th>
                                                        <td>556993-1933</td>
                                                    </tr>
                                                </table>
                                            </address>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                                <div class="b-w">
                                    <iframe class="responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.010855984479!2d18.081813815944685!3d59.33277258166007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d508b82e7e3%3A0xd9a59b8e9b59beec!2sGrevgatan+12%2C+114+53+Stockholm!5e0!3m2!1ssv!2sse!4v1547028763464"
                                        allowfullscreen></iframe>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>
        <section class="form-section py-5">
            <v-layout row wrap align-center justify-center>
                <div class="form-background py-4">
                    <v-flex xs10 offset-xs1>
                        <div class="headline black--text mb-3 text-xs-center">Kontakta RevoveringsMäklarna</div>
                        <form>
                            <v-text-field v-validate="'required|max:20'" v-model="userData.name" :error-messages="errors.collect('name')"
                                label="Namn" data-vv-name="name" required></v-text-field>
                            <v-text-field v-validate="'required|email'" v-model="userData.email" :error-messages="errors.collect('email')"
                                label="E-mail" data-vv-name="email" required></v-text-field>
                            <textarea class="form-control" v-model="userData.description" id="input-description"
                                placeholder="Skriv ditt meddelande här"></textarea>
                        </form>
                        <v-flex xs12>
                            <v-btn @click.prevent="submit"  dark large class="lighten-2 mt-5 selling-button" href="/pre-made-themes">
                                Skicka meddelande
                            </v-btn>
                        </v-flex>
                    </v-flex>


                </div>
            </v-layout>
        </section>

    </v-content>

</template>

<script>
    import Vue from 'vue'
    import axios from 'axios';
    import VeeValidate from 'vee-validate'
    Vue.use(VeeValidate)

    export default {
        data() {
            return {
                userData: {
                    name: '',
                    email: '',
                    description: ''
                }
            }
        },

        $_veeValidate: {
            validator: 'new'
        },
        mounted() {
            this.$validator.localize('sv', this.dictionary);
        },

        methods: {
            submit() {

                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.procentCount = 100;
                        this.loader = 'loading3'

                        let userObject = {
                            from: this.userData.email,
                            description: this.userData.description,
                            name: this.userData.name,
                            contactpage: true,
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
                                        alert('Tack, vi återkommer snarast.');

                                    }, 1500);

                                    setTimeout(() => {

                                        this.$router.push({
                                            name: "startsida"
                                        });
                                    }, 3000);

                                }
                                this.loader = null;
                            });
                    }
                });
            },
        },
    }
</script>

<style scoped>
    .text-center {
        text-align: left !important;
    }

    address {
        font-style: normal;

    }

    td {
        padding-left: 15px;
    }

    .link {
        color: black !important;
    }

    .link:hover {
        color: teal !important;
    }

    .b-w {
        filter: hue-rotate(70deg) grayscale(60%);
    }

    .table-wrapper {
        width: 100%;
        display: block;
    }

    iframe {
        width: 100%;
        height: 450px;
        border: none;
        margin-top: 25px;
        float: right;
        display: block;
    }

    @media (min-width:1264px) {
        iframe {
            width: 600px !important;
            padding-left: 40px;

        }
    }

    /* @media (min-width:960, max-width: 1263px){
        iframe {
            width: 500px !important;

        }
    } */


    .headColor {
        background: rgb(43, 23, 36);
    }

    .about-pic {
        background-color: rgb(209, 209, 209);
        height: 600px;

    }

    .form-section {
        background-color: #dbd3dd;
    }

    .selling-button {
        width: 100% !important;
    }

    .align-left {
        text-align: left !important;
    }

    .form-background {
        background-color: rgba(255, 255, 255, 0.459);
        /* padding:50px; */
    }
</style>