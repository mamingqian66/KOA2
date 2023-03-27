const {serAdd,SerdeleArt,getTitleSer,serUpdate,serGetList} = require('../service/article.service.js');
class articleController{
	async add(ctx,next){
		const {title,content,cateid,status} = ctx.request.body;
		const res = await serAdd({title,content,cateid,status})
		if(res){
			ctx.body = {
				code:200,
				message:'添加成功',
				data:res
			}
		}else{
			ctx.body = {
				code:201,
				message:'添加failed',
				data:''
			}
		}
	}
	
	async deleArt(ctx,next){
		const {id} = ctx.params;
		const res = await SerdeleArt({id});
		if(res){
			ctx.body = {
				code:200,
				message:'删除成功',
				data:res
			}
		}else{
			ctx.body = {
				code:200,
				message:'删除failed',
				data:''
			}
		}
	}
	
	async artGetOne(ctx,next){
		const {id} = ctx.params;
		const res = await getTitleSer({id})
		if(res){
			ctx.body = {
				code:200,
				message:'查询成功',
				data:res
			}
		}else{
			ctx.body = {
				code:201,
				message:'查询failed',
				data:''
			}
		}
	}
	
	async update(ctx,next){
		const id = ctx.params.id;
		const {title,content,cateid,status} = ctx.request.body;
		const res = await serUpdate(id,{title,content,cateid,status});
		if(res){
			ctx.body = {
				code:200,
				message:'更新成功',
				data:res
			}
		}else{
			ctx.body = {
				code:201,
				message:'更新failed',
				data:''
			}
		}
	}
	
	async getList(ctx,next){
		const {pageNum,pageSize} = ctx.request.query;
		const res = await serGetList(pageNum,pageSize);
		if(res){
			ctx.body = {
				code:200,
				message:'查询成功',
				data:res
			}
		}else{
			ctx.body = {
				code:200,
				message:'查询failed',
				data:''
			}
		}
	}
}
module.exports = new articleController();