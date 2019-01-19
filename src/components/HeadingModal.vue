<template>
    <div style="width:100%">
        <div style="50%">
            <h1>{{computedHeading}}</h1>

        </div>
        <div class="progress-handler">
            <v-progress-circular :rotate="-90" :size="80" :width="15" :value="value2" color="green">
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
                value2: 0,
                value: 0 * 33
            }
        },
        watch: {
            procentValue: function (newVal) {
                this.value = newVal;
                this.value2 =(newVal * 33)
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