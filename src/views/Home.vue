<template>
  <div class="page-content home-page">
    <div class="top-content"></div>
  </div>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";

export default {
  name: "Home",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>

<style scoped>
.top-content {
  background-image: url("@/statics/images/home-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 390px;
}
</style>
