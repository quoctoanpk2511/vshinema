<template>
  <div class="page_content search-page">
    <b-container class="pb-4 pt-3">
      <search-bar @clicked-search="clickedSearch"></search-bar>
      <list-item :movies="searchMovies" :searchKey="searchKey"></list-item>
    </b-container>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import ListItem from "../components/ListItem.vue";
import LayoutDefault from "../layouts/LayoutDefault.vue";
import { movieService } from "@/services";

export default {
  components: { ListItem, SearchBar },
  name: "Search",
  data() {
    return {
      searchMovies: [],
      searchKey: this.$route.query.keyword,
    }
  },
  created() {
    this.$emit("update:layout", LayoutDefault);
    this.search(this.searchKey);
  },
  methods: {
    search(keyword) {
      try {
        movieService
          .searchMovieByKeyword(keyword)
          .then((response) => {
            if (response.success) {
              this.searchMovies = response.data.results;
            } else {
              throw Exception(response.errorMessage);
            }
          });
      } catch (error) {
        console.log("Error: " + error);
      }
    },
    clickedSearch(keyword) {
      this.searchKey = keyword;
      this.search(this.searchKey);
    },
  },
}
</script>

<style></style>