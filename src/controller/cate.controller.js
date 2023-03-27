const {addCate,serDeleCate,serUpDate,getCateInfo,serSearchList} = require('../service/cate.service.js')
class CateController{
	async addCate(ctx,next){
		const {catename} = ctx.request.body;
		const res = await addCate(catename);
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
	
	async deleCate(ctx,next){
		const id = ctx.params;
		const res = await serDeleCate(id);
		if(res){
			ctx.body = {
				code:200,
				message:'删除成功',
				data:''
			}
		}else{
			ctx.body = {
				code:201,
				message:'删除failed',
				data:''
			}
		}
	}
	
	async upDate(ctx,next){
		const id = ctx.params;
		const catename = ctx.request.body;
		const res = await serUpDate(id,catename);
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
	
	async search(ctx,next){
		const id = ctx.params;
		const res = await getCateInfo(id);
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
	
	async searchList(ctx,next){
		const {pageNum=1,pageSize=5} = ctx.request.query;
		const res =await serSearchList(pageNum,pageSize);
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
}
module.exports = new CateController();
