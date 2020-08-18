// pages/landing/landing.js
const app = getApp()
const host = app.globalData.host

Page({

  /**
   * Page initial data
   */
  data: {
    hide: true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
      url: host + 'evints',
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
  },
  search: function() {
    console.log(this.data.input)
    const query2 = this.data.input 
    const q = {query: query2}
    console.log("q->", q)
    wx.request({
      url: host + 'evints',
      method: "GET",
     data: q,
      success: (res) => {
       console.log(res.data);
       this.setData({events: res.data})
      }
    })
  },
  hideForm: function(e) {
    console.log(e)
    // console.log(e.detail.value);
    this.setData({hide: false, input: e.detail.value})
    if (e.detail.value == "") {
      this.setData({hide: true})
      this.search()
    }
  }
})