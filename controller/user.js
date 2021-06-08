const User = require('../models/user')
const Task = require('../models/task')

const addUser = async (req, res) => {
    console.log(req.body)
    var currentUser = new User(req.body);
    console.log("currentUser: ",currentUser)
    try {
        await currentUser.save(function (err, user) {
            if (err) {
                console.log(err)
                return err;
            }
            res.json({ status: 200, user: currentUser })
        });
    }
    catch (error) {
        res.json({ status: 400, message: error })
    }
}

const getUser=async(req,res)=>{
    console.log('getUser')
    var user;
    try{
        user=await User.findById(req.params.id);
        if(user==null){
            res.send('could not found user')
        }

    }catch(error){
        res.json({ status: 400, message: error })
    }
    res.json({myUser:user})
}

const getUsers=async(req,res)=>{
    console.log('getUsers')
    try{
        var users;
        users = await User.find()
        if(users==null){
            res.send('could not found user')
        }
    }
    catch(error){
        res.json({ status: 400, message: error })
    } 
    res.json({myUsers:users})

}

const addTask = async (req, res) => {
// add refences
    
    console.log(req.body)
    var currentTask = new Task(req.body);
    console.log("currentTask: ",currentTask)
    try {
        await currentTask.save();
        console.log("created currentTask: ",currentTask) 
    }
    catch (error) {
        res.json({ status: 400, message: error })
    }
    res.status(200).json({currentTask:currentTask})
}

const getTask=async(req,res)=>{
    console.log('getTask')
    var task;
    try{
        task=await Task.findById(req.params.id);
        if(task==null){
            res.send('could not found task')
        }
    }catch(error){
        res.json({ status: 400, message: error })
    }
    res.json({myTask:task})
}

const getTasks=async(req,res)=>{
    console.log('getTasks')
    try{
        var tasks;
        tasks = await Task.find()
        if(tasks==null){
            res.send('could not found user')
        }
    }
    catch(error){
        res.json({ status: 400, message: error })
    } 
    res.json({myUsers:users})

}
module.exports={
    addUser,
    getUser,
    getUsers,
    addTask,
    getTask,
    getTasks
}