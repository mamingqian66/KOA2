const article = require('../model/article.model.js')
class articleService {
	async serAdd({title,content,cateid,status}){
		const res = await article.create({title,content,cateid,status});
		return res.dataValues
	}
	
	async getTitleSer({title,id}){
		const whereOpt ={} ;
		title&&Object.assign(whereOpt,{title});
		id&&Object.assign(whereOpt,{id})
		const res = await article.findOne({
			attributes:['title','id'],
			where:whereOpt
		})
		return res?res.dataValues:null;
	}
	
	async SerdeleArt(id){
		const res = await article.destroy({where:id});
		return res>0?true:false;
	}
	
	async serUpdate(id,{title,content,cateid,status}){
		const res = await article.update({title,content,cateid,status},{where:{id}});
		console.log(res);
		return res>0?true:false;
	}
	
	async serGetList(pageNum,pageSize){
		const offset = (pageNum-1)*pageSize;
		const {count ,rows} =await article.findAndCountAll({
			offset:offset,
			limit:pageSize*1
		})
		return {
			pageNum,
			pageSize,
			total:count,
			list: rows,
		}
	}
}
module.exports = new articleService()