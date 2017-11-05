<template>
   <div class="foot">
			<hr/>
			Copyright &copy; &nbsp;&nbsp;{{getYear}}-{{getYear+10}}&nbsp; 
			<a href="#">深圳市顺捷欣电子有限公司</a> ALL RIGHT RESERVED<br/>		
      <ul>
        <li><label>联系方式:</label></li>
        <li><label>手机:</label>{{phone}}</li>
        <li><label>电话:</label>{{tel}}</li>
        <li><label>传真:</label>{{fax}}</li>
        <li><label>联系人:</label>{{fax}}</li>
        <li><label>地址:</label>{{address}}</li>
        <li><label>ICP:</label><a href="#">{{icpnum}}</a></li>
      </ul>
		</div> 
</template>

<script type="text/javascript">
	export default {
    data(){
      return {
        phone:'18938084149 ',
        address:'深圳市福田区中航路都会商城2楼2B002',
        tel:'0755-83209309',
        fax:'0755-82792309',
        contacts:'林先生/杨小姐/沈先生',
        icpnum:'粤ICP备05021949'
      }
    },
		computed: {
			getYear() {
				let y = new Date().getFullYear();
				let showY = y;
				if (y > 2017) {
					showY = "2017-" + y;
				}
				return showY;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .foot{
  font:12px Tahoma; 

  margin:0px auto; 
  text-align:center;
  background-color:#0B7BB3;
}
li {
  list-style-type:none;
  }
</style>
