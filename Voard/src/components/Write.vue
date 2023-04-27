<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글보기</v-app-bar-title>
      <p>
        {{ user?.nick }}님 반갑습니다
        <v-btn>로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto">
          <v-text-field
            label="제목입력"
            variant="outlined"
            v-model="article.title"
          ></v-text-field>
          <v-textarea
            label="내용입력"
            variant="outlined"
            rows="12"
            v-model="article.content"
          ></v-textarea>
          <v-file-input label="파일첨부" variant="outlined"></v-file-input>
          <v-sheet class="text-right">
            <v-btn @click="btnList">취소</v-btn>
            <v-btn color="primary" @click="btnWrite" class="ml-2">등록</v-btn>
          </v-sheet>
        </v-sheet>
        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-toolbar color="primary" title="글 등록 확인"></v-toolbar>
            <v-card-text> 작성한 글이 등록되었습니다 </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="dialog = false">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
      <!--
          <v-table class="view">
            <tbody>
              <tr>
                <td class="border-right text-center">제목</td>
                <td colspan="3">제목입니다</td>
              </tr>
              <tr>
                <td class="border-right text-center" width="10%">작성자</td>
                <td class="border-right" width="40%">김수한무</td>
                <td class="border-right text-center" width="10%">작성일자</td>
                <td width="40%">23.04.25</td>
              </tr>
              <tr>
                <td colspan="4">
                  <v-textarea
                    class="pt-6 content"
                    variant="solo"
                    readonly
                    rows="10"
                    no-resize
                  ></v-textarea>
                </td>
              </tr>
            </tbody>
          </v-table>
          -->
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>
<script setup>
import axios from "axios";
import { reactive } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const userStore = useStore();

const user = computed(() => userStore.getters.user);

const article = reactive({
  title: null,
  content: null,
  uid: null,
});

const dialog = ref(false);

const btnCloseDlg = () => {
  dialog.value = false;
  router.push("list");
};

const btnList = () => {
  router.push("/list");
};
const btnModify = () => {
  router.push("/modify");
};

const btnWrite = () => {
  article.uid = userStore.getters.user.uid;

  axios
    .post("http://52.79.139.8:8484/write", article)
    .then((response) => {
      console.log(response);

      if (response.data > 0) {
        dialog.value = true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style>
/*
.view {
  border-collapse: collapse !important;
  border-spacing: 0 !important;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.content {
  box-shadow: none !important;
}
.border-right {
  border-right: 1px solid #e0e0e0;
}*/

.v-field--variant-solo {
  box-shadow: none !important;
}
</style>
