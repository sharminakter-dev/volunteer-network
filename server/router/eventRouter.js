// external import
const express = require('express');
const router = express.Router();

// internal imports
const Event = require('../models/eventModel');

router.get('/',async(req,res)=>{
    try{
        const eventData = await Event.find({});
        // console.log(eventData);
        res.send(eventData);
    }catch(err){
        console.log(err);
    }
});


router.get('/search',async(req,res)=>{
    try{
        const query = req.query.q;
        const searchedEvents = await Event.find({
            title:{
                $regex: query,
                $options: "i"
            }
        });
        // console.log(searchedEvents);
        res.send(searchedEvents)
    }catch(err){
        console.log(err);
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        // console.log(id);
        const searchedEvent = await Event.findById(id);
        // console.log(searchedEvent);
        res.send(searchedEvent);
    }catch(err){
        console.log(err)
    }
});


module.exports = router