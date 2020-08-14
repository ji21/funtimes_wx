// pages/landing/landing.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://funtimes.wogengapp.cn/api/v1/evints',
      success: (res) => {
        console.log(res.data);
        this.setData({events: res.data})
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },


  goToShow: function(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    console.log(e.currentTarget.dataset.id)
   wx.navigateTo({
   url: `/pages/show/show?id=${id}`,
  })

 }





})