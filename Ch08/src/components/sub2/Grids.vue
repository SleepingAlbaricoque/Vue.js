<template lang="">
  <h4>Grids</h4>
  <v-container fluid>
    <!--fluid는 양 옆 여백 없이 화면에 꽉차게 함-->
    <h4>Grid 기본</h4>

    <v-row>
      <v-col cols="12" class="border text-center">12</v-col>
    </v-row>
    <v-row class="mt-4">
      <!-- mt refers to margin-top-->
      <v-col cols="6" class="border text-center">6</v-col>
      <v-col cols="6" class="border text-center">6</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="4" class="border text-center">4</v-col>
      <v-col cols="4" class="border text-center">4</v-col>
      <v-col cols="4" class="border text-center">4</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="3" class="border text-center">3</v-col>
      <v-col cols="3" class="border text-center">3</v-col>
      <v-col cols="3" class="border text-center">3</v-col>
      <v-col cols="3" class="border text-center">3</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="5" class="border text-center">5</v-col>
      <v-col cols="5" class="border text-center">5</v-col>
      <v-col cols="2" class="border text-center">2</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="2" class="border text-center">2</v-col>
      <v-col cols="2" class="border text-center">2</v-col>
      <v-col cols="2" class="border text-center">2</v-col>
      <v-col cols="2" class="border text-center">2</v-col>
      <v-col cols="2" class="border text-center">2</v-col>
      <v-col cols="2" class="border text-center">2</v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
      <v-col cols="1" class="border text-center">1</v-col>
    </v-row>

    <h4>반응형 레이아웃</h4>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="3" class="border text-center"
          >column1</v-col
        >
        <v-col cols="12" md="6" lg="3" class="border text-center"
          >column2</v-col
        >
        <v-col cols="12" md="6" lg="3" class="border text-center"
          >column3</v-col
        >
        <v-col cols="12" md="6" lg="3" class="border text-center"
          >column4</v-col
        >
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup></script>
<style scoped></style>
