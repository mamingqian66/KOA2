const {DataTypes} = require('sequelize');
const seq = require('../db/seq');
// 第一个参数 是咱们数据表的名字  第二个是个对象  也就是咱们表当中每个字段的定义
const Article = seq.define('zd_article',{
	//id 会被咱们的sequelize 自动的创建并且维护
		title:{
			type:DataTypes.STRING,
			allowNull:false,
			unique:true,
			comment:'分类名,唯一字段'
		},
		content:{
			type:DataTypes.STRING,
			allowNull:false,
			comment:'文章内容'
		},
		cateid:{
			type:DataTypes.STRING,
			allowNull:false,
			defaultValue:0,
			comment:'文章id'
		},
		status:{
			type:DataTypes.STRING,
			allowNull:false,
			defaultValue:0,
			comment:'0默认下架,1是上架'
		}
});
 Article.sync();
module.exports = Article;