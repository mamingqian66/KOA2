const {getTitleSer} = require('../service/article.service.js')
const articleValidator = async(ctx,next)=>{
	const {title,content,cateid,status} = ctx.request.body;
	if(!title||!content||!cateid){
		ctx.response.body = {
			code:201,
			message:'必选项不能为空',
			data:''
		}
	return 
	}
	await next();
}
const verifyArticle = async (ctx,next)=>{
	const {title} = ctx.request.body;
	const res = await getTitleSer({title});
	if(res){
		ctx.response.body = {
			code:201,
			message:'该title已存在',
			data:res
		}
		return;
	}
 	await next();
}
module.exports = {
	articleValidator,
	verifyArticle
}