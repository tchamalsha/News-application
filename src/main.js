import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./axios"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
