<template>
    <div class="w main clearfix">
        <div class="fl w780">
          <div class="tips"><span>首页</span><span>最新资讯</span><span>正文</span></div>
          <div class="article">
             <h4>北京户籍老人免费登记遗嘱</h4>
             <div class="time">2017-03-12</div>
             <div class="content">
             <pre>
        由中国社会福利基金会社区发展基金主办，全国老龄办信息中心协办，北京爱传承为老服务中心承办的“i嘱托-2016免费遗嘱订立公益活
        动”已圆满落下帷幕。通过本次公益行动，让越来越多的老人及家庭意识到遗嘱订立的重要性与紧迫感。为了帮助京城更多的家庭化解了潜
        在财产纠纷、维护老年人合法权益，现爱传承特针对北京市户籍老年人提供免费到店自书遗嘱登记服务，限额800名。
        仅限800名。
                                    
        （参与资格：北京户籍老人可享受免费到店自书遗嘱登记服务。）

              只要您通过以下方式提前预约，即可到店免费登记自书遗嘱。
        预约方法：
        1、致电服务专线400-8910-999电话预约
        2、浏览官方网站www.icc365.com网站预约；
        3、到位于北京市朝阳区惠新北里16-5服务大厅现场预约。
         到店登记遗嘱需携带哪些资料？
        本人：1、身份证 2、心理健康评估证明 3、户口本 4、结婚证原件 5、两寸照片两张、6、死亡证明（若配偶离世）
        继承人：1、身份证号码或复印件 2、家庭住址 3、联系方式
        财产证明：房产证或《房屋买卖合同》（如有疑问，请致电服务专线或到店咨询。）
        如您对以上资料有任何疑问，点击>>>在线咨询。

        哪些老人无法办理自书遗嘱？
        1.   文盲，不识字
        2.   患有帕金森症等神经系统疾病
        3.   患有脑中风
        4.   盲人和聋哑人
        5.   反应迟钝以至无法正常交流
        6.   不具备书写能力
        7.   高度近视（白内障严重），影响基本书写能力
        8.   手抖严重或者四肢疾病,导致无法签字

        温馨提示：
        工作时间：周一至周六9:00-18:00（法定节假日除外）
        服务大厅地址：北京市朝阳区惠新北里16-5
        服务专线：400-8910-999
        （说明：建议您先提前电话预约，预约成功后带齐相关资料到店办理。若临时取消办理，需要重新排队预约、并难以享受免费服务资格。）
              </pre>
             </div>
          </div>
        </div>
        <HomeRight  show="true"></HomeRight>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Carrousel from './Carrousel'
import HomeRight from './HomeRight'
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  },
  components:{swiper, swiperSlide, Carrousel,HomeRight}
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
.main .fl .tips{
    color:#666;
}
.main .fl .tips span{
    dispplay:inline-block;
    padding-right:4px;
}
.main .fl .tips span::after{
    content:" >";
}
.main .fl .article{
  width:100%;
  padding:30px;
}
.main .fl .article h4{
  font-size:20px;
  font-weight: bold;
  text-align: center;
}
.main .fl .article .time{
  color:#666;
  text-align:center;
  line-height:40px;
}
</style>
