// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
        id: 1,
        name: '川菜',
        foods: [{
          name: '酸菜鱼',
          price: 7,
          image: 'ccloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/酸菜鱼.jpg'
        }, {
          name: '麻婆豆腐',
          price: 17,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/麻婆豆腐.jpg	'
        }, {
          name: '水煮鱼',
          price: 17,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/水煮鱼.jpg	'
        }, {
          name: '宫保鸡丁',
          price: 7,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/宫保鸡丁.jpg	'
        }, {
          name: '回锅肉',
          price: 7,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/回锅肉.jpg	'
        }],
      },
      {
        id: 2,
        name: '闽菜',
        foods: [{
          name: '鱼丸汤',
          price: 7,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/鱼丸汤.jpg		'
        }, {
          name: '八爷鸭',
          price: 7,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/八爷鸭.jpg	'
        }, {
          name: '老鸭炖汤',
          price: 17,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/老鸭炖汤.jpg	'
        }, {
          name: '海蛎煎',
          price: 7,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/海蛎煎.jpg	'
        }]
      },
      {
        id: 3,
        name: '粤菜',
        foods: [{
          name: '清蒸鱼',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/清蒸鱼.jpg	'
        }, {
          name: '白切鸡',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/白切鸡.jpg	'
        }, {
          name: '烧腊',
          price: 7,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/烧腊.jpg	'
        }, {
          name: '干炒牛河',
          price: 7,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/干炒牛河.jpg	'
        }, {
          name: '烧卖',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/烧卖.jpg	'
        }, {
          name: '凤爪',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/凤爪.jpg	'
        }],
      },
      {
        id: 4,
        name: '面食',
        foods: [{
          name: '馒头',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/馒头.jpg	'
        }, {
          name: '面条',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/面条.jpg	'
        }, {
          name: '饺子',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/饺子.jpg	'
        }, {
          name: '包子',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/包子.jpg	'
        }, {
          name: '粉丝',
          price: 12,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/粉丝.jpg	'
        }],
      },
      {
        id: 5,
        name: '韩餐',
        foods: [{
          name: '韩式冷面',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/韩式冷面.jpg'
        }, {
          name: '泡菜',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/泡菜.jpg	'
        }, {
          name: '韩式炸鸡',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/韩式炸鸡.jpg	'
        }, {
          name: '石锅拌饭',
          price: 10,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/石锅拌饭.jpg	'
        }],
      },
      {
        id: 6,
        name: '糕点',
        foods: [{
          name: '蛋糕',
          price: 13,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/蛋糕.jpg	'
        }, {
          name: '饼干',
          price: 13,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/饼干.jpg	'
        }, {
          name: '麻花',
          price: 13,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/麻花.jpg	'
        }, {
          name: '糯米糍',
          price: 13,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/糯米糍.jpg	'
        }, {
          name: '油条',
          price: 14,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/油条.jpg	'
        }, {
          name: '粽子',
          price: 16,
          image: 'cloud://cloud1-6gb3kr0dd5a291f1.636c-cloud1-6gb3kr0dd5a291f1-1317379084/测试分类页图片/foods/粽子.jpg	'
        }],
      }
    ],
    activeIndex: 0,
    scrollH: 1500,
    toView: 'a0',
    scrollTop: 0,
    cupNumber: 0,
    sumMonney: 0,
    loading: false,
    currentType: 0,
    currentIndex: 0,
  },
  selectFood: function (e) {
    var foods = e.currentTarget.dataset.foods
    console.log(foods)
  },
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.index
    console.log(index)
    this.setData({
      activeIndex: index,
      toView: 'a' + index,
    })
  },
  scroll: function (e) {
    console.log(e)
    var dis = e.detail.scrollTop
    if (dis > 0 && dis < 388) {
      this.setData({
        activeIndex: 0,
      })
    }
    if (dis > 388 && dis < 848.7999877929688) {
      this.setData({
        activeIndex: 1,
      })
    }
    if (dis > 848.7999877929688 && dis < 1309.5999755859375) {
      this.setData({
        activeIndex: 2,
      })
    }
    if (dis > 1309.5999755859375 && dis < 1770.4000244140625) {
      this.setData({
        activeIndex: 3,
      })
    }
    if (dis > 1770.4000244140625 && dis < 2158.39990234375) {
      this.setData({
        activeIndex: 4,
      })
    }
    if (dis > 2158.39990234375) {
      this.setData({
        activeIndex: 5,
      })
    }
  },

  selectInfo(e) {
    var type = e.currentTarget.dataset.type;
    var index = e.currentTarget.dataset.index;
    this.setData({
      showModalStatus: !this.data.showModalStatus,
      currentType: type,
      currentIndex: index,
      sizeIndex: 0,
      sugarIndex: 0,
      temIndex: 0
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