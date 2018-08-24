Page({
  data: {
    hasCameraAuth: false
  },
  onLoad () {
    console.log('load')
    let that = this
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.camera']) {
          that.setData({
            hasCameraAuth: res.authSetting['scope.camera']
          })
        }
      }
    })
  },
  onShow() {
    let that = this
    console.log('show')
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.camera']) {
          that.setData({
            hasCameraAuth: res.authSetting['scope.camera']
          })
        }
      }
    })
  },
	takePhoto() {
		const ctx = wx.createCameraContext()
		ctx.takePhoto({
			quality: 'high',
			success: (res) => {
				this.setData({
					src: res.tempImagePath
				})
			}
		})
	},
	error(e) {
		console.log(e.detail)
	}
})