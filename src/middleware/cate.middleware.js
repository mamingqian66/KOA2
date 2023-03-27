const {getCateInfo} = require('../service/cate.service.js')
const cateValidator = async (ctx,next)=>{
	const {catename} = ctx.request.body;
	if(!catename){
		ctx.body = {
			code:200,
			message:'名称不能为空',
			result:''
		}
	return
	}
	await next()
}
const verifyCate = async (ctx,next)=>{
	const {catename} = ctx.request.body;
	const res = await getCateInfo({catename});
	if(res){
		ctx.body = {
			code:201,
			message:'已经存在该值',
			data:res
		}
	return	
	}
	await next()
}
module.exports = {
	cateValidator,
	verifyCate
}
	
	
