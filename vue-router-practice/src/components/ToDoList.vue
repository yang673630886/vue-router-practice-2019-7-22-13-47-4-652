<template>
  <div id="app">
    <h1>Jquery To Do List</h1>
    <p>Simple Todo List with adding and filter by diff status.</p>
    <input class="input-text" type="text" name="listInfo" id="listInfo" />
    <button @click="addList">add</button>
    <Item v-for="n in getlistInfo()" v-bind:key="n" v-bind:index="n"></Item>
    <ul id="filters">
      <li>
        <a href="#" data-filter="all">ALL</a>
      </li>
      <li>
        <a href="#" data-filter="active">Active</a>
      </li>
      <li>
        <a href="#" data-filter="complete" v-on:click="clear">Complete</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Item from "./Items";
export default {
  data() {
    return {
      myListObject: {}
    };
  },
  methods: {
    addList() {
      let message = document.getElementById("listInfo").value;
      this.myListObject = {
        info: message,
        type: 0
      };
      this.$store.commit("pushList", this.myListObject);
    }
  },
  computed: {
    getlistInfo() {
      return this.$store.getters.getList(this.index).length;
    }
  }
};
</script>