import "@/assets/scss/app.scss"
import { createApp } from "vue"
import router from "@/router"
import App from "@/App.vue"
import BaseContainer from "@/components/base/BaseContainer.vue"
import BaseInput from "@/components/base/BaseInput.vue"
import BaseTextArea from "@/components/base/BaseTextArea.vue"
import BaseButton from "@/components/base/BaseButton.vue"

const app = createApp(App)
app.component("v-container", BaseContainer)
app.component("v-input", BaseInput)
app.component("v-textarea", BaseTextArea)
app.component("v-button", BaseButton)
app.use(router)
app.mount("#app")
