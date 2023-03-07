const express = require('express');
const AirdndModel=require('../model');
const router=express.Router();

//create info

router.post("/post",async(req,res)=>{
    try{
    const newRoom=new AirdndModel({
   place_desc:req.body.place_desc,
   guest_space_access:req.body.guest_space_access,
   host_adress:req.body.host_adress,
   host_location:req.body.host_location,
   guests:req.body.guests,
   beds:req.body.beds,
   bedrooms:req.body.bedrooms,
   bathrooms:req.body.bathrooms,
   has_to_offer:req.body.has_to_offer,
   apartment_title:req.body.apartment_title,
   apartment_desc:req.body.apartment_desc,
   guest_type:req.body.guest_type,
   price:req.body.price,
   host_type:req.body. host_type,
   anyofthese:req.body.anyofthese,
   files:req.body.files,
   cancellation_policy:req.body.cancellation_policy,
   house_rules:req.body.house_rules,
   street:req.body.street,
   state:req.body.state,
   city:req.body.city,
   zip_code:req.body.zip_code,
   country:req.body.country,
   apt:req.body.apt,
   userId:req.body.userId
    })
     await newRoom.save()
     res.status(201).json(newRoom)
    }
    catch(err){
      res.status(404).json({message:err.message})
    }
})

//read info

router.get("/",async(req,res)=>{
    try{
        const airdndPost=await AirdndModel.find()
        res.status(200).json(airdndPost)
     }
     catch(err){
        res.status(500).json({message:err.message})
     }
})

//read individual info

router.get("/:id",async(req,res)=>{
    
    try{
        const airdndPost=await AirdndModel.findById(req.params.id)
        res.status(200).json(airdndPost)
     }
     catch(err){
        res.status(404).json({message:err.message})
     }
})
//read all owners properties
router.get("/profile/:userId",async(req,res)=>{
    
    try{
         const property=await AirdndModel.find({userId:req.params.userId})
      
        res.status(200).json(property)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
//update info

router.put("/update/:_id",async(req,res)=>{
    const _id=req.params.id;
    const post=req.body;
    try{
       const AirdndRoom=await AirdndModel.findByIdAndUpdate(_id,post);
       res.status(200).json(AirdndRoom)
    }
    catch(err){
       res.status(404).json({mesage:err.message})
    }
})
//delete info
router.delete("/delete/:_id",async(req,res)=>{
    const _id=req.params.id;
    //const body=req.params.body;

    try{
    const airdndRoom=await AirdndModel.findByIdAndDelete(_id);
    res.status(201).json(airdndRoom)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
})


  


module.exports=router;