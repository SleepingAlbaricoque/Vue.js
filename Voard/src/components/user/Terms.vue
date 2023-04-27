<template>
  <v-app>
    <!-- 헤더 -->
    <v-app-bar>
      <v-app-bar-title>약관</v-app-bar-title>
    </v-app-bar>
    <!-- 메인 -->
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-16">
          <v-textarea
            label="이용약관"
            variant="outlined"
            rows="10"
            hide-details="true"
            v-model="state.data.terms"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다"
            v-model="state.isCheck1"
          ></v-checkbox>
          <v-textarea
            label="개인정보 취급방침"
            variant="outlined"
            rows="10"
            hide-details="true"
            v-model="state.data.privacy"
          ></v-textarea>
          <v-checkbox
            class="d-flex justify-end"
            label="동의합니다"
            v-model="state.isCheck2"
          ></v-checkbox>
        </v-sheet>
        <v-sheet max-width="800" class="mx-auto text-center">
          <v-btn @click="btnCancel">취소</v-btn>
          <v-btn class="ml-2" color="primary" @click="btnRegister">다음</v-btn>
        </v-sheet>
      </v-container>
    </v-main>
    <!-- 푸터 -->
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { onBeforeMount } from "vue";

const router = useRouter();

const state = reactive({
  //terms: null,
  //privacy: null,
  data: {},
  isCheck1: false,
  isCheck2: false,
});

const btnCancel = () => {
  router.push("/user/login");
};
const btnRegister = () => {
  if (state.isCheck1 && state.isCheck2) {
    router.push("/user/register");
  } else {
    alert("동의 체크 하셔야합니다");
  }
};

onBeforeMount(() => {
  axios
    .get("http://52.79.139.8:8484/user/terms")
    .then((response) => {
      console.log(response);
      state.data = response.data;
      //data.terms = response.data.terms;
      //data.privacy = response.data.privacy;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
