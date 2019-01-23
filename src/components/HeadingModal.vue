<template>
    <div style="width:100%">
        <div style="50%">
            <h1>{{computedHeading}}</h1>

        </div>
        <div class="progress-handler">
            <v-progress-circular :rotate="-90" :size="80" :width="15" :value="procent" color="teal">
                {{ value }}/3
            </v-progress-circular>
        </div>

    </div>
</template>
<script>
    export default {
        props: ['title', 'procentValue'],
        computed: {
            computedHeading: function () {
                if (this.title != null) {
                    return this.title;
                }
                return "Tjänst saknas";
            }
        },

        data() {
            return {
                procent: 0,
                value: 0 * 33
            }
        },
        watch: {
            procentValue: function (newVal) {

                if (newVal == 100) {
                    this.procent = 100;
                    this.value = 3;
                } else {
                    this.value = newVal;
                    this.procent = (newVal * 33)

                }
            }
        },
    }
</script>

<style>
    .progress-handler {
        position: absolute;
        top: 10px;
        right: 25px;
    }
</style>