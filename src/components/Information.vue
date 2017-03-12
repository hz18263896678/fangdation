<template>
    <div class="w main clearfix">
        <div class="fl w780 info">
            <h4><b>最新资讯</b></h4>
            <div class="list">
              <div class="item" v-for="item in list">
                <img src="../assets/info.png"/>
                <div>
                  <h5>{{item.title}}</h5>
                  <p>{{item.content}}</p>
                  <p>{{item.time}}</p>
                </div>
              </div>

            </div>

        </div>
        <HomeRight  show="true"></HomeRight>
    </div>
</template>

<script>
import HomeRight from './HomeRight'
export default {
  name: 'information',
  data () {
    return {
      list: [
        {title:'马蔚华连任理事长 马化腾当选副理',time:'2016-04-08 00:41',content:'2017年2月15日，深圳壹基金公益基金会在深圳总部举行了二届七次理事会和三届一次理事会。按照基于慈善法精神和壹基金章程制定的换届选举方案，会议通过投票方式，选举马蔚华、李连杰、马化腾、马云、王石、牛根生、...[详情]'},
        {title:'马蔚华连任理事长 马化腾当选副理',time:'2016-04-08 00:41',content:'2017年2月15日，深圳壹基金公益基金会在深圳总部举行了二届七次理事会和三届一次理事会。按照基于慈善法精神和壹基金章程制定的换届选举方案，会议通过投票方式，选举马蔚华、李连杰、马化腾、马云、王石、牛根生、...[详情]'},
        {title:'马蔚华连任理事长 马化腾当选副理',time:'2016-04-08 00:41',content:'2017年2月15日，深圳壹基金公益基金会在深圳总部举行了二届七次理事会和三届一次理事会。按照基于慈善法精神和壹基金章程制定的换届选举方案，会议通过投票方式，选举马蔚华、李连杰、马化腾、马云、王石、牛根生、...[详情]'},
        {title:'马蔚华连任理事长 马化腾当选副理',time:'2016-04-08 00:41',content:'2017年2月15日，深圳壹基金公益基金会在深圳总部举行了二届七次理事会和三届一次理事会。按照基于慈善法精神和壹基金章程制定的换届选举方案，会议通过投票方式，选举马蔚华、李连杰、马化腾、马云、王石、牛根生、...[详情]'},
      ],
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
.info .list{
  padding-top:30px;
}
.info .item{
  cursor:pointer;
  padding:20px 20px 20px 0;
  overflow:hidden;
  border-top:1px solid #ccc;
}
.info .item:hover{
  background:#f7f7f7;
}
.info .item img{
  float:left;
  margin-right:30px;
}
.info .item h5{
  font-size:16px;
  color:#333;
  line-height:30px;
}
.info .item p{
  color:#666;
  line-height:22px;
}
.info .item div{
  overflow:auto;
}

</style>
