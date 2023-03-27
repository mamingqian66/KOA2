const Router = require('koa-router');
const {add,deleArt,artGetOne,update,getList} = require('../controller/article.controller.js');
const {articleValidator,verifyArticle} = require('../middleware/article.middleware.js');
//add
const router = new Router({prefix:'/article'});
router.post('/add',articleValidator,verifyArticle,add)
router.get('/getOne/:id',artGetOne)
router.delete('/delete/:id',deleArt)
router.put('/update/:id',update)
router.get('/getList',getList)
module.exports = router;