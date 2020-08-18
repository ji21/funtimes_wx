// pages/create/create.js
const app = getApp();
const host = app.globalData.host
const globalWishlist = app.globalData.wishlist
Page({

  /**
   * Page initial data
   */
  data: {
    hide: true,
    array: ["Arts", "Community", "Sports", "Dining", "Nightlife", "Other"],
    color: [false, false, false, false, false, false],
    counter: 0,
    z: false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
  goToCreateNew: function() {
    wx.navigateTo({
      url: '/pages/createnew/createnew',
    })
  },
  rehide: function() {
    this.setData({hide: true})
  },
  show: function() {
    this.setData({hide: false})
  },
  bindDateChange: function(e) {
    this.setData({
      todayDate: e.detail.value
    })
    console.log(this.data.todayDate)
  },
  koo: function(e) {
    console.log(e.currentTarget.dataset.id)
    const id = e.currentTarget.dataset.id
    const a = this.data.color
    if (this.data.counter < 3) {
      if (a[id]) {
        a[id] = false
        this.data.counter--
      } else {
        a[id] = true
        this.data.counter++
      }
      this.setData({color: a})
    } else {
      if (a[id] === true) {
        a[id] = false
        this.data.counter--
      }
      this.setData({color: a})
      this.setData({z:true})
    }
  },
  randomise: function(e) {
    const date = this.data.todayDate
    let arr = []
    for (let i = 0; i<this.data.color.length; i++) {
      if (this.data.color[i] === true) {
        arr.push(this.data.array[i])
      }
    }
    console.log(arr)
    let s =  ``
    for (let i = 0; i<arr.length; i++) {
      s+= `category_array[]=${arr[i]}&`
    }
    s = s.slice(0, s.length-1)
    console.log(s)
    wx.request({
      url: `https://funtimes.wogengapp.cn/api/v1/randomizer?${s}`,
      success: (res) => {
        console.log(res.data)
        app.globalData.randomArr = res.data.evints
        console.log(res.data.evints)
        wx.navigateTo({
          url: '/pages/random/random',
        })
      }
    })
    console.log("updated", app.globalData.randomArr)
  }
})

// ?category_array[]=${arr[0]}&category_array[]=${arr[1]}&category_array[]=${arr[2]}
