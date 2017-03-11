<template>
    <div class="header">
        <div class="w">
            <h1><a href="#">北京英硕扶老公益基金会</a>
                <div class="fr hot-phone">
                    <span>基金会热线</span><b>12345678911</b>
                </div>
            </h1>
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/about">关于我们</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    height:180px;
    border-bottom: 2px solid #ff6600;
}
.header h1 a{
    display: inline-block;
    padding-top: 50px;
    width: 390px;
    text-indent: -9999px;
    height:71px;
    background: url("../assets/logo.png") no-repeat left center;
}
.header h1 .hot-phone{
    width: 300px;
    text-align: right;
    padding-top: 30px;
    font-size: 14px;
}
.header h1 .hot-phone span{
    display: block;
    line-height: 30px;
    text-decoration: none;
}
.header h1 .hot-phone b{
    display: inline-block;
    padding-top: 6px;
    font-size: 20px;
    color:#ff6600;
}
.header ul{
    padding-top: 19px;
}
.header ul li{
    display: inline-block;
    width: 146px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
}
.header ul li a{
    display: inline-block;
}
.header ul li .router-link-active,.header ul li a:hover{
    background: #ff6600;
    color: #fff;
    width: 100%;
    height:100%;
}
</style>
