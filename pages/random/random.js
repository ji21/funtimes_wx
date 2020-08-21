// pages/random/random.js
const app = getApp()
const host = app.globalData.host

Page({

  /**
   * Page initial data
   */
  data: {
    hide: false,
    events: app.globalData.randomArr,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("app global data random array--->", app.globalData.randomArr)
    this.setData({events: app.globalData.randomArr})
    console.log(this.data.events)
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
 bbb: function(e) {
   console.log(e.detail.value)
   this.setData({render: false})
   this.setData({input: e.detail.value})
 },
 create: function() {
   if (this.data.input !== undefined) {
    const name = this.data.input
    const date = "2000-01-01"
    let list = []
    for (let i = 0; i<this.data.events.length; i++) {
      list.push(this.data.events[i].id)
    }
    const id = app.globalData.userId
    const itinerary = {
      date: date,
      name: name,
      user_id: id
    }
    const a = {
      itinerary,
      evint_array: list
    }
    console.log("this is obj----->", a)
    wx.request({
      url: host + 'itineraries',
      method: "POST",
      data: a,
      success: () => {
        wx.redirectTo({
          url: '/pages/itineraries/itineraries',
        })
      }
    })
   } else {
     this.setData({render: true})
     console.log(this.data.render)
   }
 },
 deleteIt: function (e) {
   console.log(e.currentTarget.dataset.id)
   const i = e.currentTarget.dataset.id
   let arr = this.data.events.filter(a=>a.id!==i)
    console.log(arr)
    this.setData({events: arr})
 }
})