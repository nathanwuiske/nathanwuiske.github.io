export function GET_CLOUD(context) {
  return this._vm.$axios
    .get("cloud")
    .then(response => {
      context.commit("SET_CLOUDS", response.data);
    })
    .catch(err => console.log(err));
}

export async function POST_LOGIN({ commit }, payload) {
  try {
    const response = await this._vm.$axios.post("login", payload);
    if (response.data?.success) {
      commit("user/updateIsLoggedIn", true, { root: true });
      this.$router.push("/");
    } else {
      this._vm.$q.notify({
        color: "red",
        textColor: "white",
        icon: "error",
        position: "top",
        timeout: 2500,
        message: "Incorrect credentials"
      });
    }
  } catch (error) {
    throw error;
  }
}

// export function POST_LOGIN({ commit }, payload) {
//   return this._vm.$axios.post("/api/login", payload).then(response => {
//     if (response.data?.success) {
//       commit("user/updateIsLoggedIn", true, { root: true });
//       this.$router.push("/");
//     } else {
//       this._vm.$q.notify({
//         color: "red",
//         textColor: "white",
//         icon: "error",
//         position: "top",
//         timeout: 2500,
//         message: "Incorrect credentials"
//       });
//     }
//   });
// }
