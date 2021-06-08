const router=require('express').Router();
const {addUser,getUser,getUsers,addTask,getTask,getTasks}=require('../controller/user')

router.post('/newUser',addUser)
router.get('/getUser/:id',getUser)
router.get('/getUsers',getUsers)
router.post('/newTask',addTask)
router.get('/getTask/:id',getTask)
router.get('/getTasks',getTasks)

module.exports=router;