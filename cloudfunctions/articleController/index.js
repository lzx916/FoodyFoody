// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('article').get()
    .then(res => {
      console.log(res)
      return res
    })
  // return "data"
  // var orderBy = event.orderBy ? event.orderBy : "";
  // var dbName = event.dbName; //集合
  // var filter = event.filter ? event.filter : {};
  // var pageIndex = event.pageIndex ? event.pageIndex : 1;
  // var pageSize = event.pageSize ? event.pageSize : 10;
  // const counResult = await db.collection(dbName).where(filter).count;
  // const total = counResult.total;
  // const totalPage = Math.ceil(total / pageSize); // 计算多少页
  // var hasMore; // 返回前端是否还有数据
  // if (pageIndex > totalPage || pageIndex == totalPage) { //如果没有数据了，就返回false
  //   hasMore = false;
  // } else {
  //   hasMore = true;
  // }
  // return await db.collection(dbName)
  //   .orderBy(orderBy, 'desc')
  //   .where(filter)
  //   .skip((pageIndex - 1) * pageSize)
  //   .limit(pageSize)
  //   .get().then(res => {
  //     res.hasMore = hasMore;
  //     return res;
  //   });
}