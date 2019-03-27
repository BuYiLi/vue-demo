<template>
    <div>
        <label for="">tilte:</label><span>{{getTitle}}</span>

        <p></p>
        <h4>Mutation</h4>
        <el-button type="primary" @click="setStoreStateTitle">执行mutation</el-button>


        <h4>Action</h4>
        <el-button type="primary" @click="setTitle({title:'action'})">执行Action</el-button>
        <el-button type="primary" @click="asyncAction">执行Action</el-button>



    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import * as types from '@/plugin/store/mutations-type'

export default {
    computed:{
        title(){return this.$store.state.title},
        ...mapGetters([
            'getTitle'
        ])
    },
    methods:{
        ...mapMutations([
            'setStateTitle'
        ]),
        ...mapActions([
            'setTitle'
        ]),
        setStoreStateTitle(){
            this.$store.commit(types.SET_STATE_TITLE, {title: 'store.commit()'})
            // this.setStateTitle({title: 'mapMutations'})
        },
        asyncAction(){
            console.log(this.$store)
        }
    }
}
</script>

