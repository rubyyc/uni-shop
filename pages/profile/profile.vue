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
    // 如果没有token,跳转到登录页面
    const token = this.vuex_token
    if (!token) {
			this.$u.toast('请登录')
      setTimeout(() => {
        this.$u.route({
					type: 'redirect',
          url: 'pages/login/login'
        })
      }, 2000)
    }

  }
}
</script>

<style lang="scss">
</style>
