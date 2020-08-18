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
    array: ["Nightlife", "Arts", "Sports", "Dining", "Community", "Other"],
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
    const data = {category_array: arr}
    console.log(arr)
    wx.request({
      url: "https://funtimes.wogengapp.cn/api/v1/randomizer",
      data: arr,
      success: (res) => {
        console.log(res)
        app.globalData.randomArr = res.data.evints
        console.log(res.data.evints)
        wx.redirectTo({
          url: '/pages/random/random',
        })
      }
    })
    console.log(arr);
  }
})

// ?category_array[]=${arr[0]}&category_array[]=${arr[1]}&category_array[]=${arr[2]}
