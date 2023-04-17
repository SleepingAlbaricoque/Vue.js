<template lang="">
  <h4>Components</h4>

  <div>
    <h4>Icons</h4>
    <v-icon icon="mdi-account-cowboy-hat"></v-icon>
    <v-divider class="my-5"></v-divider>
    <!-- 구분선(divider)을 기준으로 위아래로 5px씩 간격 두기; my-5는 이미 예약된 클래스로, 사용하려면 이름만 갖다 쓰면 됨-->

    <h4>Images</h4>
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <v-img
      :width="300"
      height="200"
      aspect-ratio="16/9"
      cover
      src="https://picsum.photos/200/300"
    ></v-img>
    <v-divider class="my-5"></v-divider>

    <h4>Buttons</h4>
    <v-btn>Button</v-btn>
    <v-btn color="primary"> Button1 </v-btn>
    <v-btn color="secondary"> Button2 </v-btn>
    <v-btn prepend-icon="mdi-vuetify"> Button3 </v-btn>
    <v-btn size="small"> Button4 </v-btn>
    <v-btn block> Button5 </v-btn>
    <v-divider class="my-5"></v-divider>

    <h4>Cards</h4>
    <v-card text="내용입니다"></v-card>

    <v-card
      loading
      class="my-2"
      title="제목입니다"
      subtitle="부제목입니다"
      text="내용입니다"
    >
      <v-card-actions>
        <v-btn>Click me</v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="400">
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        cover
        class="text-white"
      >
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a subtitle</v-card-subtitle>
        </v-card-item>
      </v-img>
      <v-card-text> This is content </v-card-text>
    </v-card>
    <v-divider class="my-5"></v-divider>
  </div>
</template>
<script setup></script>
<style scoped></style>
