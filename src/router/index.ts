import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import AboutPage from "@/views/AboutPage.vue"

export enum RouteNameConstants {
  LANDING = "landing",
  ABOUT = "about",
  RESUME = "resume",
  PORTFOLIO = "portfolio",
  CONTACT = "contact",
}

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouteNameConstants.LANDING,
    component: { template: '<div></div>' },
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: RouteNameConstants.ABOUT,
    component: AboutPage,
    meta: {
      title: "About",
    },
  },
  {
    path: "/resume",
    name: RouteNameConstants.RESUME,
    component: AboutPage,
    meta: {
      title: "Resume",
    },
  },
  {
    path: "/portfolio",
    name: RouteNameConstants.PORTFOLIO,
    component: AboutPage,
    meta: {
      title: "Portfolio",
    },
  },
  {
    path: "/contact",
    name: RouteNameConstants.CONTACT,
    component: AboutPage,
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
      redirect: { name: RouteNameConstants.LANDING },
    },
  ],
})

export default router
