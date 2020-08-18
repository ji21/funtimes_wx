// pages/show/show.js
const app = getApp()

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
      const page = this
      const id = options.id
      console.log('id in show', id)

      wx.request ({
         url: `${app.getHost()}evints/${id}`,
         success: (res) => {
            page.setData(res.data)
            console.log(res)
            const t = res.data.title
            console.log(t)
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

   }
})