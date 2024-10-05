<template>
  <div class="page_content home-page">
    <banner></banner>
  </div>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";
import Banner from "../components/Banner.vue";
import ListItemCarousel from "../components/ListItemCarousel.vue";

export default {
  components: { Banner, ListItemCarousel },
  name: "Home",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>

<style scoped></style>
