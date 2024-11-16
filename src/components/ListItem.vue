<template>
  <b-row class="pt-4" align-h="center" v-if="movies.length !== 0">
    <!-- <b-col lg="4" md="4">
      <b-card bg-variant="light">
        <b-form-group label="Street:" label-for="nested-street" label-cols-sm="3" label-align-sm="right">
          <b-form-input id="nested-street"></b-form-input>
        </b-form-group>
        <b-form-group label="City:" label-for="nested-city" label-cols-sm="3" label-align-sm="right">
          <b-form-input id="nested-city"></b-form-input>
        </b-form-group>
        <b-form-group label="State:" label-for="nested-state" label-cols-sm="3" label-align-sm="right">
          <b-form-input id="nested-state"></b-form-input>
        </b-form-group>
      </b-card>
    </b-col> -->
    <b-col lg="10" md="10">
      <b-row class="pb-4" v-for="movie in movies" :key="movie.id">
        <b-card no-body class="w-100 overflow-hidden card-content">
          <b-row class="card-content_row" no-gutters>
            <b-col md="2" class="bg-poster">
              <b-card-img :src="imgUrl + movie.poster_path" class="rounded-0" alt=""></b-card-img>
            </b-col>
            <b-col md="10">
              <b-card-body>
                <b-card-title>{{ movie.title }}</b-card-title>
                <b-card-text class="card-content_text">{{ movie.overview }}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
    </b-col>
  </b-row>
  <b-row v-else align-h="center">
    <div class="fs-5 pt-4">Your search "{{ searchKey }}" did not match any results.</div>
  </b-row>
</template>

<script>
export default {
  name: "ListItem",
  props: ['movies', "searchKey"],
  data() {
    return {
      imgUrl: process.env.VUE_APP_API_IMAGE_URL,
    };
  },
  methods: {
  },
}
</script>

<style>
.card-content {
  border: none;
}

.card-content_row {
  height: 237px;
}

.card-content_text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.bg-poster {
  background-image: url(../statics/images/no-img.svg);
  min-height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #dbdbdb;
  background-size: 50%;
}
</style>