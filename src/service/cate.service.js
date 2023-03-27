const Cate = require('../model/cate.model.js');
class CateService{
	async addCate(cateName){
		const res = await Cate.create({catename:cateName});
		console.log(res)
		return res.dataValues
	}
	
	async getCateInfo({catename,id}){
		console.log({catename,id})
		const whereOpt = {}
		id&&Object.assign(whereOpt,{id});
		catename&&Object.assign(whereOpt,{catename});
		const res =await Cate.findOne({
			attributes:['id','catename'],
			where:whereOpt
		})
	return res?res.dataValues:null;
		
	}
	
	async serDeleCate(id){
		const res = await Cate.destroy({where:id})
		return res>0?true:false;
	}
	async serUpDate(id,catename){
		const upRes = await Cate.update(catename,{where:id});
		return upRes>0?true:false;
	}
	
	async serSearchList(pageNum,pageSize){
		const offset = (pageNum-1)*pageSize
		const {count ,rows} = await Cate.findAndCountAll({
			offset:offset,
			limit:pageSize*1
		})
		return {
			pageNum,
			pageSize,
			total:count,
			list:rows,
			offset:offset
		}
	}
}
module.exports = new CateService();