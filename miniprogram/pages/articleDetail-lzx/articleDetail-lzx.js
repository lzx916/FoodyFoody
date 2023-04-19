// pages/articleDetail-lzx/articleDetail-lzx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    comments: [],
    inputValue: null,
  },

  // 获取文章
  getArticle: function (articleId) {
    wx.cloud.callFunction({
        // 云函数名称
        name: 'getArticleById',
        data: {
          id: articleId
        }
      })
      .then(res => {
        console.log(res.result.data)
        this.setData({
          article: res.result.data
        })
      })
  },

  //获取评论
  getComments: function (articleId) {
    // console.log('articleId', articleId)
    wx.cloud.callFunction({
      name: 'getDataPageByFilter',
      data: {
        dbName: 'comment', //dbName必传
        pageIndex: 1,
        pageSize: 10,
        filter: {
          article_id: articleId
        },
        orderBy: 'gmtCreate'
      },
      success: res => {
        // res.data 包含该记录的数据
        console.log(res)
        // 格式化日期
        res.result.data.forEach(function (item, index, array) {
          const d = new Date(item.gmtCreate)
          item.gmtCreate = d.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })
          console.log(item)
        })
        this.setData({
          comments: res.result.data
        })
      },
      fail: err => {
        console.error('[云函数]调用失败', err)
      },
      complete: res => {

      }
    })
  },

  // 获取评论内容
  onInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  //评论
  addComment: function (e) {
    // console.log(e)
    const articleId = this.data.article._id
    const userInfo = wx.getStorageSync('userInfo')
    const openid = wx.getStorageSync('openid')
    wx.cloud.callFunction({
      name: 'addComment',
      data: {
        article_id: articleId,
        comment: this.data.inputValue,
        _openid: openid,
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName,
        gmtCreate: new Date()
      },
      success: res => {
        // res.data 包含该记录的数据
        console.log(res)
        this.setData({
          inputValue: ''  // 评论后清空评论输入框
        })
        this.getComments(articleId)
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
    const articleId = options.id
    this.getComments(articleId)
    this.getArticle(articleId)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})