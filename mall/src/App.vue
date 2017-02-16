<template>
  <div id="app" class="web-font">
    <router-view></router-view>
    <div>router-view</div>
  </div>
</template>
<script type="text/javascript">
  export default{
    name:"app"
  }
</script>
<style lang="scss">
	@import '~mobi.css/src/mobi.scss';
</style>
<style >
 	@import './assets/css/iconfont.css';
 	#app{
 		position: absolute;
 		top: 0;left: 0;right: 0;bottom: 0;font-size:0.37rem;
 	}
</style>