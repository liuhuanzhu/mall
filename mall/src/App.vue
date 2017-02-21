<template>
  <div id="app" class="web-font">
  	<transition
		enter-active-class="animated slideInLeft"
		leave-active-class="animated slideOutRight"
  	>
  		 <router-view ></router-view>
  	</transition>
   
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
 	@import '~animate.css';
 	#app{
 		position: absolute;
 		top: 0;left: 0;right: 0;bottom: 0;font-size:0.37rem;background-color: #f3f3f3;
 	}
 	.animated {
	  -webkit-animation-duration: 0.5s;
	  animation-duration: 0.5s;
	}
</style>