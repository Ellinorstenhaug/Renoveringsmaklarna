<template>
        <v-footer height="auto" color="rgb(60, 51, 66)">
            <v-layout justify-center row wrap>
                <v-flex indigo lighten-2 py-3 text-xs-center white--text xs12>
                    &copy;2018 — <strong>Vuetify</strong>
                </v-flex>
                    <v-flex xs12 md3 v-for="(item, index) in services" :key="index">   
                <v-btn v-for="link in links" :key="link" color="white" flat >
                    {{ link }}
                </v-btn>  
                    </v-flex>
            </v-layout>
        </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    })
  }
</script>
<style>
    .foot {
        height: 200px;
        color:rgb(60, 51, 66);
    }
</style>