<template>
  <div class="page_content home-page">
    <banner></banner>
    <list-item :groupedMovies="groupedMovies"></list-item>
    <list-item :groupedMovies="groupedMovies"></list-item>
  </div>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";
import Banner from "../components/Banner.vue";
import ListItem from "../components/ListItem.vue";

export default {
  components: { Banner, ListItem },
  name: "Home",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
};
</script>

<style scoped></style>
