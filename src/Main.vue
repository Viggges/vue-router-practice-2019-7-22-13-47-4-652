<template>
  <div id="Main">
      <h2>欢迎使用TodoList</h2>
      <input type="text" v-model="username">
      <button @click="gotoHome">开始使用</button>
  </div>
</template>

<script>


export default {
  name: "Main",
  components: {
    
  },
  data: function() {
    return {
      username:""
    };
  },
  methods:{
      gotoHome:function(){
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
</style>
