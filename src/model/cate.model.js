const {DataTypes} = require('sequelize');
const seq = require('../db/seq');
const Cate = seq.define('Cate_user',{
	catename:{
		type:DataTypes.STRING,
		allowNull:false,
		unique:true,
		comment:'用户名,唯一字段'
	}
});
Cate.sync();
console.log("aa");
module.exports=Cate;