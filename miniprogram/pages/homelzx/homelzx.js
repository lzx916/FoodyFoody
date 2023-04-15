// pages/homelzx/homelzx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: [
      "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/swiper/师大正门.jpg",
      "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/swiper/祥麟书苑1.jpg",
      "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/swiper/华东师范大学思群堂.jpg"
    ],
    articles: [],
  },

  gotoDetail: function (e) {
    let id = e.currentTarget.dataset.index;
    // console.log(id)
    wx.navigateTo({
      url: `/pages/articleDetail-lzx/articleDetail-lzx?id=${id}`
    });
  },

  onNavigateToAll() {
    wx.navigateTo({
      url: '/pages/all/all', // pages前加"/"绝对路径，否则相对路径
    })
  },

  // onNavigateToDrink() {
  //   wx.navigateTo({
  //     url: '/pages/drink/drink',
  //   })
  // },

  // onNavigateToChineseFood() {
  //   wx.navigateTo({
  //     url: '/pages/chineseFood/chineseFood',
  //   })
  // },

  // onNavigateToWesternFood() {
  //   wx.navigateTo({
  //     url: '/pages/westernFood/westernFood',
  //   })
  // },

  // onNavigateToRestaurant() {
  //   wx.navigateTo({
  //     url: '/pages/restaurant/restaurant',
  //   })
  // },

  // onNavigateToShop() {
  //   wx.navigateTo({
  //     url: '/pages/shop/shop',
  //   })
  // },

  // onNavigateToMore() {
  //   wx.navigateTo({
  //     url: '/pages/more/more',
  //   })
  // },

  // onNavigateToCafe() {
  //   wx.navigateTo({
  //     url: '/pages/cafe/cafe',
  //   })
  // },

  onNavigateToCategoryPage(e) {
    // console.log(e.currentTarget.dataset.cat)
    wx.navigateTo({
      url: `/pages/category/category?cat=${e.currentTarget.dataset.cat}`,
    })
  },

  // 获取首页数据
  getArticles: async function(pageSize=5, pageIndex=1) {
    const res = await wx.cloud.callFunction({
      name: 'getDataPageByFilter',
      data: {
        dbName: 'article',
        pageIndex: pageIndex,
        pageSize: pageSize,
        filter: {
        },
        orderBy: 'gmt_create'
      },
      // success: res => {  // success 是异步的
      //   // res.data 包含该记录的数据
      //   let oldArticles = this.data.articles  // 翻页数据拼接
      //   let newArticles = oldArticles.concat(res.result.data)
      //   //console.log(newArticles)
      //   this.setData({ articles: newArticles })
      //   console.log(this.data.articles)
      // },
      // fail: err => {
      //   console.error('[云函数]调用失败', err)
      // },
      // complete: res => {
      // }
    })
    // res.data 包含该记录的数据
    let oldArticles = this.data.articles  // 翻页数据拼接
    let newArticles = oldArticles.concat(res.result.data)
    this.setData({ articles: newArticles })
    // console.log(this.data.articles)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    await this.getArticles()
    // 获取每个article的作者信息，添加新字段userInfo
    
    // console.log(this.data.articles)
    // this.data.articles.forEach(function(i) {
    //   console.log(i.openid)
    // })
    // var openid = wx.getStorageSync("openid");
    // if (!openid || openid == '') {
    //   this.getUserOpenId();
    // } else {
    //   console.log("openid========" + openid);
    //   this.setData({
    //     openid: openid
    //   })
    // }
    var userInfo = wx.getStorageSync('userInfo')
    if(userInfo){
      this.setData({
        userInfo: userInfo,
        avatarUrl: userInfo.avatarUrl,
        // hasUserInfo: true
      })
      console.log(userInfo)
    }else{
      this.setData({
        isShowAddPersonView: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    let pageIndex = this.data.articles.length/5+1
    this.getArticles(5, pageIndex)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})