<script>
import SessionMenu from './SessionMenu'
export default {
  name:'Navbar',
  components: {
    SessionMenu,
  },
  data () {
    return {
      navbarItems: [
        {
          icon: 'mdi-home',
          text: 'Home',
        },
        {
          icon: 'mdi-fire',
          text: 'Trending',
        },
        {
          icon: 'mdi-food-apple',
          text: 'Fresh',
        },
        ],
      activeTab: 0,
      maxScene: 8
    };
  },
};
</script>

<template>
  <v-layout>
    <!-- <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar> -->
    <v-toolbar>
      <v-row>
        <v-col md6/>

        <v-col
          pa-0
          md1 align-self="center"
          v-for="(item, index) in navbarItems" 
          :key="index" 
          @click="activeTab=index"
          :class="activeTab === index ? 'active' : 'navbarItem' "
        >
        <v-icon> {{item.icon}} </v-icon>
          {{item.text}}
        </v-col>
        <v-spacer/>

        <v-col md1>
          <session-menu/>
        </v-col>
      </v-row>
    </v-toolbar>
  </v-layout>
</template>


<style scoped>

.active{
  border-bottom:5px solid orange;
  background-color: whitesmoke;
}

.navbarItem {
  font-size:15px;
  font-weight: bold;
}

</style>