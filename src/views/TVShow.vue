<template>
  <div class="page_content tvshow-page">
    <banner></banner>
    <b-container class="pb-4">
      <list-item :groupedMovies="groupedMovies"></list-item>
      <list-item :groupedMovies="groupedMovies"></list-item>
    </b-container>
  </div>
</template>
  
<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";
import { tvService } from '@/services/tv.service';
import Banner from '../components/Banner.vue';
import ListItem from '@/components/ListItem.vue';

export default {
  components: { Banner, ListItem },
  name: "TVShow",
  data() {
    return {
      movies: [],
      groupedMovies: [],
    }
  },
  async created() {
    this.$emit("update:layout", LayoutDefault);
    tvService
      .getTVShowList()
      .then((response) => {
        if (response.success) {
          this.movies = response.data.results
          this.groupedMovies = this.chunkData(this.movies, 6);
        }
        console.log(this.groupedMovies)
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  },
  methods: {
    chunkData(arr, size) {
      const chunkedArray = [];
      for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size));
      }
      return chunkedArray;
    },
  },
}
</script>

<style scoped>
</style>
