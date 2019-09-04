import VueRouter from "vue-router";
import Vue from 'vue';
import Main from '../Main.vue'
import Home from '../Home.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Main,
            props:true
        },
        {
            path: "/home/:username",
            component: Home,
            props: true,
           
        },

        {
            path: '/todoList', redirect: '/',
            name: "todoList"
        }

    ]


})