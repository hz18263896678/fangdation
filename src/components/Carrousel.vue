<template>
    <swiper :options="swiperOption" ref="mySwiperA">
        <!-- 幻灯内容 -->
        <swiper-slide><img src="../assets/slide.gif" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/slide.gif" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/slide.gif" alt=""></swiper-slide>
        <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
        <div class="swiper-pagination"   slot="pagination"></div>
        <div class="swiper-button-prev"  slot="button-prev"></div>
        <div class="swiper-button-next"  slot="button-next"></div>
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        <div class="swiper-tips-bg" slot="tips">99公益日一起爱</div>
    </swiper>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
          // 所有配置均为可选（同Swiper配置）
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true）
          notNextTick: true,
          autoplay: 2500,
          direction : 'horizontal',
          // grabCursor : true,
          // setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          // mousewheelControl : true,
          observeParents:true,
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper){
           // console.log(swiper)
          },
          // more Swiper config ...
          // ...
       }
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiperA.swiper
      }
  },
  components:{swiper, swiperSlide}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-pagination{
    text-align: right;
}
.swiper-container-horizontal>.swiper-pagination-bullets{
    bottom: 15px;
}
.swiper-pagination .swiper-pagination-bullet:last-child{
    margin-right: 60px;
}
.swiper-tips-bg{
    width: 100%;
    position: absolute;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size:14px;
    text-indent: 20px;
    background: rgba(0,0,0,0.6);
    bottom:0px;
    left: 0px;
    z-index: 8;
}
.swiper-slide img{
    display: inline-block;
    width: 100%;
}
.swiper-pagination-bullet-active{
    background: #fff;
}
</style>
