// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
  // env: "cloud1-6gb3kr0dd5a291f1"
})
const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    //违规内容检测
    const result = await cloud.openapi.security.msgSecCheck({
      content: event.comment
    })
    if (result && result.errCode.toString() === '87014') {
      return {
        code: 500,
        msg: '内容含有违法违规内容',
        data: result
      }
    } else {
      let res = await db.collection('comment').add({
        data: {
          _openid: event._openid,
          avatarUrl: event.avatarUrl,
          nickName: event.nickName,
          comment: event.comment,
          gmtCreate: event.gmtCreate,
          article_id: event.article_id
        }
      }).then(res => {
        return res;
      })
      // let task = await db.collection('article').doc(event.id).update({
      //   data: {
      //     commentCnt: _.inc(1)
      //   }
      // })
      return { code: 200, msg: '评论成功', data: result }
    }
  } catch (err) {
    console.error(err)
    if (err.errCode.toString() === '87014') {
      return { code: 500, msg: '内容含有违法违规内容', data: err } 
    }
    return { code: 502, msg: '调用security接口异常', data: err }
  }
}