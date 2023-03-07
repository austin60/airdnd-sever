const mongoose=require('mongoose')

const airdndSchema= mongoose.Schema({
   place_desc:{ type:String, required:true},
   guest_space_access:{ type:String, required:true},
   host_adress:{ type:String, required:true},
   guests:{ type:Number, required:true},
   beds:{ type:Number, required:true},
   bedrooms:{ type:Number, required:true},
   bathrooms:{ type:Number, required:true},
   has_to_offer:{ type:[String], required:true},
   apartment_title:{ type:String, required:true},
   apartment_desc:{ type:[String], required:true},
   guest_type:{ type:String, required:true},
   price:{ type:String, required:true},
   host_type:{ type:String, required:true},
   anyofthese:{ type:[String], required:true},
   files:{ type:[Array], required:true},
   cancellation_policy:{ type:String, required:false},
   street:{ type:String, required:false},
   state:{ type:String, required:false},
   city:{ type:String, required:false},
   zip_code:{ type:String, required:false},
   country:{ type:String, required:false},
   apt:{ type:String, required:false},
   userId:{type:String, required:true}
   //house_rules:{ type:String, required:false},
})
module.exports=mongoose.model('Airdnd',airdndSchema);
