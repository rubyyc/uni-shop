<template>
  <u-upload
		ref="upload"
    :action="action"
    :max-size="5 * 1024 * 1024"
    max-count="1"
    :before-upload="beforeUpload"
    :custom-btn="true"
    :show-progress="false"
    :form-data="formData"
    :multiple="false"
    :deletable="false"
    :show-upload-list="true"
    width="0"
    height="0"
		@on-success="onSuccess"
  >
    <u-avatar slot="addBtn" :src="vuex_user.avatar_url" size="140"></u-avatar>
  </u-upload>
</template>

<script>
let _this = {}
export default {
  name: "oss-upload",
  data () {
    return {
      action: "",
      formData: {},
			upLoadFilename: ''
    };
  },
	created() {
		_this = this
	},
  methods: {
    // 上传前的钩子
    async beforeUpload (index, list) {
      // await等待一个请求，请求回来后再返回true，继续上传文件
      // let data = await this.$u.post('url');
      console.log(list);
      // 请求api
      const ossToken = await _this.$u.api.authOssToken()
      console.log(ossToken);
      _this.action = ossToken.host

      // 处理唯一的文件名
      const { file } = list[0]
      /* #ifdef H5 */
      const fileName = file.name
      /* #endif */

			/* #ifndef H5 */
			const fileName = file.path
			/* #endif */

			console.log(fileName);
			const suffix = fileName.slice(fileName.lastIndexOf('.'))
			console.log(suffix);

			// 生成唯一的文件名
			const upFileName = _this.$u.guid(20) + suffix
			console.log(upFileName);
			_this.upLoadFilename = upFileName
      _this.formData = {
        'key': upFileName, // 上传后的文件名
        'policy': ossToken.policy,
        'OSSAccessKeyId': ossToken.accessid,
        'success_action_status': '200',
        'signature': ossToken.signature
      }
      return true; // 或者根据逻辑返回false
    },
		// 上传成功之后
		async onSuccess(){
			// 移除预览区
			this.$refs.upload.remove(0)
			// 请求api更新头像
			await this.$u.api.userAvatar({
				avatar: this.upLoadFilename
			})
			this.$u.utils.updateUser()
			this.$u.toast('更新成功')
			// 更新缓存
		}
  }
}
</script>

<style lang="scss">
</style>
