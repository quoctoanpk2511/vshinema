<template>
  <b-row class="pt-5">
    <b-col>
      <div class="list-item_title">Category</div>
      <b-carousel id="carousel-1" :interval="4000" controls>
        <b-carousel-slide v-for="group in  groupedMovies " :key="group.id">
          <template v-slot:img>
            <b-row>
              <b-col cols="12" md="2" v-for="item in  group " :key="item.id">
                <div>
                  <b-card-img :src="imgUrl + item.backdrop_path"></b-card-img>
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
  name: "ListItem",
  props: ['groupedMovies'],
  data() {
    return {
      imgUrl: process.env.VUE_APP_API_IMAGE_URL,
    };
  },
  methods: {
  },
};
</script>
