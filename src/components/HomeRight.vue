<template>
    <div class="fr">
        <div class="section" v-if="'false'==show">

            <h4 ><b>政策·解读</b> <a href="#"><span>更多</span></a></h4>
            <figure>
                <img src="../assets/adv_img.png" />
                <figcaption>
                    <h5><a href="#">营养包：一场爱的接力</a></h5>
                    <div>
                        在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，
                    </div>
                </figcaption>
            </figure>
            <ul>
                <li><a href="#">春蕾计划一对一</a></li>
                <li><a href="#">重庆拟立法要求女子写信问候老人</a></li>
                <li><a href="#">重庆拟立法要求女子写信问候老人</a></li>
                <li><a href="#">重庆拟立法要求女子写信问候老人</a></li>
            </ul>
            <div class="btn"><a href="#">我要捐赠</a> / <a href="#">我的捐赠</a></div>
        </div>

        <p v-if="'false'!=show"  class="details-btn">
          <div class="btn" v-if="'false'!=show"><a href="#">我要捐赠</a> / <a href="#">我的捐赠</a></div>
        </p>

        <div class="section">
            <h4><b>公益项目</b> <a href="#"><span>更多</span></a></h4>
            <figure>
                <img src="../assets/adv_img.png" />
                <figcaption>
                    <h5><a href="#">营养包：一场爱的接力</a></h5>
                    <div>
                        在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，
                    </div>
                </figcaption>
            </figure>
            <figure>
                <img src="../assets/adv_img.png" />
                <figcaption>
                    <h5><a href="#">营养包：一场爱的接力</a></h5>
                    <div>
                        在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，
                    </div>
                </figcaption>
            </figure>
            <figure>
                <img src="../assets/adv_img.png" />
                <figcaption>
                    <h5><a href="#">营养包：一场爱的接力</a></h5>
                    <div>
                        在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，在全国卫生与健康大会上，
                    </div>
                </figcaption>
            </figure>
        </div>

        <div class="section about">
            <h4><b>关注我们</b></h4>
            <div>
                <dl>
                    <dt><img src="../assets/erweima.gif" /></dt>
                    <dd>
                        英硕基金微信公众号
                    </dd>
                    <dd>
                        yingshuo12345
                    </dd>
                </dl>
                <dl>
                    <dt><img src="../assets/weibo.gif" /></dt>
                    <dd>
                        北京英硕公益基金微博
                    </dd>
                    <dd><a href="#">+ 加关注</a></dd>
                </dl>
            </div>

        </div>
    </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Carrousel from './Carrousel'
export default {
  name: 'home-right',
  props:[
    'show'
  ],
  data () {
    return {
      msg: '',
    }
  },
  components:{swiper, swiperSlide, Carrousel}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    height: auto;
    overflow: hidden;
    margin-bottom: 30px;
}
.main .tips{
    float: left;
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.main .tips ul li{
    display: inline-block;
    margin-right: 30px;
    font-size: 14px;
    cursor: pointer;
    position: relative;
}
.main .tips ul li:first-child{
    background: url("../assets/hot.gif") no-repeat left center;
    text-indent: 50px;
}
.main .fl{
    width: 780px;
    min-height: 500px;
}
.main .fr{
    width: 350px;
    padding-left: 30px;
    border-left: 1px solid #f1f1f1;
    min-height: 500px;
}
.main .fr>div{
    float: left;
    width: 100%;
}
.main .fl .section{
    margin-top: 30px;
    width: 370px;
    height: 270px;
    float: left;
}
.main .fr div:first-child{
    height: 380px;
    margin-bottom: 30px;
    position: relative;
}
.main .fl .section:nth-child(2n-1){
    float: right;
}
.main .swiper-container{
    height: 380px;
}
.section h4{
    height: 40px;
    line-height: 45px;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
}
.section h4 b{
    display: inline-block;
    height: 40px;
    padding: 0 2px;
    position: relative;
}
.section h4 b::before{
    content: ' ';
    position: absolute;
    display: inline-block;
    width:100%;
    left: 0px;
    bottom: -2px;
    height: 2px;
    background: red;
}
.section h4 span{
    float: right;
    font-size: 12px;
    font-weight: normal
}
.section h4 a:hover{
    color: #000;
}
.section h4 span::after{
    content: '>';
    display: inline-block;
    width: 16px;
    height:16px;
    line-height: 16px;
    text-align: center;
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    background: #eee;

}
.section figure{
    margin: 10px 0;
    float: left;
}
.section figure img{
    display: inline-block;
    width: 150px;
    height: 100px;
    float: left;
    margin-right: 14px;
}
.section figure figcaption{
    display: inline-block;
    width: 186px;
    float: right;
}
.section figure figcaption h5{
    height: 25px;
    line-height: 25px;
}
.section figure figcaption h5 a{
    color: #ff6600;
    font-size: 14px;
    text-decoration: underline;
}
.section figure figcaption div{
    height: 75px;
    font-size: 12px;
    line-height: 24px;
    overflow: hidden;
}
.section ul{
    clear: both;
}
.section ul li{
    font-size: 14px;
    height: 36px;
    line-height: 36px;
}
.section ul li span{
    float: right;
}
.section ul li:first-child a{
    color: #ff6600;
}
.section ul li a:hover{
    color: #ff6600;
}
.btn{
  height: 40px;
  line-height: 40px;
  width: 100%;
  background: #ff6600;
  color: #fff;
  text-align: center;
}
.section .btn{
    position: absolute;
    bottom: 0px;
}
.btn a{
    color: #fff;
    letter-spacing: 1px;
}
.link{
    width: 100%;
    float: left;
}
.link .tab-title ul{
    position: relative;
}
.link .tab-title ul::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #ccc;
    left: 0px;
    top:40px;
    z-index: 1;
}
.link .tab-title ul li{
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin-right:10px;
    height: 40px;
    cursor: pointer;
    text-align: center;
    position: relative;
    z-index: 2;
    background: #fff;
    line-height: 40px;
}
.link .tab-title ul li.active{
    border-bottom: 2px solid #ff6600;
}
.link .tab-title ul li.active::after{
    content: '';
    display: inline-block;
    position: absolute;
    width: 15px;
    height: 8px;
    background: url("../assets/arrow.gif") no-repeat;
    top:42px;
    left:50%;
    margin-left: -7px;
    z-index: 1;
}
.link .tab-content{
    padding: 20px;
}
.link .tab-content ul li{
    display: inline-block;
}
.link .tab-content ul li a{
    display: inline-block;
    width: 120px;
    height: 82px;
    text-indent: -9999px;
    background-image:url("../assets/link.gif");
    background-repeat: no-repeat;
}
.link .tab-content ul li:nth-child(2) a{
    background-position: -120px 0;
}
.link .tab-content ul li:nth-child(3) a{
    background-position: -240px 0;
}
.link .tab-content ul li:nth-child(4) a{
    background-position: -360px 0;
}
.link .tab-content ul li:nth-child(5) a{
    background-position: -480px 0;
}
.link .tab-content ul li:nth-child(6) a{
    background-position: -600px 0;
}
.about div{
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #f1f1f1;
    overflow: auto;
}
.about div dl{
    text-align: center;
    width: 150px;
    float: left;
}

.about div dl img{
    display: inline-block;
}
.about div dl dd{
    line-height: 24px;
}
.about div dl:first-child{
    padding-right: 20px;
    border-right: 1px dashed #f1f1f1;
}
.about div dl:last-child dt{
    padding: 10px 0;
    margin-bottom: 10px;
}
.about div dl:last-child dd{
    font-size: 14px;
}
.about div dl:last-child dd a{
    margin: 6px 0;
    display: inline-block;
    height: 30px;
    width: 80%;
    line-height: 30px;
    background: #ff6600;
    color: #fff;
    border-radius: 5px;
}
</style>
