<template>
    <div style="width:100%">
        <div style="50%">
            <h1>{{computedHeading}}</h1>

        </div>
        <div class="progress-handler">
            <v-progress-circular :rotate="-90" :size="80" :width="15" :value="value" color="green">
                {{ value }}%
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
                value: 0
            }
        },
        watch: {
            procentValue: function (newVal) {
                this.value = newVal;
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