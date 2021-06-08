var mongoose=require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        defult:''
    },
    password:{
        type:String,
        minlength:4,
        require:true,
        trim:true,
        maxlength:10
    },
    city:{
        type:String
    },
    tasks:[ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'task'
        }
    ]
})
module.exports=mongoose.model('user',userSchema)
