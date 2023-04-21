<template lang="">
  <footer>
    <button @click="btnClear">Clear All</button>
  </footer>
</template>
<script>
import { useStore } from "vuex";

// 인스턴스 정의
export default {
  name: "Footer",
  setup() {
    const store = useStore();
    const btnClear = () => {
      store.dispatch("clearTodo");
    };

    return { btnClear };
  },
};
</script>
<style scoped>
footer {
  width: 100%;
  height: auto;
  text-align: center;
}

footer > button {
  width: 100px;
  height: 30px;
  color: #e20303;
}
</style>
