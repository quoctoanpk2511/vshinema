<template>
  <div class="page_content tvseries-page">
    <banner></banner>
    <b-container class="pb-4">
      <list-item-carousel :carouselMovies="tvTrendDay" title="Today Trending"></list-item-carousel>
      <!-- <list-item-carousel :carouselMovies="tvOnTheAir" title="On The Air"></list-item-carousel> -->
      <list-item-carousel :carouselMovies="tvPopular" title="What's Popular"></list-item-carousel>
      <list-item-carousel :carouselMovies="tvTopRated" title="Top Rated"></list-item-carousel>
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
  name: "TVSeries",
  data() {
    return {
      tvTrendDay: [],
      tvOnTheAir: [],
      tvPopular: [],
      tvTopRated: [],
      errorMessage: "",
    }
  },
  async created() {
    this.$emit("update:layout", LayoutDefault);
    try {
      movieService
        .getTVTrendDay()
        .then((response) => {
          if (response.success) {
            this.tvTrendDay = utils.chunkData(response.data.results, 18, 6);
          } else {
            throw Exception(response.errorMessage);
          }
        });
      movieService
        .getTVOnTheAir()
        .then((response) => {
          if (response.success) {
            this.tvOnTheAir = utils.chunkData(response.data.results, 18, 6);
          } else {
            throw Exception(response.errorMessage);
          }
        });
      movieService
        .getTVPopular()
        .then((response) => {
          if (response.success) {
            this.tvPopular = utils.chunkData(response.data.results, 18, 6);
          } else {
            throw Exception(response.errorMessage);
          }
        });
      movieService
        .getTVTopRated()
        .then((response) => {
          if (response.success) {
            this.tvTopRated = utils.chunkData(response.data.results, 18, 6);
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
