<script>
export default {
  name:'SessionMenu',
  data () {
    return {
      items: [ 'Login', 'Sign-Up'],
    };
  },
};
</script>

<template>
<v-row>
  <v-col
    md1
    v-for="(item, index) in items" 
    :key="index" 
  >
    <v-btn 
      color="blue lighten-2"
    >
      {{item}}
    </v-btn>
  </v-col>
</v-row>
</template>


<style>

</style>