<template>
    <div class="w main clearfix">
        <div class="fl w780 notice">
           <h4>公示中心</h4>
           <ul class="list">
              <li v-for="item in list"><a href="#">{{item.title}}</a> <span>{{item.time}}</span></li>
           </ul>
           <div class="pagination">共30篇文章</div>
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
      list:[
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'},
        {title:'重庆拟立法要求子女写信问候老人',time: '2017-01-02'}
      ]
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
.notice h4{
  height:50px;
  line-height:50px;
  font-size: 16px;
  text-align:center;
}
.notice .list{
  overflow:auto;
  margin-top: 10px;
  padding-top: 30px;
  border-top: 1px solid #ccc;
}
.notice .list li{
  font-size:14px;
  line-height:40px;
}
.notice .list li a:hover,.notice .list li:first-child a{
  color:#ff6600;
  text-decoration: underline;
}
.notice .list li span{
  float:right;
}
.notice .pagination{
  padding: 20px 0;
  height:30px;
  line-height:40px;
  font-size:14px;
  text-align:center;
}
</style>
