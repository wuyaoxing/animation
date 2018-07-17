import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

import TRANSITION_INSTANCE from '@/transition'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    console.log(TRANSITION_INSTANCE)
    if (to.meta.transition) {
        TRANSITION_INSTANCE[to.meta.transition].register().then(() => next())
    } else {
        next()
    }
})

router.afterEach((to, from) => {
    if (to.meta.transition) {
        TRANSITION_INSTANCE[to.meta.transition].unregister()
    }
})

export default router