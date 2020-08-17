// pages/itineraries/itineraries.js
const app = getApp()
const host = app.globalData.host
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
    //
    const page = this
    if (app.globalData.userId) {
      const id = app.globalData.userId
      wx.request({
        url: host + `itineraries/?user_id=${id}`,
        success: (res) => {
          console.log(res.data[0].activities[0])
          page.setData({itineraries: res.data})
        }
      }) 
    } else {
      app.userIdCallback = () => {
        const id = app.globalData.userId
        wx.request({
          url: host + `/itineraries/?user_id=${id}`,
          success: (res) => {
            page.setData({itineraries: res.data})
          }
        })
      }
    }
    //
    // wx.request({
    //   url: host + `/itineraries/?user_id=${id}`,
    //   success: (res) => {
    //     console.log(res.data)
    //     this.setData({itineraries: res.data})
    //   }
    // })
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

  }
})