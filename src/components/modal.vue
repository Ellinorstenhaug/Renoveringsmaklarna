<template>
    <div>
        <div class="action v-container xs10 offset-xs1">
            <div class=" modal-container" v-if="showModal">
                <div class="modal-jumbotron">
                    <div><p>{{count}}</p></div>
                    <div class="step-container" v-if="count === 0">
                        <p>hy</p>
                        <!-- <stepOne/> -->
                    </div>
                    <div class=" step-container" v-else-if="count === 1">
                            <h1>Steg 2</h1>
                    </div>
                    <div class="step-container" v-else-if="count === 2">
                        <h1>Steg 3</h1>
                    </div>
                </div>

                <v-btn @click.prevent="add">ÖKAA</v-btn>
                <v-btn :disabled="submitted" @click.prevent="submitted=true">Sänk</v-btn>
              
            </div>
            <v-btn class="blue lighten-2 mt-5" dark large v-on:click="showModal =!showModal">Get started</v-btn>
        </div>
    </div>

</template>

<script>
    import img from '@/assets/pen.png';
    // import stepOne from '@/services/stepone';

    export default {
        components: {
            // stepOne,
        },


        
        data() {
            return {
                showModal: false,
                img: img,
                count: 0,
            }
        },
        methods: {
            add: function () {
                return this.count++;
            },
            minus: function () {
                return this.count--;
            },
        }
    }
</script>

<style>
    @media (max-width: 592px) {
        .modal-container {
            width: 100%;
        }
    }

    @media (min-width: 960px) {
        .modal-container {
            width: 600px;
        }

        .presentation:hover {
            border-left: 2px solid rgb(39, 39, 39);
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
        color:red !important;
        animation: fadein2 2s ease-in-out infinite;
/*TODO Klass funkar ej?*/
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