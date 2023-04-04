// pages/homelzx/homelzx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: [
      "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/swiper/4.jpg",
      "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/swiper/5.jpg",
      "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/swiper/6.jpg"
    ],
    articles: []
  },

  gotoDetail: function (e) {
    let id = e.currentTarget.dataset.index;
    // console.log(id)
    wx.navigateTo({
      url: `/pages/articleDetail-lzx/articleDetail-lzx?id=${id}`
    });
  },

  onNavigateToType() {
    wx.navigateTo({
      url: '/pages/type/type', // pages前加"/"绝对路径，否则相对路径
    })
  },

  onNavigateToDrink() {
    wx.navigateTo({
      url: '/pages/drink/drink',
    })
  },

  onNavigateToChineseFood() {
    wx.navigateTo({
      url: '/pages/chineseFood/chineseFood',
    })
  },

  onNavigateToWesternFood() {
    wx.navigateTo({
      url: '/pages/westernFood/westernFood',
    })
  },

  onNavigateToRestaurant() {
    wx.navigateTo({
      url: '/pages/restaurant/restaurant',
    })
  },

  // 获取首页数据
  getArticles(pageSize=5, pageIndex=1) {
    wx.cloud.callFunction({
      name: 'getDataPageByFilter',
      data: {
        dbName: 'article',
        pageIndex: pageIndex,
        pageSize: pageSize,
        filter: {
        },
        orderBy: 'gmt_create'
      },
      success: res => {
        // res.data 包含该记录的数据
        let oldArticles = this.data.articles  // 翻页数据拼接
        let newArticles = oldArticles.concat(res.result.data)
        // console.log(res)
        this.setData({ articles: newArticles })
      },
      fail: err => {
        console.error('[云函数]调用失败', err)
      },
      complete: res => {
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getArticles()
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