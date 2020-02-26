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
                      <form>
                        <v-col cols="10" xs="12">
                          <v-text-field
                            v-model="person.name"
                            label="Name"
                            outlined
                            hide-details
                            :error-messages="nameErrors"
                            :counter="10"
                            required
                            @input="$v.person.name.$touch()"
                            @blur="$v.person.name.$touch()"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="10" xs="12">
                          <v-text-field
                            v-model="person.surname"
                            label="Surname"
                            outlined
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="10" xs="12">
                          <v-text-field
                            v-model="person.username"
                            label="Username"
                            outlined
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="10" xs="12">
                          <v-text-field
                            v-model="person.email"
                            label="E-Mail"
                            outlined
                            hide-details
                          ></v-text-field>
                        </v-col>
                        <v-col cols="10" xs="12">
                          <v-text-field
                            v-model="person.password"
                            label="Password"
                            outlined
                            hide-details
                          ></v-text-field>
                        </v-col>
                      </form>
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
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  name: 'SignUp',
  validations: {
    name: { required, maxLength: maxLength(50) },
    surname: { required, maxLength: maxLength(50) },
    username: { required, maxLength: maxLength(50) },
    email: { required, email },
  },
  data: () => ({
    person: {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
    },
    errorMessage: false,
    name: '',
  }),
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.person.name.$dirty) return errors
      !this.$v.person.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.person.name.required && errors.push('Name is required.')
      return errors
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    goToLogin(event) {
      const value = 'changeScreenToLogin';
      this.$emit(value);
    },
    submit() {
      this.$v.$touch();
    },
  },
};
</script>
<style scoped>
.custom-row{
  background-color: #E8EAF6;
}
</style>
