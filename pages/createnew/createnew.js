// pages/createnew/createnew.js
var today = new Date();

let tomorrow = new Date(today)
tomorrow.setDate(today.getDate() + 1)

var dd1 = tomorrow.getDate();
var mm1 = tomorrow.getMonth() + 1;
var yyyy1 = tomorrow.getFullYear();

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

if(dd1<10) 
{
    dd1='0'+dd1;
} 

if(mm1<10) 
{
    mm1='0'+mm1;
} 

tomorrow = yyyy1+'-'+mm1+'-'+dd1;

Page({

   /**
    * Page initial data
    */
   data: {
      hide: false,
      todayDate: today
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

   goToMappage: function() {
      wx.redirectTo({
        url: '/pages/mappage/mappage',
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
    }
})
