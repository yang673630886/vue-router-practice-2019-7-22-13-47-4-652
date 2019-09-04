import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)


const router = new VueRouter({
    routes:
        [
            {
                path: '/main', component: play,
                children: [
                    {
                        path: 'home',
                        component: LOL
                    },
                    {
                        path: 'myinfo',
                        component: Java
                    }
                ]
            }

        ]
})

export default router