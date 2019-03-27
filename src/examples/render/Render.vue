<script>
export default {
    render(h){
        var self = this
        return h(
            'div',

            [
                h('h4', self.inputVal || 'placeholder'),
                // el-input -----start
                h('el-input', {
                    props:{
                        value: self.inputVal
                    },
                    nativeOn:{
                        input: function(event){
                            self.$emit('input', event.target.value)
                        }
                    },
                    on:{
                        input: function(val){
                            self.inputVal = val
                        }
                    }
                }),
                // el-input ----end
                h('el-button',{
                    props:{
                        type: 'primary'
                    },
                    on:{
                        click: self.tapBut
                    }
                },
                'Button'
                )
            ]
        )
    },
    data(){
        return{
            inputVal: ''
        }
    },
    methods:{
        tapBut(){
          this.$message.warning('tap Button is success!')
          this.$router.push('/examples/render-jsx')
      }
    }
}
</script>
