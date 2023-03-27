const User = require('../model/user.model');
const md5 = require('md5'); 
class UserService {
	async createUser(username, password) {
		//todo
		
		const res = await User.create({username:username,password:md5(password)});
		
		return res.dataValues
	}
	
	
	async getUserInfo({id,username,password,is_admin}) {
		const whereOpt = {}
		id && Object.assign(whereOpt, {id})
		username && Object.assign(whereOpt, {username})
		password && Object.assign(whereOpt, {password})
		is_admin && Object.assign(whereOpt, {is_admin})
	
		const res = await User.findOne({
			attributes: ['id', 'username', 'password', 'is_admin'],
			where: whereOpt,
		})
		//console.log();
		return res ? res.dataValues : null
	}
	
	async deleteUser({id}){
		const res =await User.destroy({where:{id}});
		console.log(res);
		return res>0?true:false;
	}
	async UpdateUser(id,data){
		const res = await User.update(data,{where:{id}});
		return res[0] > 0 ? true : false
	}
	async userlist(pageNum, pageSize){
		const offset = (pageNum - 1) * pageSize
		const { count, rows } = await User.findAndCountAll({
				  offset: offset,
				  limit: pageSize * 1,
		})
		return {
			pageNum, 
			pageSize,
			total:count,
			list:rows
		}
	}
}

module.exports = new UserService();