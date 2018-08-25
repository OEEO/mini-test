Page({
  data: {
  },
  onLoad () {
  },
  onShow() {
  },
  takePhoto() {
		let ctx = wx.createCameraContext()
		ctx.takePhoto({
			quality: 'high',
			success: (res) => {
				this.setData({
					src: res.tempImagePath
				})
			}
		})
	},
  getCameraAuthError () {
    let that = this
    wx.showToast({
      title: '请先授权应用使用摄像头',
      icon: 'none'
    })
  }
})