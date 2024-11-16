<template>
  <b-row align-h="center" class="pt-4">
    <form class="w-50" @submit.prevent="submitSearch">
      <!-- <b-form-input class="sufs-4 search-form-input" v-model="keyword">
        <label>
          <b-icon icon="search"></b-icon> Search
        </label>
      </b-form-input> -->
      <!-- <b-input-group-prepend class="search-form-icon" is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend> -->
      <label class="search-label">
        <b-icon icon="search" class="search-icon ml-4"></b-icon>
        <b-form-input class="search-input fs-3 pl-5" v-model="keyword"></b-form-input>
      </label>
    </form>
  </b-row>
</template>

<script>
export default {
  name: "SearchBar",
  props: ['searchKey'],
  data() {
    return {
      keyword: this.$route.query.keyword,
    }
  },
  methods: {
    submitSearch() {
      if (this.$router.history.current.path == "/search") {
        this.$router.push("/search?keyword=" + this.keyword).catch(() => { });
        this.$emit('clicked-search', this.keyword);
      } else {
        this.$router.push("/search?keyword=" + this.keyword);
      }
    }
  }
}
</script>

<style>
.search-label {
  position: relative;
  display: block;
}

.search-icon {
  background-color: transparent;
  color: #FFFFFF;
  position: absolute;
  height: 100%;
}

.search-input {
  height: 60px !important;
  background-color: transparent !important;
  border: 2px solid #FFFFFF !important;
  border-radius: 40px !important;
}

.search-input:focus {
  background-color: transparent !important;
  color: #FFFFFF !important;
  border-color: #F76F73 !important;
}
</style>