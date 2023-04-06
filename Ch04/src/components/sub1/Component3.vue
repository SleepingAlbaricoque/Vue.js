<template lang="">
  <h4>Component3</h4>
  <p>
    이름 : <input type="text" v-model="user.name" /><br />
    나이 : <input type="number" v-model="user.age" /><br />
    <button @click="btnSend">상위 컴포넌트로 전송</button>
  </p>
</template>

<script>
export default {
  name: "Component3",
  setup(props, context) {
    // 파라미터 context로 emit할 수 있음
    // 변수 선언(변수는 기본적으로 반응성이 없지만 객체는 반응성 있음 => 바인딩, 즉, 업데이트가 가능함)
    const user = {
      name: "",
      age: 0,
    };

    const btnSend = () => {
      console.log("name: " + user.name);
      console.log("age: " + user.age);
      // 상위 컴포넌트로 이벤트 발생
      context.emit("myEvent", user);
    };

    return { user, btnSend };
  },
};
</script>

<style scoped></style>
