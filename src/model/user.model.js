const {DataTypes} = require('sequelize');
const seq = require('../db/seq');
const User = seq.define('zd_user',{
	//id 会被咱们的sequelize 自动的创建并且维护
	username:{
		type:DataTypes.STRING,
		allowNull:false,
		unique:true,
		comment:'用户名,唯一字段'
	},
	password:{
		type:DataTypes.CHAR(64),
		allowNull:false,
		comment:'密码'
	},
	is_admin:{
		type:DataTypes.BOOLEAN,
		allowNull:false,
		defaultValue:0,
		comment:'是否为管理员 0 不是管理员 1是管理员'
	}
});

//User.sync({force:true});

module.exports = User;