<template>
  <v-app>
    <!-- 헤더 -->
    <v-app-bar>
      <v-app-bar-title>로그인</v-app-bar-title>
    </v-app-bar>
    <!-- 메인 -->
    <v-main>
      <v-container>
        <v-card class="mx-auto mt-16" max-width="400">
          <v-card-item>
            <v-card-title>로그인</v-card-title>
          </v-card-item>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="8" class="border">
                  <v-text-field
                    label="아이디"
                    prepend-icon="mdi-account"
                    variant="underlined"
                    hide-details="true"
                    v-model="user.uid"
                  ></v-text-field>
                  <v-text-field
                    label="비밀번호"
                    prepend-icon="mdi-lock"
                    variant="underlined"
                    hide-details="true"
                    v-model="user.pass"
                  ></v-text-field>
                </v-col>
                <v-col cols="4" class="border">
                  <v-btn block height="90" color="primary" @click="btnLogin"
                    >로그인</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="btnRegister">회원가입</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
    <!-- 푸터 -->
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
import { reactive } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const userStore = useStore();

const user = reactive({
  uid: null,
  pass: null,
});

const btnRegister = () => {
  router.push("/user/terms");
};
const btnLogin = () => {
  axios
    .post("/api/user/login", user)
    .then((response) => {
      console.log(response);

      const accessToken = response.data.accessToken; // JWT가 accessToken을 쿠키에 저장
      const user = response.data.user; // 사용자 인증 정보 객체 -> 로컬 저장소는 정보가 계속 남으므로 사용자 정보를 저장하기는 안전하지 않음 => vuex store에 저장하기

      localStorage.setItem("accessToken", accessToken); // 콘솔에서 확인할 수 있는 로컬 저장소에 저장
      userStore.dispatch("setUser", user); // store의 함수 이용해 store에 사용자 인증 정보 저장

      router.push("/list");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
