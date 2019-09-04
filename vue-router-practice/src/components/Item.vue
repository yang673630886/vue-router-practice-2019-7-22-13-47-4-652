<template>
<div>
  <span>{{index}}</span>
  <span>{{getOneList}}</span>
</div>
</template>

<script>
export default {
    props:{
        index:Number
    },
    computed:{
        getOneList(){
            return this.$store.commit.getOneList(this.index);
        }
    }
}
</script>