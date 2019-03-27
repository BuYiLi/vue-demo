import Vue from 'vue'
import Vuex from 'vuex'

import {GET_STATE_TITLE, SET_STATE_TITLE } from './mutations-type'
import router from './modules/router'
import { moduleB } from './modules/moduleB'

import { navRoutes, routes } from '@/plugin/router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        title: 'hello',
        name: 'buyi'
    },
    getters:{
        getTitle: (state, getters)=> state.title
    },
    mutations:{
        [GET_STATE_TITLE](state, payload){
            return state.title
        },
        [SET_STATE_TITLE](state, payload){
            state.title = payload.title
        }
    },
    actions:{
        setTitle({commit, state, getters}, payload){
            commit(SET_STATE_TITLE, payload)
        }
    },
    modules:{
        router,
        b: moduleB
    }
})

export default store