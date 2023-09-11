import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/tailwind.css";
import axios from "axios";
import VueAxios from "vue-axios"
import * as api from "./constants/api"
import PrimeVue from 'primevue/config'
import "primevue/resources/themes/bootstrap4-light-blue/theme.css"
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons


// Main App initialization
createApp(App) 
  .use(store)
  .use(VueAxios,axios)
  .use(PrimeVue)
  .mount("#app");

// Is backend online?
axios.get(api.CONNECTION_TEST_MAIN).then((response) => {
  console.log(response.data)
  store.commit("setMainServerState", response.data.online)
})