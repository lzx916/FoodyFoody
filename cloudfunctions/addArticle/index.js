// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const openid = event.userInfo.openId
  try {
    let res = await db.collection('article').add({
      data: {
        _openid: openid,
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        title: event.title,
        content: event.content,
        images: event.images,
        addres: event.addres,
        likes: 0,
        commentCnt: 0,
        tags: event.tags,
        status: 1,
        gmtCreate: new Date(),
        gmtModified: new Date()
      }
    }).then(res => {
      // res._id = event._id;
      return res;
    })
    // await db.collection('article').doc(event.id).update({
    //   data: {
    //     poll_count: _.inc(1)
    //   }
    // })
    return res;
  } catch (e) {
    console.error(e)
  }
}