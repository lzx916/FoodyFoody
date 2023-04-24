// pages/publish/publish.js
const cloud = wx.cloud;
cloud.init({
  env: 'cloud1-6gb3kr0dd5a291f1'
});

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
    // isTagActive: false,
    selectedIds: [],
  },

  // 获取点击的标签
  onTagTap: function (e) {
    const self = this
    // const selectedTags = self.data.selectedTags
    const index = e.currentTarget.dataset.index
    let flag = true // 用于判断selectedIds中是否存在了选中的标签index
    for (let i = 0; i < self.data.selectedIds.length; i++) { //判断是否存在selectedIds中
      if (self.data.selectedIds[i] === index) {
        self.data.selectedIds.splice(i, 1); // 已经选择了就移除
        self.data.selectedTags.splice(i, 1)
        self.setData({ // 重新渲染
          selectedIds: self.data.selectedIds,
          selectedTags: self.data.selectedTags
        })
        flag = false;
        break; // 如果已经存在,一定要终止循环
      }
    }
    if (flag) { // 不存在,则添加index和tag
      self.data.selectedIds.push(index);
      self.data.selectedTags.push(self.data.tags[index])
      self.setData({
        selectedIds: self.data.selectedIds,
        selectedTags: self.data.selectedTags
      })
    }
    // console.log(this.data.selectedTags)
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
        tags: this.data.selectedTags
      },
      success: res => {
        // console.log(res)
        wx.showToast({
          icon: 'success',
          title: '发布成功🤞',
        });
        setTimeout(() => {
          wx.hideToast()
          //关闭提示后跳转
          wx.switchTab({
            url: '../homelzx/homelzx',
          })
        }, 1500);
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
      complete: res => {}
    })
  },

  delImage(e) {
    let index = e.currentTarget.dataset.index
    // console.log(index)
    let newImageSrcs = this.data.imageSrc
    newImageSrcs.splice(index, 1)
    let newImageCount = this.data.imageCount - 1
    this.setData({
      imageSrc: newImageSrcs,
      imageCount: newImageCount
    })
  },

  chooseImage() {
    // wx.chooseImage({
    //   count: 1,
    //   success: res => {
    //     let newImageSrcs = this.data.imageSrc
    //     newImageSrcs.push(res.tempFilePaths[0])
    //     let newImageCount = this.data.imageCount + 1
    //     this.setData({
    //       imageSrc: newImageSrcs,
    //       imageCount: newImageCount
    //     });
    //   }
    // });
    wx.chooseMedia({
      count: 1,
      mediaType: ['image', 'video'],
      success: res => {
        const tempFilePath = res.tempFiles[0].tempFilePath;
        // 上传文件到云存储
        cloud.uploadFile({
          cloudPath: 'media/' + new Date().getTime() + '.' + tempFilePath.split('.').pop(),
          filePath: tempFilePath,
          success: res => {
            // console.log('上传成功', res.fileID);
            let images = this.data.imageSrc
            images.push(res.fileID)
            let newImageCount = this.data.imageCount + 1
            this.setData({
              imageSrc: images,
              imageCount: newImageCount
            })
          },
          fail: console.error
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