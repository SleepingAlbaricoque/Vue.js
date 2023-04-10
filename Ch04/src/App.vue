<template>
  <h3>Ch04 Composition API 실습</h3>

  <h4>1)setup</h4>
  <Component1></Component1>
  <hr />

  <h4>2)Reactivity</h4>
  <MyComponent1></MyComponent1>
  <hr />

  <h4>3)Lifecycle Hooks</h4>
  <HooksComponent v-if="isShow"></HooksComponent>
  <button @click="btnToggle">component {{ status }}</button>
  <hr />

  <h4>4)Dependency Injection</h4>
  <DIComponent1></DIComponent1>
</template>

<script>
/**
 * 날짜 : 2023.04.06
 * 이름 : 조수빈
 * 내용 : Ch04 Composition API 실습
 *
 * Vue3 Composition API
 *  - 기존 Options API를 대체 및 통합한 API
 *  - 컴포넌트의 로직을 유연하고 가독성있게 처리할 수 있는 함수 기반 API
 *
 */
import Component1 from "./components/sub1/Component1.vue";
import MyComponent1 from "./components/sub2/MyComponent1.vue";
import HooksComponent from "./components/sub3/HooksComponent.vue";
import { ref, provide, reactive } from "vue";
import DIComponent1 from "./sub4/DIComponent1.vue";

export default {
  name: "App",
  components: { Component1, MyComponent1, HooksComponent, DIComponent1 },
  setup() {
    const isShow = ref(true);
    const status = ref("삭제");

    const user = reactive({
      name: "김유신",
      age: 23,
      addr: "김해시",
    });

    // App 컴포넌트 하위 모든 컴포넌트에서 user 참조 가능(user를 다른 컴포넌트에서 inject해서 사용 가능)
    provide("user", user);

    function btnToggle() {
      if (isShow.value) {
        isShow.value = false;
        status.value = "삭제";
      } else {
        isShow.value = true;
        status.value = "생성";
      }
    }

    return { isShow, status, btnToggle };
  },
};
</script>
