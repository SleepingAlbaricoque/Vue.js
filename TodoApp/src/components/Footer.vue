<template lang="">
  <footer>
    <button>Clear All</button>
  </footer>
</template>
<script>
// 인스턴스 정의
export default {
  name: "Footer",
  setup() {
    return {};
  },
};
</script>
<style scoped>
footer {
  width: 100%;
  height: auto;
  text-align: center;
}

footer > button {
  width: 100px;
  height: 30px;
  color: #e20303;
}
</style>
