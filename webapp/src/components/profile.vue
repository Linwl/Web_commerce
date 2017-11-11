<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>公司简介</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs type="border-card">
      <el-tab-pane label="公司简介">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{{text1}}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{{text2}}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{{text3}}</p>
     </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      text1: '顺捷欣是一家专业化的电子元器件供应商，有着多年MCU代理经验。专注于为中国电子产品生产企业提供单片机、单片机周边器件及产品应用方案。公司致力于销售推广国际著名半导体器件制造商：中颖、IXYS、ABOV、ATMEL、MICROCHIP、DALLAS、IR、ST、TI等品牌的产品。',
      text2:'产品广泛应用于消费类电子、仪表仪器、汽车电子、通信产品、工业控制及门禁产品，货源丰富，价格合理，品质可靠！',
      text3:'顺捷欣秉承“诚信、高效、品质、服务”的经营理念，凭着良好的资源优势、规范的管理运作、完备的信息网络、专业的职业素养、热情的服务态度，愿与海内外客户携手共进、共创未来!'
    }
  }
}
</script>

<style>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>