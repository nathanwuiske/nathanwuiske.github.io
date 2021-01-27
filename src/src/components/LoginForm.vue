<template>
  <q-card class="login-card">
    <q-card-section>
      <img src="~assets/logo-dark.png" height="50" class="sandwai-login-logo" />

      <q-form @submit="onLoginSubmit" class="q-gutter-y-md column">
        <q-input
          filled
          v-model="loginForm.email"
          label="Enter email"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Email field is empty']"
        />
        <q-input
          v-model="loginForm.password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Enter password"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Password field is empty']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-btn
          type="submit"
          color="primary"
          label="Login"
          :loading="loginLoading"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      loginLoading: false,
      loginForm: {
        email: "",
        password: ""
      },
      isPwd: true
    };
  },
  // computed: {
  //   isLoggedIn: {
  //     get() {
  //       return this.$store.state.user.isLoggedIn;
  //     },
  //     set(val) {
  //       this.$store.commit("user/updateIsLoggedIn", val);
  //     }
  //   }
  // },
  methods: {
    async onLoginSubmit() {
      this.loginLoading = true;
      try {
        await this.$baseaxios.get("sanctum/csrf-cookie");
        await this.$store.dispatch("api/POST_LOGIN", this.loginForm);
        this.loginLoading = false;
      } catch (error) {
        const message =
          error && error.response?.statusText
            ? `Error Logging in: ${error.response.statusText}`
            : "Error Logging in.";

        this.$q.notify({
          color: "red",
          textColor: "white",
          icon: "error",
          position: "top",
          timeout: 3500,
          message: message
        });
        this.loginLoading = false;
      }
    }
  },
  mounted() {
    
  }
};
</script>
<style>
.sandwai-login-logo {
  display: block;
  margin: 0 auto;
  margin-bottom: 1em;
}
.login-card {
  width: 100%;
  max-width: 350px;
}
</style>
