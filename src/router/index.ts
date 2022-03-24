import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import AboutPage from "@/views/AboutPage.vue"
import ResumePage from "@/views/ResumePage.vue"
import PortfolioPage from "@/views/PortfolioPage.vue"
import ContactPage from "@/views/ContactPage.vue"

export enum RouteNameConstants {
  ABOUT = "about",
  RESUME = "resume",
  PORTFOLIO = "portfolio",
  CONTACT = "contact",
}

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouteNameConstants.ABOUT,
    component: AboutPage,
    meta: {
      title: "About",
    },
  },
  {
    path: "/resume",
    name: RouteNameConstants.RESUME,
    component: ResumePage,
    meta: {
      title: "Resume",
    },
  },
  {
    path: "/portfolio",
    name: RouteNameConstants.PORTFOLIO,
    component: PortfolioPage,
    meta: {
      title: "Portfolio",
    },
  },
  {
    path: "/contact",
    name: RouteNameConstants.CONTACT,
    component: ContactPage,
    meta: {
      title: "Contact",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: RouteNameConstants.ABOUT },
    },
  ],
})

export default router
