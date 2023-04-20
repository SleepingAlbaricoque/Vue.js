<template lang="">
  <Header v-on:addTodo="addTodoHandler"></Header>
  <Main></Main>
  <Footer></Footer>
</template>
<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { useStore } from "vuex";

// 인스턴스 정의
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  setup() {
    const store = useStore();

    const addTodoHandler = (value) => {
      // header에서 emit할 때 inputValue를 addTodo 함수와 함께 보냄
      alert(value);
      store.dispatch("addTodo", value);
    };
    return { store, addTodoHandler };
  },
};
</script>
<style scoped></style>
