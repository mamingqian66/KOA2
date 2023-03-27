const Router = require('koa-router');
const {addCate,deleCate,upDate,search,searchList} = require('../controller/cate.controller.js')
const {cateValidator,verifyCate} = require('../middleware/cate.middleware.js')
const router = new Router({prefix:'/cates'});
//添加数据
router.post('/add',cateValidator,verifyCate,addCate);
//删除数据
router.delete('/delete/:id',deleCate)
//更新数据
router.put('/upDate/:id',upDate)
//查询数据
router.get('/search/:id',search)
//查询数据列表
router.get('/searchList',searchList)
module.exports = router;