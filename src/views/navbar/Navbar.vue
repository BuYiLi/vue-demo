<template>
    <el-menu 
    mode="vertical"
    :default-active="$route.path"
    @select="menuSelectHandler"
    >
        <navbar-item v-for="item in routesNav" :key="item.path" :route='item' :base-path='item.path'/>
        <!-- <navbar-item-render v-for="item in routesNav" :key="item.path" :route='item' :base-path='item.path'/> -->
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

import NavbarItem from './components/NavbarItem'
import NavbarItemRender from './components/NavbarItemRender'

export default {
    components:{NavbarItem, NavbarItemRender},
    computed:{
        ...mapGetters(['routesNav'])
    },
    methods:{
        menuSelectHandler(index, indexPath){
            if(!this.$router) this.$message.warning("vue router is not used!")
            this.$router.push(index)
        }
    }
}
</script>
