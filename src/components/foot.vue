<template>
<div>
        <v-app id="inspire">
            <v-toolbar>
                <v-menu :nudge-width="100">
                    <v-toolbar-title slot="activator">
                        <span v-text="title"></span>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <div>
                        <v-toolbar-items class="hidden-sm-and-down">
                            <div class="text-xs-center">
                                <v-btn slot="activator" flat>Tjänster</v-btn>
                                <v-icon light>arrow_drop_down</v-icon>

                                <v-list>
                                    <v-list-tile v-for="(item, index) in items" :key="index">
                                        <v-list-tile-title>{{ item.titles }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                                <v-btn flat>Om Oss</v-btn>
                                <v-icon light>arrow_drop_down</v-icon>
                                <v-btn flat>Kontakt</v-btn>
                                <v-icon light>arrow_drop_down</v-icon>
                            </div>
                        </v-toolbar-items>
                    </div>
                </v-menu>
            </v-toolbar>
        </v-app>
    </div>
</template>
  

