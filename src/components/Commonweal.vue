<template>
    <div class="w main clearfix">
        <div class="fl w780 info">
           公益项目
        </div>
        <HomeRight  show="true"></HomeRight>
    </div>
</template>

<script>
import HomeRight from './HomeRight'
export default {
  name: 'commonweal',
  data () {
    return {
      msg:''
    }
  },
  components:{HomeRight}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    height: auto;
    overflow: hidden;
    margin-bottom: 30px;
    padding-top:30px;
}
.w780{
  width:780px;
}
.info h4{
    height: 40px;
    line-height: 45px;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
}
.info h4 b{
    display: inline-block;
    height: 40px;
    padding: 0 2px;
    position: relative;
}
.info h4 b::before{
    content: ' ';
    position: absolute;
    display: inline-block;
    width:100%;
    left: 0px;
    bottom: -2px;
    height: 2px;
    background: red;
}


</style>
