import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/components/Authorization/Login";
import Registration from "@/components/Authorization/Registration";
import createEst from "@/views/createEst";
import infoClient from "@/views/InfoClient";
import infoProjectParams from "@/views/InfoProjectParams";
import infoAttributes from "@/views/InfoAttributes"
import estimationLists from "@/views/EstimationLists";
import infoReview from "@/views/InfoReview";
import infoResult from "@/views/InfoResult";
import infoConstructor from "@/views/InfoConstructor";

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => Login
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {layout: 'empty'},
    component: () => Registration
  },
  {
    path: '/createEst',
    name: 'createEst',
    meta: {layout: 'main'},
    component: createEst
  },
  {
    path: '/createEst/infoClient',
    name: 'infoClient',
    meta: {layout: 'main'},
    component: infoClient
  },
  {
    path: '/createEst/infoProjectParams',
    name: 'infoProjectParams',
    meta: {layout: 'main'},
    component: infoProjectParams
  },
  {
    path: '/createEst/infoAttributes',
    name: 'infoAttributes',
    meta: {layout: 'main'},
    component: infoAttributes
  },
  {
    path: '/createEst/infoConstructor',
    name: 'infoConstructor',
    meta: {layout: 'main'},
    component: infoConstructor
  },
  {
    path: '/createEst/infoReview',
    name: 'infoReview',
    meta: {layout: 'main'},
    component: infoReview
  },
  {
    path: '/createEst/infoResult',
    name: 'infoResult',
    meta: {layout: 'main'},
    component: infoResult
  },
  {
    path: '/estList',
    name: 'EstimationLists',
    meta: {layout: 'main'},
    component: estimationLists
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
