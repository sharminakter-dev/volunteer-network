// external import
const express = require('express');
const router = express.Router();
const multer  = require('multer')


// internal imports
const Event = require('../models/eventModel');
const {storage} = require('../cloudConfig.js')
const upload = multer({ storage });



router.route('/')
.get(async(req,res)=>{
    try{
        const eventData = await Event.find({});
        res.send(eventData);
    }catch(err){
        console.log(err);
    }
})
.post(upload.single('img'), async(req,res)=>{
    try{
        const url = req.file.path;
        const fileName = req.file.filename;
        const  event = req.body;
        event.image= {url,fileName};

        const newEvent = new Event(event);
        await newEvent.save();
        res.send(newEvent)
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
        res.send(searchedEvent);
    }catch(err){
        console.log(err)
    }
});


module.exports = router