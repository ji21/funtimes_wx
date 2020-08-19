const app = getApp()

// pages/wishlist/wishlist.js
Page({

  /**
   * Page initial data
   */
  data: {
    hide: true,
    iii: true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({check: app.globalData.wishlist})
    let a = false
    for (let x in this.data.check) {
      if (this.data.check[x] === true) {
        a = true
        break
      }
    }
    // console.log("---------", this.data.check)
    // console.log("aaaa", a)
    if (a) {
      wx.request({
        url: app.getHost() + 'evints',
        success: async (res) => {
          console.log(res.data);
          this.setData({events: res.data})
        }
      })
    } else {
      this.setData({iii: false})
    }
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
 },
 remove: function(e) {
   console.log(e.currentTarget.dataset.id)
   const id = e.currentTarget.dataset.id
   app.globalData.wishlist[id] = false
   wx.reLaunch({
     url: '/pages/wishlist/wishlist',
     success: (res) => {console.log(1)}
   })
   console.log(this.data.check)
 }
})
