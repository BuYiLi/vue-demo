<template>
    <div>
        <h4>{{ routePath }}</h4>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        routePath(){
            return this.$route.path
        }
    }
}
</script>
