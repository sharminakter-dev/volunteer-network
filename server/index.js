// external import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const admin = require("firebase-admin");
// const serviceAccount = require("./volunteer-network-44dd9-firebase-adminsdk-fbsvc-785fa7b73f.json");
const path = require('path');

const app = express();
require('dotenv').config();

// internal imports
const Event = require('./models/eventModel');
const eventRouter = require('./router/eventRouter');
const usersRouter = require('./router/usersRouter');

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS);
// firebase initialization
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// mongo atlast connection
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.epeuytn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

main()
.then(()=>{
    console.log('DB connection successful');
})
.catch(err=>console.log(err));

async function main(){
    mongoose.connect(uri);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../client/dist')))
app.use('/events', eventRouter);
app.use('/users',usersRouter);


const port = process.env.PORT||3000;


// root
app.get('/api',(req,res)=>{
    res.json({'message':'Backend is running'});;
});

app.get(/(.*)/,(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../client/dist','index.html'))
})


app.listen(port,(err)=>{
    if(!err) console.log(`App is listening on port ${port}`);
    else console.log(err);
});
