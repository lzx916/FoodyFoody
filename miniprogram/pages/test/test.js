// pages/test/test.js
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
    myData: null
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