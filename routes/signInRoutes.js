const express=require('express');
const router=express.Router();
const signInModel=require('../signInModel');

//create
router.post("/signup",async(req,res)=>{
    try{
        const newUser= new signInModel({
            country:req.body.country,
            phone:req.body.phone,
            fname:req.body.fname,
            lname:req.body.lname,
            bday:req.body.bday,
            email:req.body.email
        })

        await newUser.save()
        res.status(201).json(newUser)
    }
    catch(err){
       res.status(404).json({message:err.mesage})
    }
})

//read
router.get("/users",async(req,res)=>{
    try{
      const users=await signInModel.find()
      res.status(201).json(users)
    }
    catch(err){
      res.status(500).json({message:err.message})
    }
})

//read  single user by phone 
router.post("/login/user",async(req,res)=>{
    try{
        const{phone}=req.body
        const user=await signInModel.findOne({phone:phone})
        if(!user){
            console.log("incorrect phone number ")
        }
        else{
            console.log('welcome')
            console.log(user)
            res.status(201).json(user)
        }     
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

//update
router.put("/update/user/:id",async(req,res)=>{
    try{
        const updateUser=await signInModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(201).json(updateUser)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
    
})
//delete
router.delete("/delete/user/:id",async(req,res)=>{
    try{
       const deletedUser=await signInModel.findByIdAndDelete(req.params.id)
       res.status(201).json(deletedUser)
    }
    catch(err){
       res.status(404).json({message:err.message})
    }
})
module.exports=router;