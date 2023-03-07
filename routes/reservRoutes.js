const express=require('express');
const reservModel=require('../reservModel');
const router=express.Router();

//make/post reservation
router.post("/reservation",async(req,res)=>{
    try{
        const newReservation=new reservModel({
            roomId:req.body.roomId,
            checkin:req.body.checkin,
            checkout:req.body.checkout,
            adults:req.body.adults,
            children:req.body.children,
            infants:req.body.infants,
            pets:req.body.pets,
            nights:req.body.nights,
            cost:req.body.cost,
        })
        await newReservation.save()
        res.status(201).json(newReservation)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
})

//get all reservations (with spec id)
router.get("/reservations",async(req,res)=>{
    try{
        const Reservations=await reservModel.find()
        res.status(200).json(Reservations)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
})

//delete reservation
router.delete("/reservation/delete/:id",async(req,res)=>{
    try{
       const delReservation=await reservModel.findByIdAndDelete(req.params.id);
       res.status(200).json(delReservation)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
})

module.exports=router;