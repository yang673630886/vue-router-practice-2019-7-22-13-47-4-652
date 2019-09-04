<template>
  <div>
    <router-view></router-view>
    <h1>home</h1>
    <button>返回</button>
    <p>姓名：</p>
    <button>我的</button>
    <p>TodoList列表</p>
    <todolist></todolist>
  </div>
</template>

<script>
import todolist from "./ToDoList";
export default {
  components: {
    todolist
  }
};
</script>