// pages/itinerary/itinerary.js
const app = getApp()
const host = app.globalData.host


Page({
   /**
    * Page initial data
    */
   data: {
      lt: "31.232065",
      lg: "121.470645",
      sc: '11',

   },

   /**
    * Lifecycle function--Called when page load
    */
   getMarker(id, lat, lon) {
      return {
         iconPath: "../../images/marker/marker.png", 
         id: id,
         latitude: lat,
         longitude: lon,
         width: 40,
         height: 40
       }
   },

   onLoad: function (options) {
      wx.authorize({
        scope: 'scope.userLocation',
        success(res) {
          console.log("here is res" ,res)
         //  wx.openLocation({
         //    latitude: 30.64242,
         //    longitude: 104.04311,
         //    scale: 28
         //  })
        },
        fail(err) {
          console.log("error message", err)
        }
      })

//get info from server and store locally -  https://funtimes.wogengapp.cn/api/v1/itineraries/?user_id=2
   const page =this
   const evint ={}
   const itinerary={}
   //to Interpolate in wx.request ==> ${getApp().globalData.userId}
   //updated on 18 august
   const id = options.id
   wx.request({
      url: host + `itineraries/${id}`,
      success: (res) => {
      console.log("--------------",res.data)
      const name = res.data.name
      const activites = res.data.activities
      const date = res.data.date
      console.log("activites--->", activites)
      this.setData({name: name, evints: activites, date: date})
   //    const itinerary= res.data[0]
   //    console.log("this is the itinerary",itinerary)
   //    this.setData({itinerary: itinerary})

   //    const act = itinerary.activities
   //   // page.setData({itineraries: res.data})
   //   console.log("these are itinerary activities", act)
     const mk = activites.map((a=> this.getMarker(a.activity_id, a.lat, a.lng)))
     console.log('markers', mk)
     this.setData({ mk })
   //   console.log(act[0].title)
   //   this.setData({evint: act})
   //    console.log("checking wats in evint",evint)



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
      console.log(this.options.id)
      return {
         title: `Come join me on ${this.data.date}!`,
         imageUrl: this.data.evints[0].image,
         path: `/pages/itinerary/itinerary?id=${this.options.id}`
      }
   }, 

   test: function() {
      console.log(6)
      const page = this
      console.log(page)
      console.log("this is the data", app)
   }








})