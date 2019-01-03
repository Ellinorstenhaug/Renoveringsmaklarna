<template>
    <div>
    <h1 v-once>{{name}}</h1>
    {{ btnState ? 'The button is disabled' : 'The button is active'}}

    <button v-on:click="changeName" v-bind:="btnState">Change Name</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
        name: 'Ellinor',
        btnState: false
        }
    },
    methods: { 
        changeName: function () {
            return {name: 'Elket' }
        }
    }
}
</script>

<style>

</style>
