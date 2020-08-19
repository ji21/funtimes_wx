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
      url: 'url',
      succes: () => {

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
    const page = this
    console.log(e.detail.rawData)
    const dede = e.detail.rawData.split(/(\".*?\")/gm)
    const name = dede[3].slice(1, dede[3].length-1)
    const avatar = dede[25].slice(1, dede[25].length - 1)
    const blah = {name: name, avatar: avatar}
    const id = app.globalData.userId
    console.log(blah)
    wx.request({
      url: `https://funtimes.wogengapp.cn/api/v1/update_user/${id}`,
      method: "PUT",
      data: blah,
      success: () => {
        page.setData({logIn: blah})
        app.globalData.userInfo = blah
      }
    })
    this.setData({logIn: true})
  },
  logOut: function() {
    this.setData({logIn: false})
    app.globalData.userInfo = null
    wx.reLaunch({
      url: '/pages/profile/profile',
    })
  }
})
