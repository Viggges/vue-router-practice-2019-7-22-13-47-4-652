<template>
  <div id="Home">
    <button id="back" @click="gotoBack">返回</button>
    <label id="username">{{username}}</label>
    <CreateForm></CreateForm>
    <TodoList></TodoList>
    <TodoListFilter></TodoListFilter>
  </div>
</template>

<script>
import CreateForm from './components/CreateForm'
import TodoList from './components/TodoList'
import TodoListFilter from './components/TodoListFilter'

export default {
  name: "Home",
  components: {
    CreateForm,
    TodoList,
    TodoListFilter
  },
  data: function() {
    return {

    };
  },
  props:['username'],
  methods:{
      gotoBack:function(){
          this.$router.push('/home/'+this.username);
      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#back{
    margin-left: 30px;
}
#username{
    margin-right: 30px;
}

</style>
