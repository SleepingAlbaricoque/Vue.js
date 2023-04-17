<template lang="">
  <v-app>
    <v-app-bar app>Layout 실습</v-app-bar>
    <v-navigation-drawer>메뉴 사이드</v-navigation-drawer>
    <v-main>
      <v-container>내용</v-container>
    </v-main>
    <v-footer app>푸터내용</v-footer>
    <!-- app 속성 안쓰면 푸터가 모바일 사이즈에서만 보임; app 속성으로 고정-->
  </v-app>
</template>
<script setup></script>
<style scoped></style>
