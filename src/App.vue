<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'app',
  components: { Header, Footer}
}
</script>

<style>
/*css 初始化 */
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img ,figure,caption{
    margin: 0;
    padding: 0;
}

fieldset, img, input, button {
    border: none;
    padding: 0;
    margin: 0;
    outline-style: none;
}

ul, ol {
    list-style: none;
}

input {
    padding-top: 0;
    padding-bottom: 0;
    font-family: "微软雅黑", "宋体";
}

select, input {
    vertical-align: middle;
}

select, input, textarea {
    font-size: 12px;
    margin: 0;
}
textarea {
    resize: none;
}

/*防止拖动*/
img {
    border: 0;
    vertical-align: middle;
}

/*  去掉图片低测默认的3像素空白缝隙*/
table {
    border-collapse: collapse;
}

body {
    font: 12px/150% Arial, Verdana, "\5b8b\4f53";
    color: #333;
    background: #fff;
}

.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1; /*IE/7/6*/
}

a {
    color: #333;
    text-decoration: none;
}

a:hover {
    color: #C81623;
}

h1, h2, h3, h4, h5, h6 {
    text-decoration: none;
    font-weight: normal;
    font-size: 100%;
}

s, i, em {
    font-style: normal;
    text-decoration: none;
}

.col-red {
    color: #C81623 !important;
}

/*公共类*/
.w {
    /*版心 提取 */
    width: 1200px;
    margin: 0 auto;
}

.fl {
    float: left
}

.fr {
    float: right
}

.al {
    text-align: left
}

.ac {
    text-align: center
}

.ar {
    text-align: right
}

.hide {
    display: none
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
