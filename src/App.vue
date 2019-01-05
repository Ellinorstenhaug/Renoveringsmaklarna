<template>
    <v-app light>
        <Navigation />
       <router-view/>
        <Footer />
    </v-app>
</template>

<script>
    import Navigation from './components/views/Navigation'
    import Footer from './components/views/Footer'
    export default{
        name: 'App',
        components:{
            Navigation,
            Footer
        }
    }
</script>