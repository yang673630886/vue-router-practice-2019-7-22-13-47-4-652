import VueRouter from 'vue-router'
import Vue from 'vue'
import main from '../components/Main'
import home from '../components/Home'
import myinfo from '../components/MyInfo'

Vue.use(VueRouter)


const router = new VueRouter({
    routes:
        [
            {
                path: '/main', component: main,
                children: [
                    {
                        path: 'home',
                        component: home
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