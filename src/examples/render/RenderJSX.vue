<script>
import Render from './Render'


export default {
  render(h) {
      return (
          <div>
            <h4>{this.inputVal || 'render-jsx'}</h4>
            <el-input vModel={this.inputVal}></el-input>
            <el-button type='primary' vOn:click={this.tapBut}>Button</el-button>
          </div>
      )
  },
  data(){
      return{
          inputVal:''
      }
  },
  methods:{
      tapBut(){
          console.log(()=> import('./Render'))
          this.$message.warning('tap Button is success!')
      }
  }
};
</script>
