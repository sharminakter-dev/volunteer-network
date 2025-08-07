const express = require('express');
const router = express.Router();

// Internal imports
const User = require('../models/userModel');
const UserEvents = require('../models/userEventsModel')

router.route('/')
.get((req,res)=>{
    res.json('user')
})
.post(async(req,res)=>{
    try{
        const {uid, name, email, photoURL} = req.body;
        existingUser = await User.findOne({email:email});
        if(!existingUser){
            const newUser = await User({
                firebaseUid:uid,
                name, 
                email,
                avatar:photoURL
            });
            await newUser.save();
            res.send(newUser);
        }else{
            res.json('User already exist')
        }
    }catch(err){
        console.log(err);
    }
});

router.route('/events')
.get(async(req,res)=>{
    const {uid} = req.query;
    const userEvents = await UserEvents.find()
    .populate({path:'user',match:{firebaseUid:uid}});
    console.log(userEvents);
    res.send(userEvents)
})
.post(async(req,res)=>{
    const {uid} = req.query;
    const event = req.body;
    const user = await User.findOne({firebaseUid:uid});
    const userEvent = await UserEvents(event);
    userEvent.user = user._id;
    await userEvent.save()
    res.send(userEvent);
})

module.exports = router;