<template>
<div>
    <el-row>
         <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card class="box-card" :body-style="{ padding: '0px' }">
                <div slot="header" class="clearfix">
                    <span>走进顺捷欣</span>
                    <el-button style="float: right; padding: 3px 0" type="text">More>></el-button>
                </div>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{{text1}}</p>
            </el-card>
        </el-col>

    </el-row>
</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
        text1: "顺捷欣是一家专业化的电子元器件供应商，有着多年MCU代理经验。专注于为中国电子产品生产企业提供单片机、单片机周边器件及产品应用方案。公司致力于销售推广国际著名半导体器件制造商：中颖、IXYS、ABOV、ATMEL、MICROCHIP、DALLAS、IR、ST、TI等品牌的产品。"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import '../style/card.css';
</style>
