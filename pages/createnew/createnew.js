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
      hideList: {},
      render: false,
      ra: false
   },

   /**
    * Lifecycle function--Called when page load
    */
   onLoad: function (options) {
      wx.request({
        url: host + 'evints',
        success: async (res) => {
          console.log(res.data);
          this.setData({events: res.data})
          console.log("checking what s in this",this)
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
      console.log("length.........", Object.keys(this.data.selectList).length)
      let checker = false
      for (let prop in this.data.selectList) {
        if (this.data.selectList[prop] === true) {
          checker = true
        }
      }
      if (name !== "" && checker) {
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
        console.log("this is a -------------------------", a)
        // console.log(id)
        // console.log(e.detail.value)
        // console.log(list[1])
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
      } else if (!checker) {
        this.setData({ra: true})
      } else {
        this.setData({render: true})
      }
    },
    hideForm: function(e) {
      const page = this
      console.log(e)
      // console.log(e.detail.value);
      this.setData({hide: true, input: e.detail.value})
      if (e.detail.value === "") {
        this.setData({hide: false})
        this.search(false)
        wx.request({
          url: host + 'evints',
          data: {query: "", date: page.data.todayDate},
          success: (res) => {
            console.log(res.data);
            this.setData({events: res.data})
            console.log("checking what s in this",this)
            // for (x of this.events) {
            //   globalWishlist[x.id] = false;
            // }
          }
        })
      } else {
        let query1 = this.data.todayDate
        const query2 = this.data.input 
        const q = {query: query2, date: this.data.todayDate}
        console.log("q->", q)
        wx.request({
          url: host + 'evints',
          method: "GET",
         data: q,
          success: (res) => {
           console.log(res.data);
           this.setData({events: res.data})
           console.log(page.data.events)
          }
        })
      }
    },
    bindDateChange: function(e) {
      const page = this
      this.setData({
        todayDate: e.detail.value
      })
      console.log(this.data.todayDate)
      const q = {query: "", date: this.data.todayDate}
      wx.request({
        url: host + 'evints',
        method: "GET",
       data: q,
        success: (res) => {
         console.log(res.data);
         this.setData({events: res.data})
         console.log(page.data.events)
        }
      })

    },
    save: function(e) {
      const id = e.currentTarget.dataset.id
      console.log(id)
      globalWishlist[id] ? globalWishlist[id] = false : globalWishlist[id] = true
      this.setData({wishlist: globalWishlist})
      console.log(this.data.wishlist)
    },
    select: function(e) {
      let checker = false
      const id = e.currentTarget.dataset.id
      const select = this.data.selectList
      select[id] ? select[id] = false : select[id] = true
      this.setData({selectList: select })
      for (let prop in this.data.selectList) {
        console.log("prop-----", prop)
        if (this.data.selectList[prop] === true) {
          checker = true
        }
      }
      if (checker) this.setData({ra: false})
      console.log(this.data.selectList)
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
   },
   search: function(a = true) {
     const page = this
     console.log(this.data.input)
     let query1 = this.data.todayDate
     if (a===false) query1 = ""
     const query2 = this.data.input 
     const q = {query: query2, date: this.data.todayDate}
     console.log("q->", q)
     wx.request({
       url: host + 'evints',
       method: "GET",
      data: q,
       success: (res) => {
        console.log(res.data);
        this.setData({events: res.data})
        console.log(page.data.events)
       }
     })
   },
   be: function(e) {
     console.log(e.detail.value)
     if (e.detail.value !== "") {
       this.setData({render: false})
     }
   }
})
