const install = (Vue, vm) => {
  const isLogin = () => {
    // 如果没有token,跳转到登录页面
    const token = vm.vuex_token
    if (!token) {
      vm.$u.toast('请登录')
      const currentPage = getCurrentPages().pop()
      console.log(currentPage);

      const { options, route} = currentPage
      const optionsKeys = Object.keys(options)
      let params = ''
      if (optionsKeys.length) {
        params = optionsKeys.reduce((pre, current) => {
          return pre + current + '=' + options[current] + '&'
        }, '?').slice(0, -1)
        console.log(params);
      }

      uni.setStorageSync('back_url', route + params)
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