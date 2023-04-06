<template lang="">
  <h4>NewComponent</h4>
  <p>
    카운터 : {{ count }} <br />
    <button @click="btnCountUp">증가</button>
  </p>
</template>

<script>
export default {
  // instance
  name: "NewComponent",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    btnCountUp: function () {
      this.count++;
    },
  },
  // 컴포넌트 라이프사이클 함수(hook)
  beforeCreate: function () {
    console.log("beforeCreate");
  },
  created: function () {
    console.log("created");
  },
  mounted: function () {
    console.log("mounted");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate");
  },
  updated: function () {
    // change in the state of the component, e.g., when an event occurs
    console.log("updated");
  },
  beforeUnmount: function () {
    // same as beforeDestroyed in ver 2.x
    console.log("beforeUnmount");
  },
  unmounted: function () {
    console.log("unmounted");
  },
};
</script>

<style scoped></style>
