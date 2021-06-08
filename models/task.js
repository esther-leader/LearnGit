var mongoose=require("mongoose");

const taskSchema = mongoose.Schema({
    name :{type:String,minlength:4},
    description:{type:String,require:true}, 
    done :{type:boolean ,defult:false},
    date: { type: Date, default: Date.now },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }})
module.exports=mongoose.model('task',taskSchema)
