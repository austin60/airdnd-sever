const mongoose=require('mongoose');

const signInSchema=mongoose.Schema({
    country:{ type:String, required:true},
    phone:{ type:String, required:true},
    fname:{ type:String, required:true},
    lname:{ type:String, required:true},
    bday:{ type:String, required:true},
    email:{ type:String, required:true}
})

module.exports=mongoose.model('AirDndSignIn',signInSchema)