// pages/create/create.js
const app = getApp();
const host = app.globalData.host
const globalWishlist = app.globalData.wishlist
var today = new Date();

var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = yyyy+'-'+mm+'-'+dd;



Page({

  /**
   * Page initial data
   */
  data: {
    hide: true,
    todayDate: today,
    array: ["Nightlife", "Arts", "Sports", "Dining", "Community", "Others"],
    color: [false, false, false, false, false, false]
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
    a[id] ? a[id] = false : a[id] = true
    this.setData({color: a})
  }
})
