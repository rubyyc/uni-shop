<template>
  <view>
    <view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30 u-p-t-30">
      <view class="u-m-r-10">
        <u-avatar :src="vuex_user.avatar_url" size="140"></u-avatar>
      </view>
      <view class="u-flex-1">
        <view class="u-font-18 u-p-b-20">{{vuex_user.name || ''}}</view>
        <view class="u-font-14 u-tips-color">邮箱:{{vuex_user.email || ''}}</view>
      </view>
      <view class="u-m-l-10 u-p-10">
        <u-icon name="arrow-right" color="#969799" size="28"></u-icon>
      </view>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="setting" @click="goBaseInfo" title="个人信息"></u-cell-item>
      </u-cell-group>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="rmb-circle" title="所有订单"></u-cell-item>
        <u-cell-item icon="star" title="商品收藏"></u-cell-item>
        <u-cell-item icon="map" title="收货地址"></u-cell-item>
      </u-cell-group>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="reload" @click="logout" title="退出登录"></u-cell-item>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      pic: 'https://uviewui.com/common/logo.png',
      show: true
    }
  },
  onLoad () {
    if (!this.$u.utils.isLogin()) {
      return
    }
    console.log(1111);
  },
  methods: {
    goBaseInfo () {
      console.log(23312412312);
      this.$u.route({
        url: 'pages/profile/baseInfo'
      })
    },
    async logout () {
      // 退出登录
      await this.$u.api.authLogout()

      this.$u.toast('退出成功')
      // 清除缓存
      this.$u.vuex('vuex_token', null)
      this.$u.vuex('vuex_user', {})

      setTimeout(() => {
        // 跳转到首页
        this.$u.route({
          type: 'reLaunch',
          url: '/pages/home/home'
        })
      },2000)

    }
  }
}
</script>

<style lang="scss">
page {
	background-color: #ededed;
}

.camera {
	width: 54px;
	height: 44px;

	&:active {
		background-color: #ededed;
	}
}
.user-box {
	background-color: #fff;
}
</style>
