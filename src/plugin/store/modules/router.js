import { navRoutes, routes } from '@/plugin/router'


const router = {
    // namespaced: true,
    state:{
        routesNav: []
    },
    getters:{
        routesNav(state){
            return state.routesNav
        }
    },
    mutations:{
        setRoutesNav(state, payload){
            state.routesNav = navRoutes
        }
    }
}

export default router