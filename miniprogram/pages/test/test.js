// pages/publish/publish.js
const util = require("../../utils/util.js")
const app = getApp()
const db = wx.cloud.database({
  env: app.env
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myData: null,
    buttons: [{text: '取消'}, {text: '确认'}],
    article: {
      title: '这里是文章标题',
      author: '作者名字',
      time: '2018-03-01',
      img: 'http://img.hb.aicdn.com/c2208ca886da755dd00d495bbd6d905df8f94e7b3c2e1-q7V3dF_fw658',
      content: [
        {
          type: 'p',
          text: '这里是正文内容'
        },
        {
          type: 'p',
          text: '这里是正文内容'
        },
        {
          type: 'h2',
          text: '这里是副标题'
        },
        {
          type: 'p',
          text: '这里是正文内容'
        },
        {
          type: 'img',
          src: 'http://img.hb.aicdn.com/4b4c46d9b9eb55d6878bfcf623ab0c12c1d3f3c8bd5e5-DGNMKg_fw658',
          text: '这里是图片的描述文字'
        }
      ]
    }
  },

  addArticle: function () {
    const userInfo = wx.getStorageSync("userInfo")
    wx.cloud.callFunction({
      name: 'addArticle',
      data: {
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName,
        title: "artcicle",
        content: "event.content",
        images: ["图片1", "图片2"],
        addres: "event.addres",
        tags: ["标签1", "标签2"]
      },
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.error('[云函数]调用失败', err)
      },
      complete: res => { }
    })
  },

  getUserInfo: function () {
    const userInfo = wx.getStorageSync('userInfo')
    console.log(userInfo)
  },

  addUser: function () {
    wx.getUserProfile({
      desc: '用于完善会员资料',  // 授权说明
      success: (res) => {
        const userInfo = res.userInfo  // 用户信息
        wx.cloud.callFunction({
          name: 'saveUser',
          data: {
            _openid: wx.getStorageSync("openid"),
            avatarUrl: userInfo.avatarUrl,
            nickName: userInfo.nickName,
            gender: userInfo.gender,
            birthDay: userInfo.birthDay,
            school: "ECNU",
            role: 0,
          },
          success: res => {
            console.log(res)
          },
          fail: err => {
            console.error('[云函数]调用失败', err)
          },
          complete: res => { }
        })
      }
    })

  },
  //查看评论
  getComments: function () {
    wx.cloud.callFunction({
      name: 'getDataPageByFilter',
      data: {
        dbName: 'comment', //dbName必传
        pageIndex: 1,
        pageSize: 10,
        filter: {
          article_id: "fc8e6465642a64080728bb49201a102f"
        },
        orderBy: 'gmtCreate'
      },
      success: res => {
        // res.data 包含该记录的数据
        console.log(res)
        this.setData({ myData: res.result.data })
      },
      fail: err => {
        console.error('[云函数]调用失败', err)
      },
      complete: res => {

      }
    })
  },

  //评论
  addComment: function () {
    wx.cloud.callFunction({
      name: 'addComment',
      data: {
        article_id: "fc8e6465642a64080728bb49201a102f",
        comment: "评论3",
        _openid: "event._openid",
        avatarUrl: "event.avatarUrl",
        nickName: "event.nickName",
        gmtCreate: new Date()
      },
      success: res => {
        // res.data 包含该记录的数据
        console.log(res)
      },
      fail: err => {
        console.error('[云函数]调用失败', err)
      },
      complete: res => {

      }
    })
  },

  handleTap: function () {
    wx.cloud.callFunction({
      name: 'getDataPageByFilter',
      data: {
        dbName: 'article', //dbName必传
        pageIndex: 1,
        pageSize: 5,
        filter: {
        },
        orderBy: 'gmt_create'
      },
      success: res => {
        // res.data 包含该记录的数据
        console.log(res)
        this.setData({ myData: res.result.data })
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