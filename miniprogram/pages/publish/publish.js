// pages/publish/publish.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tags: ['河西', '河东', '丽娃', '秋林阁', '面食', '甜点', '川菜', '饮品'],
    selectedTags: [],
    imageSrc: [],
    imageCount: 0,
    title: '',
    content: '',
  },

  addArticle: function (e) {
    const formData = e.detail.value;
    // console.log(formData)
    const userInfo = wx.getStorageSync("userInfo")
    wx.cloud.callFunction({
      name: 'addArticle',
      data: {
        avatarUrl: userInfo.avatarUrl,
        nickName: userInfo.nickName,
        title: formData.title,
        content: formData.content,
        images: this.data.imageSrc,
        addres: "event.addres",
        tags: ["标签1", "标签2"]
      },
      success: res => {
        // console.log(res)
        wx.showToast({
          title: '发布成功🤞',
          success: function () {
            wx.switchTab({
              url: '../homelzx/homelzx'
            })
          }
        })
        this.setData({
          title: '',
          content: '',
          imageSrc: [],
          imageCount: 0
        })
      },
      fail: err => {
        console.error('[云函数]调用失败', err)
      },
      complete: res => { }
    })
  },

  delImage(e) {
    let index = e.currentTarget.dataset.index
    // console.log(index)
    let newImageSrcs = this.data.imageSrc
    newImageSrcs.splice(index, 1)
    let newImageCount = this.data.imageCount-1
    this.setData({
      imageSrc: newImageSrcs,
      imageCount: newImageCount
    })
  },

  chooseImage() {
    wx.chooseImage({
      count: 1,
      success: res => {
        let newImageSrcs = this.data.imageSrc
        newImageSrcs.push(res.tempFilePaths[0])
        let newImageCount = this.data.imageCount + 1
        this.setData({
          imageSrc: newImageSrcs,
          imageCount: newImageCount
        });
      }
    });
  },

  onSubmit(event) {
    console.log(event)
    const formData = event.detail.value;
    const note = {
      title: formData.title,
      content: formData.content,
      imageSrc: this.data.imageSrc,
      tags: this.data.selectedTags
    };
    // 将数据保存到后端服务器或本地存储中
    // ...
    // 提交成功后重置表单
    event.detail.form.reset();
    this.setData({
      imageSrc: '',
      tagIndex: [],
      selectedTags: []
    });
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