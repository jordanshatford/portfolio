import "@/assets/scss/app.scss"
import { createApp } from "vue"
import router from "@/router"
import App from "@/App.vue"

const app = createApp(App)
app.use(router)
app.mount("#app")

import "bootstrap"
