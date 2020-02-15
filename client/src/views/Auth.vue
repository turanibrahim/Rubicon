<template>
  <v-fade-transition>
    <login v-if="whichScreen" @changeScreenToSignup="changeScreen()"></login>
    <signup v-else @changeScreenToLogin="changeScreen()"></signup>
  </v-fade-transition>
</template>
<script>
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';

export default {
  name: 'Auth',
  components: {
    Login,
    Signup,
  },
  data: () => ({
    whichScreen: true,
  }),
  methods: {
    changeScreen() {
      this.whichScreen = !this.whichScreen;
    },
  },
};
</script>
