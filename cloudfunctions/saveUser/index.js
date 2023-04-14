// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({env: cloud.DYNAMIC_CURRENT_ENV})  // API 调用都保持和云函数当前所在环境一致
const db = cloud.database()
const _ = db.command


// 云函数入口函数
exports.main = async(event, context) => {
  try {
    return await db.collection('user').add({
      data: {
        _id: event._openid,
        _openid:event._openid,
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        gender: event.gender,
        birthDay:event.birthDay,
        school: event.school,
        role: event.role,
        gmtCreate: new Date()
      }
    }).then(res => {
      return res;
    })
  } catch (e) {
    console.error(e)
  }
}