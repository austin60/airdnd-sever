const mongoose=require('mongoose') 

const reservSchema=mongoose.Schema({
    roomId:{ type:String, required:true},
    checkin:{ type:String, required:true},
    checkout:{ type:String, required:true},
    adults:{ type:Number, required:true},
    children:{ type:Number, required:true},
    infants:{ type:Number, required:true},
    pets:{ type:Number, required:true},
    nights:{ type:Number, required:true},
    cost:{ type:Number, required:true}
})

module.exports=mongoose.model('Airdndreserv',reservSchema);