const install = (Vue, vm) => {
  const isLogin = () => {
    // 如果没有token,跳转到登录页面
    const token = vm.vuex_token
    if (!token) {
      vm.$u.toast('请登录')
      const currentPage = getCurrentPages().pop()
      console.log(currentPage);
      uni.setStorageSync('back_url', currentPage.route)
      setTimeout(() => {
        vm.$u.route({
          type: 'redirect',
          url: 'pages/login/login'
        })
      }, 2000)
      return false
    }
    return true
  }
  vm.$u.utils = {
    isLogin
  }
}

export default {
  install
}