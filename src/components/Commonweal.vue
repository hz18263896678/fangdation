<template>
    <div class="w main clearfix">
        <div class="fl w780 commonweal">
           <div class="top">
              <img src="../assets/gongyi.gif" />
              <div>
                 <h5>关爱贫困妇女 传递邮包传递爱</h5>
                 <p>
                  在你我生活的城市中，人们大都过上了幸福美好和安逸的生活；而在贫困地区，母亲们的牙刷用了再用，刷毛磨光了不舍得更换；穿着多年甚至十多年的破旧衣服，舍不得再添置一件新衣裳；往往因为小伤口，没有药品消炎杀菌而引发了更大的感染和疾病，甚至危及到她们的生命。不是她们不讲卫生，不是舍不得再添置一件新衣裳；往往因为小伤口，没有药品消炎杀菌而引发了更大的感染和疾病，甚至危及到她们的生命。不是她们不讲卫生，不是
                  ... <a href="#">[查看详情]</a></p>
              </div>
           </div>
          <div class="story">
              <h5>过往故事</h5>
              <div>
                <figure>
                  <img src="../assets/story1.gif" />
                  <figcaption>孤儿保障大行动</figcaption>
                </figure>
                <figure>
                  <img src="../assets/story2.gif" />
                  <figcaption>博爱助学筹备计划</figcaption>
                </figure>
                <figure>
                  <img src="../assets/story3.gif" />
                  <figcaption>用爱心传递快乐</figcaption>
                </figure>
                <figure>
                  <img src="../assets/story4.gif" />
                  <figcaption>环境诉讼支持基金</figcaption>
                </figure>
                <figure>
                  <img src="../assets/story5.gif" />
                  <figcaption>让毒跑道远离孩子</figcaption>
                </figure>
                <figure>
                  <img src="../assets/story6.gif" />
                  <figcaption>赈济家庭箱筹备</figcaption>
                </figure>
              </div>
          </div>

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
.commonweal .top img{
  float:left;
}
.commonweal .top div{
  overflow:auto;
  padding-left:30px;
}
.commonweal .top h5{
  height:40px;
  line-height: 45px;
  font-size:16px;
}
.commonweal .top div p{
  color:#666;
  line-height:24px;
}
.commonweal .top div p a{
  color:#ff6600;
}
.commonweal .story{
  margin-top:30px;
}
.commonweal .story h5{
  margin: 20px 0;
  text-indent:10px;
  font-size:14px;
  border-left:1px solid #ff6600;
}
.commonweal .story div{
  text-align:center;
}
.commonweal .story figure{
  display:inline-block;
  width:236px !important;
  margin-bottom:30px;
  border:1px solid #f7f7f7;
}
.commonweal .story figure img{
  display:inline-block;
  width:100%;
}
.commonweal .story figure:nth-child(3n-1){
  margin: 0 30px;
  margin-bottom:30px;
}
.commonweal .story figure figcaption{
  heigth:30px;
  line-height:30px;
  font-size:14px;
  color:#333;
}
</style>
