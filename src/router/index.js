import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Foo from '@/components/Foo'


const bar = {
    render:function(h){
        console.log(this)
        return h('div',{class:'hell'},[
            'hello------',
            h('router-view')
        ])
    }
}

const routes = [
    {
        path: '',
        component: bar,
        children:[
            {path:'foo',component:Foo}
        ]
    }
]

export default new Router({
    routes
})