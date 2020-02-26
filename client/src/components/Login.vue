<template>
  <v-row class="custom-row">
    <v-col cols="6" class="py-0 d-flex align-stretch">
      <v-img
        height="100vh"
        src="https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg"
      ></v-img>
    </v-col>
    <v-col cols="6" justify-center class="align-self-center" >
      <v-row justify="center">
        <v-col cols="8">
          <v-card shaped elevation="24" class="pa-2">
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
                <template>
                  <v-container py-0>
                    <v-row justify="center">
                      <v-col cols="12" xs="12" class="align-self-center text-center">
                        <v-alert
                          border="left"
                          color="red"
                          v-if="this.errorMessage"
                        >
                          Error! Email or password is wrong.
                        </v-alert>
                      </v-col>
                      <v-col cols="10" xs="12">
                        <v-text-field
                          v-model="email"
                          label="E-Mail"
                          outlined
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="10" xs="12">
                        <v-text-field
                          v-model="password"
                          label="Password"
                          outlined
                          hide-details
                          :type="showPassword ? 'text' : 'password'"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="showPassword = !showPassword"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </template>
            </v-card-text>
            <v-card-actions>
              <v-container>
                    <v-row justify="center">
                      <v-col cols="12" xs="10" sm="10" justify="center">
                        <v-alert
                          border="left"
                          color="blue lighten-4"
                        >
                          <span>
                            Do you want to sign up?
                            <a text small @click="goToSignup()">Click here.</a>
                          </span>
                        </v-alert>
                      </v-col>
                      <v-col cols="12" xs="10" sm="10" md="10" lg="10">
                        <v-btn
                          block
                          color="primary"
                        >Login</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
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
  data: () => ({
    email: '',
    password: '',
    errorMessage: false,
    showPassword: false,
  }),
  methods: {
    // eslint-disable-next-line no-unused-vars
    goToSignup(event) {
      const value = 'changeScreenToSignup';
      this.$emit(value);
    },
  },
};
</script>
<style scoped>
.custom-row{
  background-color: #E8EAF6;
}
</style>
