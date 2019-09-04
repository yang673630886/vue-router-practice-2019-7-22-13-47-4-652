import VueRouter from 'vue-router'
import Vue from 'vue'
import main from '../components/Main'
import home from '../components/Home'
import myinfo from '../components/MyInfo'
import todolist from '../components/ToDoList'

Vue.use(VueRouter)


const router = new VueRouter({
    routes:
        [
            {
                path: '/main', component: main,
                children: [
                    {
                        path: 'home',
                        component: home,
                        children: [
                            {
                                path: 'todolist',
                                component: todolist
                            }
                        ]
                    },
                    {
                        path: 'myinfo',
                        component: myinfo
                    }
                ]
            }

        ]
})

export default router