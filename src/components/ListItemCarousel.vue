<template>
  <b-row class="pt-5">
    <b-col>
      <div class="list-item_title pb-2">{{ title }}</div>
      <b-carousel id="carousel-1" :interval="4000" controls>
        <b-carousel-slide v-for="group in carouselMovies" :key="group.id">
          <template v-slot:img>
            <b-row>
              <b-col cols="12" md="2" v-for="item in group" :key="item.id">
                <div>
                  <b-card-img :src="imgUrl + item.backdrop_path" alt=" "></b-card-img>
                </div>
              </b-col>
            </b-row> 
          </template>
        </b-carousel-slide>
      </b-carousel>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: "ListItemCarousel",
  props: ['carouselMovies', 'title'],
  data() {
    return {
      imgUrl: process.env.VUE_APP_API_IMAGE_URL,
    };
  },
  methods: {
  },
};
</script>

<style>
.carousel-control-prev {
  left: -55px !important;
  width: 5% !important;
}

.carousel-control-next {
  right: -55px !important;
  width: 5% !important;
}
</style>
