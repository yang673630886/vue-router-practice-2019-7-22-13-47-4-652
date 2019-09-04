<template>
  <div>
    <span>{{index}}</span>
    <span>{{getOneList}}</span>
  </div>
</template>

<script>
export default {
  props: {
    index: Number
  },
  computed: {
    getOneList: function() {
      return this.$store.getters.getOneList(this.index);
    }
  }
};
</script>