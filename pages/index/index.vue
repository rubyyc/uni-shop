<template>
  <view class="content">{{vuex_name}}</view>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello112'
    }
  },
  async onLoad () {
    // this.$u.get('/api/index').then(res => {
    // 	console.log(res);
    // }).catch(e => {
    // 	console.log(e);
    // })
    // console.log(1111);
    // const res = await this.$u.get('/api/index')
    // const res = await this.$u.post('/api/auth/login')
    // console.log(res);
    // console.log(1111);

    // const res = await this.$u.patch('/api/orders/1/confirm')
    // console.log(res);

		// const res = await this.$u.api.getIndex()
		// const data = {
		// 	email: 'test@a.com',
		// 	password: '123123'
		// }
		// const res = await this.$u.api.authLogin(data)
		// console.log(res);
		console.log(this.vuex_version);
		this.$u.vuex('vuex_name','Tom222222')
		console.log(this.vuex_name);
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
