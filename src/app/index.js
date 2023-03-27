//1、 导入koa类
const Koa = require('koa');
//2、 引入koa-body
const KoaBody = require('koa-body');
const cors = require('koa2-cors'); 
const userRouter = require('../router/user.route.js')
const cateRouter = require('../router/cate.route.js')
const articleRouter = require('../router/article.router.js')

//2、 实例化koa对象
const app = new Koa;
//注册跨域要在注册路由之前
app.use(cors());
app.use(KoaBody());
app.use(userRouter.routes());
app.use(cateRouter.routes());
app.use(articleRouter.routes());

module.exports=app;
