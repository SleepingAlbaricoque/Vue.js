/**
 * Router 인스턴스 정의
 */

import { createRouter, createWebHistory } from "vue-router";
import AxiosComponent from "../components/sub1/AxiosComponent.vue";
import RestComponent from "../components/sub2/RestComponent.vue";
import JWTComponent from "../components/sub3/JWTComponent.vue";
import LoginForm from "../components/sub3/LoginForm.vue";
import LoginSuccess from "../components/sub3/LoginSuccess.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/axios", name: "AxiosComponent", component: AxiosComponent },
    { path: "/rest", name: "RestComponent", component: RestComponent },
    {
      path: "/jwt",
      name: "JWTComponent",
      component: JWTComponent,
      children: [
        { path: "", component: LoginForm }, //JWTComponent 화면에서 호출하면 LoginForm 컴포넌트 내용이 뜨는 것
        { path: "loginForm", component: LoginForm },
        { path: "loginSuccess", component: LoginSuccess },
      ],
    },
  ],
});

// router 내보내기 -> main.js 등록
export default router;
