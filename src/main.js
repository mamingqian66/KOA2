//1. 导入koa类
const {APP_PORT} = require('./config/config.default.js')

const app = require('./app/index.js')
//2.实例化koa对象

//4.中间件  ctx 记录所有http上下文的请求

//3.监听3000端口
app.listen(APP_PORT,()=>{
	console.log(`serve is running on http://localhost:${APP_PORT}`)
})

