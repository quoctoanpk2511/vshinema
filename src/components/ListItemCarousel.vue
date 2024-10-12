<template>
  <b-row class="pt-4" v-if="carouselMovies">
    <b-col>
      <div class="d-flex">
        <div class="list-item_title-text pl-3">{{ title }}</div>
        <b-form-group class="list-item_radio pl-3" v-if="options">
          <b-form-radio-group v-model="selected" :options="options" button-variant="outline-secondary" size="sm"
            buttons @change="onChangeRadio($event)"></b-form-radio-group>
        </b-form-group>
      </div>
      <b-carousel id="carousel-1" :interval="4000" controls>
        <b-carousel-slide v-for="group in carouselMovies" :key="group.id">
          <template v-slot:img>
            <b-row class="m-0">
              <b-col class="card-content_img" cols="12" md="2" v-for="item in group" :key="item.id">
                <div>
                  <b-card-img :src="imgUrl + item.poster_path" alt=" "></b-card-img>
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
  props: ['carouselMovies', 'title', 'options'],
  data() {
    return {
      selected: 'day',
      imgUrl: process.env.VUE_APP_API_IMAGE_URL,
    };
  },
  methods: {
    onChangeRadio(event) {
      this.$emit('clicked-change-filter', event, this.title);
    }
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

.card-content_img {
  cursor: pointer;
  padding: 30px;
  transition: transform .2s;
  /* Animation */
  margin: 0 auto;
}

.card-content_img:hover {
  transform: scale(1.2);
}

.list-item_title {
  display: flex;
  gap: 20px;
}

.list-item_title-text {
  font-size: 28px;
  color: #FFFFFF;
}

.list-item_radio {
  margin-bottom: 0px !important;
  align-self: center;
}
</style>
