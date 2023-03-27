const {createUser,deleteUser,UpdateUser,userlist} = require('../service/user.service');
const md5 = require('md5');
class UserController{
	//添加用户
	async add(ctx,next){
		// console.log(ctx.request.body);
		const {username,password} = ctx.request.body;
		// ctx.body = "这是用户的添加方法";
		const res = await createUser(username,password);
		
		ctx.body={
			code:0,
			message:'添加用户成功',
			result:{
				id:res.id,
				username:res.username
			}
		}
	}
	
	//删除用户
	async delUser(ctx,next){
		const {id} = ctx.params;
		const res = await deleteUser({id});
		console.log(res);
		if(res){
			ctx.body = {
				code:200,
				message:'删除用户成功',
				retult:''
			}
		}else{
			ctx.body={
				code:201,
				message:'不存在该用户',
				result:''
			}
		}
	}
	
	//修改用户密码
	async UpdateUser(ctx,next){
		const {id} = ctx.params;
	    ctx.request.body.password = md5(ctx.request.body.password);
		const data = ctx.request.body;
		const res = await UpdateUser(id,data);
		if(res){
			ctx.body = {
				code:200,
				message:'修改成功',
				return :''
			}
		}else{
			ctx.body = {
				code:201,
				message:'找不到该用户',
				return :''
			}
		}
		
	}
	
	// 查询列表数据带分页
	async user_findAll(ctx,next){
		const {pageNum=1,pageSize=2} = ctx.request.query;
		const res = await userlist(pageNum,pageSize);
		if(res){
			ctx.body = {
				code:200,
				message:'查询成功',
				data:res
			}
		}else{
			ctx.body = {
				code:201,
				message:'查询失败',
				data:''
			}
		}
		
	}
}
module.exports = new UserController();