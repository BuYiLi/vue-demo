<template>
    <el-container>
        <el-header>
            <el-menu mode="horizontal" :default-active="navNameActive">
                <template v-for="navName in navNames">
                    <el-menu-item index="" :key="navName">{{$t('navbar.'+navName)}}</el-menu-item>
                </template>
            </el-menu>

            
        </el-header>
        <el-container>
        <el-aside>
            <navbar/>
        </el-aside>
        <el-main>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-main>
        </el-container>
        <!-- <el-footer></el-footer> -->
    </el-container>
</template>

<script>
import zhCN from '@/plugin/i18n/lang/zh-CN'
import Navbar from '@/views/navbar/Navbar'

import path from 'path'

export default {
    data(){
        return{
            navNames: [],
            navNameActive: ''
        }
    },
    components:{Navbar},
    methods:{
        setNavbar(){
            let keys = []
            for(let key in zhCN.navbar){
                keys.push(key)
            }
            this.navNames = keys
        }
    },
    created(){
        this.setNavbar()
        // this.navNameActive = this.$route
        console.log(this.$route)
        console.log(path)

        this.$store.commit('setRoutesNav')
    }
}
</script>

