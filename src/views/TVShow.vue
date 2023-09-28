<template>
  <div class="page-content tvshow-page">
    <div class="content">
      <list-item :listItem="listItem" />
    </div>
  </div>
</template>
  
<script>
import LayoutDefault from "../layouts/LayoutDefault.vue";
import ListItem from "@/components/ListItem.vue";
import { tvService } from '@/services/tv.service';

export default {
  name: "TVShow",
  data() {
    var listItem = [];
    return {listItem: listItem}
  },
  async created() {
    this.$emit("update:layout", LayoutDefault);
    tvService
      .getTVShowList()
      .then((result) => {
        if (result.success) {
          this.listItem = result.data.results;
        } else {
          console.log('11111: ', result);
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  },
  components: { ListItem },
};
</script>
  
<style scoped>

</style>
