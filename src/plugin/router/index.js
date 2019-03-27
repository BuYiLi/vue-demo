import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/Layout'
import Cookie from '@/examples/cookie/Cookie'
import JSCookie from '@/examples/js-cookie/JSCookie'
import VuexStore from '@/examples/store/VuexStore'

// import ViewMain from '@/views/view-main/ViewMain'

const ViewMain = () => import('@/views/view-main/ViewMain')



const examplesRoutes = [
    {
        path:'/examples',
        component: Layout,
        children: [
            {
                path: 'render-jsx',
                component: ()=> import('@/examples/render/RenderJSX')
            },
            {
                path: 'render',
                component: ()=> import('@/examples/render/Render')
            }
        ]
    }
]

export const navRoutes = [
    {
        path: '/js-cookie',
        component: Layout,
        redirect: '/js-cookie/index',
        children:[{
            path: 'index',
            component: ViewMain
        },{
            path: 'hell0',
            component: ViewMain

        }]
    },
    {
        path:'/vue-cookie',
        component: Layout,
        redirect: '/vue-cookie/index',
        children:[{
            path: 'index',
            component: ViewMain
        }]
    },
    {
        path: '/vuex-store',
        component: Layout,
        redirect: '/vuex-store/index',
        children:[{
            path: 'index',
            component: ViewMain
        }]
    },
    ...examplesRoutes
]

export const routes = [
    ...navRoutes,
    {
        path: '',
        redirect: '/vuex-store'
    }
]

export default new Router({
    routes
})