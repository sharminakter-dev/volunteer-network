const express = require('express');
const router = express.Router();
const { getAuth } = require('firebase-admin/auth');

// Internal imports
const User = require('../models/userModel');
const UserEvents = require('../models/userEventsModel');
const { auth } = require('firebase-admin');

router.route('/')
.get(async(req,res)=>{
    try{
        const allUsers = await User.find({})
        res.send(allUsers);
    }catch(err){
        console.log(err)
    }
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

router.get('/allEvents',async(req,res)=>{
    const allEventsWithNames = await UserEvents.find({}).populate('user')
    res.send(allEventsWithNames)
})

router.route('/events')
.get(async(req,res)=>{
    try{
        const {uid} = req.query;
        const tokenWithBearer = req.headers.authorization;
        if(tokenWithBearer && tokenWithBearer.startsWith('Bearer')){
            idToken = tokenWithBearer.split(' ')[1];
            const decodedToken = await getAuth().verifyIdToken(idToken);
            const tokenUid = decodedToken.uid;
            if(tokenUid === uid){
                const user = await User.findOne({firebaseUid:uid}).select('_id')
                const userEvents = await UserEvents.find({user:user._id})
                res.send(userEvents);     
            }   
        }        
    }catch(err){
        console.log(err);
    }
})
.post(async(req,res)=>{
    try{
        const {uid} = req.query;
        const event = req.body;
        const user = await User.findOne({firebaseUid:uid});
        const userEvent = await UserEvents(event);
        userEvent.user = user._id;
        await userEvent.save();
        res.send(userEvent);
    }catch(err){
        console.log(err);
    }
})
.delete(async(req,res)=>{
    const {eventId} = req.query;
    const deletedEvent = await UserEvents.findByIdAndDelete(eventId);
    res.send(deletedEvent)
})
router.delete('/events/:id', async(req,res)=>{
    const {uid} = req.query;
    const eventId = req.params.id;
    const tokenWithBearer = req.headers.authorization
    // console.log(tokenWithBearer)
    if(tokenWithBearer && tokenWithBearer.startsWith('Bearer')){
        idToken = tokenWithBearer.split(' ')[1];
        const decodedToken = await getAuth().verifyIdToken(idToken)
        const tokenUid = decodedToken.uid;
        if(tokenUid == uid){
            const deletedEvent = await UserEvents.findByIdAndDelete(eventId)
            res.send(deletedEvent);
        }
    }
})

module.exports = router;