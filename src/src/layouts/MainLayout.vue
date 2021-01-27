<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <img src="~assets/logo.png" height="50" />
          <q-btn to="/" color="dark" label="Home" />
          <q-btn to="/dashboard" color="dark" label="Dashboard" />
        </q-toolbar-title>
        <q-btn
          v-if="isLoggedIn"
          v-on:click="logout"
          color="dark"
          label="Logout"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
  computed: {
    isLoggedIn: {
      get() {
        return this.$store.state.user.isLoggedIn;
      },
      set(val) {
        this.$store.commit("user/updateIsLoggedIn", val);
      }
    }
  },
  methods: {
    logout() {
      this.isLoggedIn = false;
      this.$router.push("/login");
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "check_circle",
        position: "top",
        timeout: 2000,
        message: "Successfully logged out"
      });
    }
  },
  beforeCreate: function() {
    document.body.className = "home";
  }
};
</script>
