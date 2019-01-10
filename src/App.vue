<template>
    <v-app light>
        <Navigation :serviceLinks="services" />
       <router-view/>
        <Footer :serviceLinks="services"/>
    </v-app>
</template>

<script>
    import Navigation from './components/views/Navigation';
    import Footer from './components/views/Footer';
    import serviceJson from './services/services.json';


    export default{
        name: 'App',
        components:{
            Navigation,
            Footer,
        },
        data: () => ({
            services: serviceJson,

        })
    }
</script>