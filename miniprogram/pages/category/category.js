// pages/category/category.js
// var _animation
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [{
      name: "餐厅",
      src: "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/category_new/canting.png"
    }, {
      name: "咖啡店",
      src: "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/category_new/kafei.png"
    }, {
      name: "水果铺",
      src: "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/category_new/shanzhu.png"
    }, {
      name: "便利店",
      src: "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/category_new/shangdian.png"
    }, {
      name: "书屋",
      src: "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/category_new/tushu.png"
    }, {
      name: "师大文创",
      src: "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/category_new/jinianpin.png"
    }, {
      name: "运动一下",
      src: "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/category_new/yundong.png"
    }, {
      name: "校园周边",
      src: "cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/category_new/zhoubian.png"
    }],
    places: []
  },

  updatePlaces: async function(e) {
    this.setData({
      places: []
    })
    let cate = e.currentTarget.dataset.cate
    // console.log(e.currentTarget.dataset.cate)
    await this.getPlaces(5,1,cate)
  },

  // 获取place数据
  getPlaces: async function (pageSize = 5, pageIndex = 1, category = '餐厅') {
    const res = await wx.cloud.callFunction({
      name: 'getDataPageByFilter',
      data: {
        dbName: 'place',
        pageIndex: pageIndex,
        pageSize: pageSize,
        filter: {
          category: category
        },
        orderBy: 'gmt_create'
      },
    })
    // res.data 包含该记录的数据
    let oldPlaces = this.data.places // 翻页数据拼接
    let newplaces = oldPlaces.concat(res.result.data)
    this.setData({
      places: newplaces
    })
    // console.log(this.data.articles)
  },

  // 点击图片放大
  // imageTap: function(e) {
  //   // console.log(e.currentTarget.dataset.index)
  //   this.scale()
  //   this.setData({
  //     animationItem: _animation.export()
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    console.log(options.cat)  // 路由参数
    await this.getPlaces(5, 1, options.cat)
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
    // _animation = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: 'linear',
    // })
  },

  scale: function () {
    // 旋转同时放大
    _animation.scale(2, 2).step()
    // this.setData({
    //   animationData: this.animation.export()
    // })
  },

  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({
      duration: 1000
    })
    this.setData({
      animationData: this.animation.export()
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})