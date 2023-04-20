<template lang="">
  <header>
    <div>
      <input type="text" v-model="newTodo" placeholder="할 일을 입력하세요" />
      <button v-on:click="btnAddTodo">등록</button>
    </div>
  </header>
</template>
<script>
import { ref } from "vue";

// 인스턴스 정의
export default {
  name: "Header",
  setup(props, context) {
    const newTodo = ref("");

    const btnAddTodo = () => {
      console.log(newTodo);

      if (newTodo.value !== "") {
        const inputValue = newTodo.value && newTodo.value.trim(); // newTodo(사용자 input) 값을 inputValue에 대입하고, newTodo 값 공백 trim
        context.emit("addTodo", inputValue); // emit은 하위 컴포넌트에서 상위 컴포넌트로 이벤트 발생(간접적 전달) <-> props는 직접적으로 상위 컴포넌트의 값을 하위 컴포넌트로 전달

        newTodo.value = ""; // input값 초기화
      }
    };

    return { btnAddTodo, newTodo };
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
}

header > div {
  position: relative;
  width: 100%;
  height: 100%;
}

header > div > input {
  width: 100%;
  height: 100%;
  padding: 6px;
  box-sizing: border-box;
  border: none;
  outline: none;
}

header > div > button {
  width: 40px;
  height: 40px;
  background-color: #44ba81;
  color: #fff;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
