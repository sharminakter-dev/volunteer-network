const express = require('express');
const router = express.Router();
const { getAuth } = require('firebase-admin/auth');

// Internal imports
const User = require('../models/userModel');
const UserEvents = require('../models/userEventsModel');

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
            // idToken comes from the client app
            const decodedToken = await getAuth().verifyIdToken(idToken)
            const tokenUid = decodedToken.uid;
            if(tokenUid === uid){
                const userEvents = await UserEvents.find()
                .populate({path:'user',match:{firebaseUid:uid}});
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

router.delete('/events/:id', async(req,res)=>{
    const {id} = req.params;
    const deletedEvent = await UserEvents.findByIdAndDelete(id)
    res.send(deletedEvent);
})

module.exports = router;