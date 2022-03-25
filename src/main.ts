import "@/assets/scss/app.scss"
import { createApp } from "vue"
import { createClient, defaultPlugins, type ClientPluginContext } from "villus"
import router from "@/router"
import App from "@/App.vue"
import config from "@/utils/config"
import Container from "@/components/base/v-container.vue"
import Input from "@/components/base/v-input.vue"
import TextArea from "@/components/base/v-textarea.vue"
import Button from "@/components/base/v-button.vue"
import Badge from "@/components/base/v-badge.vue"

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
app.component("v-container", Container)
app.component("v-input", Input)
app.component("v-textarea", TextArea)
app.component("v-button", Button)
app.component("v-badge", Badge)
app.use(router)
app.use(githubGraphqlClient)
app.mount("#app")
