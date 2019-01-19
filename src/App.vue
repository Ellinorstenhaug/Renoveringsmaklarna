<template>
    <v-app light>
        <Navigation :serviceLinks="services"/>
        <main id="page-wrap">
            <router-view />

        </main>

        <Footer :serviceLinks="services.slice(1,8)" />
    </v-app>
</template>

<script>
    import Navigation from './components/views/Navigation';
    import Footer from './components/views/Footer';
    import serviceJson from './services/services.json';


    export default {
        name: 'App',
        components: {
            Navigation,
            Footer,
        },
        data: () => ({
            services: serviceJson,

        })
    }
</script>

<style>
 
</style>