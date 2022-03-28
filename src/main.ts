import "@/assets/scss/app.scss"
import { createApp } from "vue"
import router from "@/router"
import App from "@/App.vue"
import Container from "@/components/base/v-container.vue"
import Input from "@/components/base/v-input.vue"
import TextArea from "@/components/base/v-textarea.vue"
import Select from "@/components/base/v-select.vue"
import Button from "@/components/base/v-button.vue"
import Badge from "@/components/base/v-badge.vue"

const app = createApp(App)
app.component("v-container", Container)
app.component("v-input", Input)
app.component("v-select", Select)
app.component("v-textarea", TextArea)
app.component("v-button", Button)
app.component("v-badge", Badge)
app.use(router)
app.mount("#app")
