<template>
  <div class="section">
      <h4><b>{{name}}</b> <a href="#"> <span>更多</span></a></h4>
      <ul>
          <li v-for="item in list">
           <router-link :to="{path:'index/details',query: {id:item.id,type:type}}">{{item.name}}</router-link>
           <span>{{item.time}}</span>
           </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'home-section',
  props:[
    'list',
    'type',
    'name'
  ],
  data () {
    return {
      msg: '',
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
