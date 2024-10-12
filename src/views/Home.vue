<template>
  <div class="page_content home-page">
    <banner></banner>
    <b-container class="pb-4 pt-3">
      <list-item-carousel :carouselMovies="tvTrend" :options="options" @clicked-change-filter="clickedChangeFilter"
        title="Trending TV Shows"></list-item-carousel>
      <list-item-carousel :carouselMovies="movieTrend" :options="options" @clicked-change-filter="clickedChangeFilter"
        title="Trending Movies"></list-item-carousel>
    </b-container>
  </div>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";
import Banner from "../components/Banner.vue";
import ListItemCarousel from "../components/ListItemCarousel.vue";
import { movieService, utils } from '@/services';

export default {
  components: { Banner, ListItemCarousel },
  name: "Home",
  data() {
    return {
      tvTrend: [],
      movieTrend: [],
      options: [
        {
          text: "Today",
          value: "day"
        },
        {
          text: "This Week",
          value: "week"
        },
      ],
      errorMessage: "",
    }
  },
  created() {
    this.$emit("update:layout", LayoutDefault);
    try {
      movieService
        .getTVTrend('day')
        .then((response) => {
          if (response.success) {
            this.tvTrend = utils.chunkData(response.data.results, 18, 6);
          } else {
            throw Exception(response.errorMessage);
          }
        });
      movieService
        .getMovieTrend('day')
        .then((response) => {
          if (response.success) {
            this.movieTrend = utils.chunkData(response.data.results, 18, 6);
          } else {
            throw Exception(response.errorMessage);
          }
        });
    } catch (error) {
      console.log("Error: " + error);
    }
  },
  methods: {
    clickedChangeFilter(periodTime, title) {
      try {
        if (title == "Trending TV Shows") {
          movieService
            .getTVTrend(periodTime)
            .then((response) => {
              if (response.success) {
                this.tvTrend = utils.chunkData(response.data.results, 18, 6);
              } else {
                throw Exception(response.errorMessage);
              }
            });
        } else {
          movieService
            .getMovieTrend(periodTime)
            .then((response) => {
              if (response.success) {
                this.movieTrend = utils.chunkData(response.data.results, 18, 6);
              } else {
                throw Exception(response.errorMessage);
              }
            });
        }
      } catch (error) {
        console.log("Error: " + error);
      }
    }
  },
};
</script>

<style scoped></style>
