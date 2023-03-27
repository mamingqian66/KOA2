// 1、引入路由
const Router = require('koa-router');
const {add,delUser,UpdateUser,user_findAll}=require('../controller/user.controller.js')
const {userValidator,verifyUser,isLogin } = require('../middleware/user.middleware.js')
// 2、实例化对象 并且设置前缀
const router = new Router({prefix:'/users'});
router.post('/add',userValidator,verifyUser,add);
router.post('/login',isLogin);
router.delete('/delete/:id',delUser);
router.put('/UpdateUser/:id',UpdateUser);
router.get('/userFindAll',user_findAll)
module.exports = router;