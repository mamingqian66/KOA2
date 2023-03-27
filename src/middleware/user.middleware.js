const {getUserInfo} = require('../service/user.service.js');
const md5 = require('md5')
const userValidator = async (ctx, next) => {
	const {username,password} = ctx.request.body;
	if (!username || !password) {
		ctx.status = 400;
		ctx.body = {
			code: 10001,
			message: '用户名或者密码为空',
			data: '',
		}
		return;
	}
	await next();
}
//检测用户是否存在与数据库当中
const verifyUser = async (ctx, next) => {
	const {username} = ctx.request.body;
	const is_user = await getUserInfo({username});
	if(is_user){
		ctx.body = {
			code: 10002,
			message: '用户已经存在，请更改用户名',
			data: '',
		}
		return;
	}
	await next();
}
const isLogin = async(ctx,next)=>{
	const {username,password} = ctx.request.body;
	const res = await getUserInfo({username});
			//检测用户是否登录成功
			if(res){
				console.log({username});
				//如果用户存在 那么可以执行登录 同时比对密码是否正确
				if(password==res.password){
					//登录成功
					ctx.body = {
						meta:{
							status: 200
						},
						message: '登录成功',
						data: {
							token:"asdbsjabcjbj"
						}
					};
				}else{
					//密码错误
					ctx.body = {
						code: 201,
						message: '密码错误',
						data: {}
					};
				}
			}else{
				//如果用户不存在  那么证明用户名有错
				ctx.body = {
					code: 201,
					message: '用户不存在',
					data: {}
				};
			}
		}

module.exports = {
	userValidator,
	verifyUser ,
	isLogin
}