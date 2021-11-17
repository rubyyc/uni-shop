<template>
  <view class="u-p-l-40 u-p-r-40">
    <u-form :error-type="errorType" :model="form" ref="uForm"> 
      <u-form-item label="昵称" prop="name" required>
        <u-input v-model="form.name" />
      </u-form-item>
    </u-form>
    <u-button @click="submit">提交</u-button>
  </view>
</template>

<script>
export default {
  data () {
    return {
			errorType: ['message'],
      form: {
        name: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入昵称',
            trigger: ['change', 'blur']
          }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.uForm.validate(async (valid) => {
        if (valid) {
					console.log(this.form);
					// 更新用户信息
					const res = await this.$u.api.userInfoUpdate(this.form)
					console.log(res);
          console.log('验证通过');
					// 刷新用户信息
					this.$u.utils.updateUser()
					this.$u.toast('更新成功')
        } else {
          console.log('验证失败');
        }
      });
    }
  },
  onReady () {
    this.$refs.uForm.setRules(this.rules)
		this.form.name = this.vuex_user.name
  }
}
</script>

<style>
</style>
