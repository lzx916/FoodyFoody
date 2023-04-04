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

  },

  handleTap: function() {
    console.log('按钮被点击了');
    wx.cloud.callFunction({
      name: 'articleController',
      data: {
        dbName: 'article',
        // pageIndex: _this.data.page,
        // pageSize: _this.data.size,
        // orderBy: 'create_time'
      },
      success: res => {
        // res.data 包含该记录的数据
        console.log(res)
      },
      fail: err => {
        console.error('[云函数]调用失败', err);
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