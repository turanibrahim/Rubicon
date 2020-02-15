<template>
  <v-row class="custom-row">
    <v-col cols="6" justify-center class="align-self-center" >
      <v-row justify="center">
        <v-col cols="8">
          <v-card shaped elevation="24" class="pa-2">
            <v-card-title class="justify-center text-uppercase  primary--text">
              sign up
            </v-card-title>
            <v-card-text>
                <template>
                  <v-container py-0>
                    <v-row justify="center">
                      <v-col cols="10" xs="12">
                        <v-text-field
                          label="Name"
                          outlined
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="10" xs="12">
                        <v-text-field
                          label="Surname"
                          outlined
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="10" xs="12">
                        <v-text-field
                          label="Username"
                          outlined
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="10" xs="12">
                        <v-text-field
                          label="E-Mail"
                          outlined
                          hide-details
                        ></v-text-field>
                      </v-col>
                      <v-col cols="10" xs="12">
                        <v-text-field
                          label="Password"
                          outlined
                          hide-details
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
                            Do you have an account ?
                            <a text small @click="goToLogin()">Click here.</a>
                          </span>
                        </v-alert>
                      </v-col>
                      <v-col cols="12" xs="10" sm="10" md="10" lg="10">
                        <v-btn
                          block
                          color="primary"
                        >Signup</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6" class="py-0 d-flex align-stretch">
      <v-img
        height="100vh"
        src="https://images.pexels.com/photos/1227520/pexels-photo-1227520.jpeg"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SignUp',
  data: () => ({
    errorMessage: false,
  }),
  methods: {
    // eslint-disable-next-line no-unused-vars
    goToLogin(event) {
      const value = 'changeScreenToLogin';
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
