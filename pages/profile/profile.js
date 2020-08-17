// pages/profile/profile.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    logIn: app.globalData.userInfo
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://funtimes.wogengapp.cn/api/v1/evints',
      success: async (res) => {
        console.log(res.data);
        this.setData({events: res.data})
        // for (x of this.events) {
        //   globalWishlist[x.id] = false;
        // }
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
  goToAllItinerary: function () {
    wx.navigateTo({
      url: '/pages/itineraries/itineraries',
    })
  },
  goToWishlist: function () {
    wx.navigateTo({
      url: '/pages/wishlist/wishlist',
    })
  },
  getUserInfo: function(e) {
    console.log(e.detail.rawData)
  }
})
