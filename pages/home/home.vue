<template>
  <view>
    <u-swiper :list="imgList"></u-swiper>
    <view class="u-text-center u-m-t-30">
      <u-tabs :list="sortList" item-width="160" bar-width="100" :current="current" @change="changeSort"></u-tabs>
    </view>

    <u-row gutter="16">
      <u-col span="6" v-for="(item, index) in 100" :key="index">
          <navigator class="goods-item">
            <u-image width="100%" height="300rpx" src="https://cdn.uviewui.com/uview/swiper/1.jpg"></u-image>
            <view class="title">区块链</view>
            <view class="u-flex u-row-between">
              <view class="price">￥ 99</view>
              <view class="sales">销量: 10</view>
            </view>
          </navigator>
      </u-col>
    </u-row>
  </view>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        'https://cdn.uviewui.com/uview/swiper/1.jpg',
        'https://cdn.uviewui.com/uview/swiper/2.jpg',
        'https://cdn.uviewui.com/uview/swiper/3.jpg',
      ],
      sortList: [
        {
          name: '默认'
        },
        {
          name: '销量'
        },
        {
          name: '推荐'
        },
        {
          name: '最新'
        }
      ],
      current: 0
    }
  },
  onLoad () {
  },
  methods: {
    changeSort (index) {
      console.log(index);
      this.current = index
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-item{
  padding: 40rpx;
  margin-top: 30rpx;
  box-shadow: 0 12rpx 20rpx 0 rgba(0,0,0,.1);
  .title{
    margin: 10rpx 0;
    font-weight: 500;
    font-size: 32rpx;
  }
  .price{
    color: red;
  }
  .sales{
    color: #888;
  }
}
</style>
