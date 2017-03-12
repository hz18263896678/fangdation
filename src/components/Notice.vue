<template>
    <div class="w main clearfix">
        <div class="fl w780 info">
           公示公告
        </div>
        <HomeRight  show="true"></HomeRight>
    </div>
</template>

<script>
import HomeRight from './HomeRight'
export default {
  name: 'notice',
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


</style>
