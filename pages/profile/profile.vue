<template>
  <view>我的</view>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  onLoad () {
   if(!this.$u.utils.isLogin()){
		 return 
	 }
	 console.log(1111);
  }
}
</script>

<style lang="scss">
</style>
