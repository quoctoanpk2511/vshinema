<template>
  <div>
    <li v-for="(item, index) in listItem" v-bind:key="index">
      {{ item.id }}
    </li>
  </div>
</template>

<script>

export default {
  name: "ListItem",
  props: {
    listItem: Array
  },
  data() {
    console.log(this.listItem);
    return {}
  },
  created() {
  },
  methods: {
  },
};
</script>
