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

//comment 代表字段描述,defaultValue这个字段的默认值,type 代表数据类型
//unique 是否重复
//status 什么意义
// 记录状态  
// 文章是前端添加的  
// 删除  修改你状态（上架和下架功能） 查看文件 也就是单条查询接口 

// 通过何种方式去创建我的数据表
// 如果我数据库当中  有这个表 那么就强制删除这个表  并且从新生成一个表
 Article.sync();
// 抛出  
// 问一下  这三个字段是为什么  koa框架给你本身维护的三个字段
// 也就是说  你再创建任何一个表的时候  我不需要写这三个字段
module.exports = Article;