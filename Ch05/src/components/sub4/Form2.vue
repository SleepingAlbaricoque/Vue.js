<template lang="">
  <h4>Form2</h4>
  <form v-on:submit.prevent="submitHandler">
    <!-- action이 아니라 event 처리-->
    <table border="1">
      <tr>
        <td>아이디</td>
        <td><input type="text" v-model="user.uid" /></td>
      </tr>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="user.name" /></td>
      </tr>
      <tr>
        <td>나이</td>
        <td><input type="number" v-model="user.age" /></td>
      </tr>
      <tr>
        <td>주소</td>
        <td>
          <select v-model="user.addr">
            <option>서울</option>
            <option>대전</option>
            <option>대구</option>
            <option>부산</option>
            <option>광주</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colspan="2" align="right">
          <input type="submit" value="전송" />
        </td>
      </tr>
    </table>
  </form>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

// router 생성
const router = new useRouter();

const user = reactive({
  uid: "",
  name: "",
  age: 0,
  addr: "",
});

const submitHandler = () => {
  // router 컴포넌트 이동
  router.push({
    name: "Result2",
    params: { uid: user.uid, name: user.name, age: user.age, addr: user.addr },
  });
};
</script>
<style scoped></style>
