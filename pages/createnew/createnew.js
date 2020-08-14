// pages/createnew/createnew.js
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
      hide: false,
      todayDate: today,
      wishlist: globalWishlist,
      selectList: {},
      hideList: {}
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

   goToItinerary: function(e) {
      const name = e.detail.value.title
      const date = e.detail.value.date
      let list = []
      const selected = this.data.selectList
      for (let prop in selected) {
        if (selected[prop] === true) {
          list.push(prop)
          console.log(prop)
        }
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
      console.log("this is a", a)
      // console.log(id)
      // console.log(e.detail.value)
      // console.log(list[1])
      wx.request({
        url: host + 'itineraries',
        method: "POST",
        data: a,
        success: () => {
          wx.redirectTo({
            url: '/pages/anItiernary/anItiernary',
          })
        }
      })
    },
    hideForm: function(e) {
      console.log(e.detail.value);
      this.setData({hide: true})
      if (e.detail.value == "") {
        this.setData({hide: false})
      }
    },
    bindDateChange: function(e) {
      this.setData({
        todayDate: e.detail.value
      })
      console.log(this.data.todayDate)
    },
    save: function(e) {
      const id = e.currentTarget.dataset.id
      console.log(id)
      globalWishlist[id] ? globalWishlist[id] = false : globalWishlist[id] = true
      this.setData({wishlist: globalWishlist})
      console.log(this.data.wishlist)
    },
    select: function(e) {
      e.stop
      const id = e.currentTarget.dataset.id
      const select = this.data.selectList
      select[id] ? select[id] = false : select[id] = true
      this.setData({selectList: select })
      // console.log(this.data.selectList)
      // console.log(id)
      // console.log(this.data.selectList[id])
    },
    outOfIdeas: function(e) {
      const id = e.currentTarget.dataset.id
      const hide = this.data.hideList
      hide[id] ? hide[id] = false : hide[id] = true
      console.log(e)
      this.setData({hideList: hide })
      console.log(this.data.hideList)
      console.log(id)
      console.log(this.data.hideList[id])
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
