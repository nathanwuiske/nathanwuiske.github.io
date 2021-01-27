<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 350px">
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title>CloudTalk Status</q-toolbar-title>
      </q-toolbar>

      <q-list bordered>
        <q-item
          v-for="contact in contacts"
          :key="contact.id"
          class="q-my-sm"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              FF
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.status }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon
              v-if="contact.status == 'online'"
              name="stop_circle"
              color="green"
            />
            <q-icon v-else name="error" color="red" />
          </q-item-section>
        </q-item>
        <q-inner-loading :showing="visible">
          <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      contacts: [],
      polling: null,
      visible: false,
      showSimulatedReturnData: false
    };
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
    callCloudAPI() {
      this.$axios
        .get("cloud")
        .then(response => {
          console.log(response);
          this.contacts = response.data;
          this.visible = false;
          this.showSimulatedReturnData = true;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.visible = true;
    this.showSimulatedReturnData = false;
    this.callCloudAPI();

    this.polling = setInterval(() => {
      this.callCloudAPI();
    }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.polling);
  }
};
</script>
