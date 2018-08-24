// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://wangchaozhen.com/imgs/Top-Banner/1.jpg',
      'http://wangchaozhen.com/imgs/Top-Banner/2.jpg',
      'http://wangchaozhen.com/imgs/Top-Banner/3.jpg',
      'http://wangchaozhen.com/imgs/Top-Banner/4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    x: 0,
    y: 0,
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },


  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  onChange: function (e) {
    console.log(e.detail)
  },
  onScale: function (e) {
    console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})