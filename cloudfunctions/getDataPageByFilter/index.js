// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database()


exports.main = async (event, context) => {
  const userInfo = event.userInfo

  var dbName = event.dbName;
  var orderBy = event.orderBy ? event.orderBy : "";
  var filter = event.filter ? event.filter : {};
  var pageIndex = event.pageIndex ? event.pageIndex : 1;
  var pageSize = event.pageSize ? event.pageSize : 10;
  const counResult = await db.collection(dbName).where(filter).count();
  const total = counResult.total;
  const totalPage = Math.ceil(total / pageSize); // 计算多少页
  var hasMore = pageIndex >= totalPage ? false : true; //是否还有分页数据


  return await db.collection(dbName)
    .orderBy(orderBy, 'desc')
    .where(filter)
    .skip((pageIndex - 1) * pageSize)
    .limit(pageSize)
    .get().then(res => {
      res.totalRecord = total;    //总记录条数
      res.totalPage = totalPage;  //总页数
      res.pageIndex = pageIndex;  //当前页
      res.hasMore = hasMore;      //是否还有下一页
      return res;
    });
}