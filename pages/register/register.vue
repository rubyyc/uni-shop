<template>
  <view>注册</view>
</template>

<script>
export default {
  data () {
    return {
      name:'',
      email:'',
    	password:'',
      password_confirmation:''
    };
  },
  methods: {
    async submit () {
      // 表单验证
      // 参数
      const params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: ''
      }
      // 请求api
      const res = this.$u.api.authRegister(params)

			// 注册成功后,重定向登录,关闭注册(redirect)
    }
  },
}
</script>

<style lang="scss">
</style>
