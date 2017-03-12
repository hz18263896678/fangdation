<template>
    <div class="footer">
        <div class="footer-top w">
            <figure>
                <img src="../assets/bottom-logo.gif" />
                <figcaption>
                  北京英硕扶老基金会版权所有
                </figcaption>
            </figure>
            <dl>
                <dd>基金会电话：010-56292624转801、802、803、804</dd>
                <dd>基金会邮箱：ysfulao@163.com</dd>
                <dd>基金会电话：北京朝阳区惠新北里16-5</dd>
            </dl>
        </div>
        <div class="footer-bottom">
            Copyright &copy; 1989 - 2017 Tencent. All Rights Reserved
        </div>
    </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    clear: both;
    overflow: hidden;
    width: 100%;
    background: #f7f7f7;
    color: #666;
}
.footer .footer-top{
    text-align: center;
    padding: 20px 0;
}
.footer .footer-top dl{
    display: inline-block;
    padding-left: 20px;
    height: 90px;
    font-size: 14px;
    line-height: 24px;
    overflow: hidden;
    text-align: left;
}
.footer .footer-top dl dd:first-child{
    margin-top: 22px;
}
.footer .footer-top figure{
    display: inline-block;
    border-right:1px dashed #ccc ;
    padding-right: 20px;
    text-align: left;
    font-size: 14px;
}
.footer .footer-bottom{
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 16px;
    background: #2d2d2d;
    text-align: center;
    box-shadow: #ff6600;
}
</style>
