<template>
    <keep-alive v-if='route'>
        <template v-if='hasOneShowingChild(route.children, route)'>
            <el-menu-item :index="resolvePath(onlyOneChild.path)">{{resolvePath(onlyOneChild.path)}}</el-menu-item>
        </template>
        <template v-else>
            <el-submenu :index="resolvePath(route.path)">
              <template slot="title">
                  <span>{{resolvePath(route.path)}}</span>
              </template>
              <navbar-item
                v-for="item in route.children"
                :key="item.path"
                :route="item"
                :base-path="resolvePath(route.path)"
              ></navbar-item>
            </el-submenu>
        </template>
    </keep-alive>
</template>

<script>
import path from 'path'

export default {
    name:'NavbarItem',
    data(){
        this.onlyOneChild = null
        return{}
    },
    props:{
        route: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    methods:{
        hasOneShowingChild(children = [], parent){
            let showingChild = children.filter(item => {
                this.onlyOneChild = item
                return true
            })

            if(showingChild.length === 1){
                return true
            }

            if(showingChild.length === 0){
                this.onlyOneChild = parent
                return true
            }

            return false
        },
        resolvePath(routePath){
            return path.resolve(this.basePath, routePath)
        }
    }
}
</script>

<style>
/* .menu-item-wrapper{
    display: inline
} */
</style>

