<script>
import path from 'path'

export default {
    name:'NavbarItemRender',
    render:function(h){
        let route = this.route
        // 判断props 中传入的route 是否存在
        if(!route) return null

        // 判断route 是否没有或只有一个children
        if(this.hasOneShowingChild(route.children, route)){
            // 没有或只有一个children
            let routePath = this.resolvePath(this.onlyOneChild.path)
            return (
                <el-menu-item index={routePath} >{routePath}</el-menu-item>
            )
        }
        else{
            // 不止一个children
            let routePath = this.resolvePath(route.path)
            return (
                <el-submenu index={routePath}>
                    <template slot='title'>{routePath}</template>
                    {
                        route.children.map((el)=>{
                            return <navbar-item-render route={el} basePath={routePath}></navbar-item-render>
                        })
                    }
                </el-submenu>
            )
        }
    },
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

