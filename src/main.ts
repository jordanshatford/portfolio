import "@/assets/scss/app.scss"
import { createApp } from "vue"
import { createClient, defaultPlugins, type ClientPluginContext } from "villus"
import router from "@/router"
import App from "@/App.vue"
import config from "@/utils/config"
import BaseContainer from "@/components/base/BaseContainer.vue"
import BaseInput from "@/components/base/BaseInput.vue"
import BaseTextArea from "@/components/base/BaseTextArea.vue"
import BaseButton from "@/components/base/BaseButton.vue"
import BaseBadge from "@/components/base/BaseBadge.vue"

const githubGraphqlClient = createClient({
  url: config.GITHUB_GRAPHQL_API_ENDPOINT,
  use: [
    ({ opContext }: ClientPluginContext) => {
      opContext.headers.Authorization = `Bearer ${config.GITHUB_PERSONAL_ACCESS_TOKEN}`
    },
    ...defaultPlugins(),
  ],
})

const app = createApp(App)
app.component("v-container", BaseContainer)
app.component("v-input", BaseInput)
app.component("v-textarea", BaseTextArea)
app.component("v-button", BaseButton)
app.component("v-badge", BaseBadge)
app.use(router)
app.use(githubGraphqlClient)
app.mount("#app")
