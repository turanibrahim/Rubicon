<template>
  <v-row >
    <v-col cols="6" class="py-0 d-flex align-stretch">
      <v-img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      ></v-img>
    </v-col>
    <v-col cols="6" justify-center class="align-self-center">
      <v-row justify="center">
        <v-col cols="8">
          <v-card shaped elevation="24" loading>
            <v-img
              class="white--text align-end mt-2"
              contain
              height="200px"
              src="https://lh3.googleusercontent.com/Hpk4d4ezPJjMw7F2polb7jvRamJEGLJVNKJFg_GaYH9lS7i_GkTqsdLzLZBWqyBZuSc4=s180-rw"
            >
            </v-img>
              <v-card-title class="justify-center text-uppercase py-0 primary--text">
                login
              </v-card-title>
            <v-card-text>
            </v-card-text>
            <v-card-actions>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Login',
};
</script>
