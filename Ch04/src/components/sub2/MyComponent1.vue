<template lang="">
  <h4>MyComponent1</h4>
  <p>
    message: {{ message }}
    <button @click="changeMessage">수정</button>
  </p>

  <p>
    count : {{ count }}<br />
    <button @click="btnCountUp">증가</button>
  </p>

  <p>
    name: {{ user.name }}<br />
    age: {{ user.age }}<br />
    addr: {{ user.addr }}
    <button @click="changeUser">수정</button>
  </p>

  <p>신라사람</p>
  <ul>
    <li v-for="person in sillaPerson">{{ person.name }}</li>
  </ul>
  <p>조선사람</p>
  <ul>
    <li v-for="person in joseonPerson">{{ person.name }}</li>
  </ul>

  <p>
    result : {{ result }}<br />
    result2x: {{ result2x }}
    <button @click="btnIncrement">증가</button>
  </p>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";

export default {
  name: "MyComponent1",
  setup() {
    // 변수 선언(반응성을 갖는 상태값)
    // ref()는 기본 타입 데이터를 반응형으로 처리하는 API
    // reactive는 참조타입(객체)를 반응형으로 처리하는 API
    const message = ref("hello");
    const count = ref(0);
    const user = reactive({
      name: "홍길동",
      age: 21,
      addr: "부산",
    });
    const users = reactive([
      { id: 1, name: "김유신" },
      { id: 2, name: "김춘추" },
      { id: 3, name: "장보고" },
      { id: 4, name: "이순신" },
      { id: 5, name: "정약용" },
    ]);

    const result = ref(10);

    // 함수 정의
    function changeMessage() {
      // ref 반응형 변수의 값 참조는 value
      message.value = "welcome";
    }

    const btnCountUp = function () {
      count.value++;
    };

    const changeUser = () => {
      user.name = "김유신";
      user.age = 24;
      user.addr = "김해시";
    };

    const btnIncrement = function () {
      result.value++;
    };

    const result2x = computed(() => {
      return result.value * 2;
    });

    // computed API 람다식
    const sillaPerson = computed(() => {
      return users.filter((user) => {
        return user.id <= 3;
      });
    });

    const joseonPerson = computed(() => users.filter((user) => user.id > 3)); // 람다식

    // watch API
    watch(result, (current, prev) => {
      console.log("이전값: " + prev);
      console.log("현재값: " + current);
      // watch는 원래 리턴하지 않음
    });

    return {
      message,
      count,
      user,
      changeMessage,
      btnCountUp,
      changeUser,
      users,
      sillaPerson,
      joseonPerson,
      result,
      btnIncrement,
      result2x,
    };
  },
};
</script>

<style scoped></style>
