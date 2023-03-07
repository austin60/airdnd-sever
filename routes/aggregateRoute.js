const express=require('express');
const AirdndModel=require('../model');
const signInModel=require('../signInModel');
const router=express.Router()

router.get('/username',async(req,res)=>{
   AirdndModel.aggregate([
        {
          $lookup: {
            from: 'airdnds', 
            localField: 'userId', 
            foreignField: '_id', 
            as: 'result'
          }
        }
      ]).then(result=>res.send(result)).catch(err=>console.log(err))
        
    }
  )
module.exports=router;