<template>
  <div class="page_content movies-page">
    <banner></banner>
    <b-container class="pb-4">
      <list-item-carousel :carouselMovies="movieTrendDay" title="Today Trending"></list-item-carousel>
      <list-item-carousel :carouselMovies="movieNowPlaying" title="Upcoming"></list-item-carousel>
      <list-item-carousel :carouselMovies="moviePopular" title="What's Popular"></list-item-carousel>
      <list-item-carousel :carouselMovies="movieTopRated" title="Top Rated"></list-item-carousel>
    </b-container>
  </div>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";
import Banner from '../components/Banner.vue';
import ListItemCarousel from '@/components/ListItemCarousel.vue';
import { movieService, utils } from '@/services';

export default {
  components: { Banner, ListItemCarousel },
  name: "Movies",
  data() {
    return {
      movieTrendDay: [],
      movieNowPlaying: [],
      moviePopular: [],
      movieTopRated: [],
      errorMessage: "",
    }
  },
  async created() {
    this.$emit("update:layout", LayoutDefault);
    try {
      movieService
        .getMovieTrendDay()
        .then((response) => {
          if (response.success) {
            this.movieTrendDay = utils.chunkData(response.data.results, 18, 6);
          } else {
            throw Exception(response.errorMessage);
          }
        });
      movieService
        .getMovieNowPlaying()
        .then((response) => {
          if (response.success) {
            this.movieNowPlaying = utils.chunkData(response.data.results, 18, 6);
          } else {
            throw Exception(response.errorMessage);
          }
        });
      movieService
        .getMoviePopular()
        .then((response) => {
          if (response.success) {
            this.moviePopular = utils.chunkData(response.data.results, 18, 6);
          } else {
            throw Exception(response.errorMessage);
          }
        });
      movieService
        .getMovieTopRated()
        .then((response) => {
          if (response.success) {
            this.movieTopRated = utils.chunkData(response.data.results, 18, 6);
          } else {
            throw Exception(response.errorMessage);
          }
        });
    } catch (error) {
      console.log("Error: " + error);
    }
  },
  methods: {
  },
}
</script>

<style scoped></style>
