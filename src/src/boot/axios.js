import Vue from "vue";
import axios from "axios";
import { Notify } from 'quasar'
// import router from '../router/index';


axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;

const baseURLAxios = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error.response?.status === 401 || error.response?.status === 419) {

      // store.dispatch("auth/logout");
      Notify.create({
        message: "Your session has expired. Please login again to continue.",
        color: "red",
        position: "top",
        icon: "error",
        timeout: 8000
      });
      // router.push('/login');
    }
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = axios;
Vue.prototype.$baseaxios = baseURLAxios;
