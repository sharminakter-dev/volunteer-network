// external import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const admin = require("firebase-admin");
const serviceAccount = require("./volunteer-network-44dd9-firebase-adminsdk-fbsvc-8acc580261.json");


// internal imports
const Event = require('./models/eventModel');
const eventRouter = require('./router/eventRouter');
const usersRouter = require('./router/usersRouter');

// firebase initialization
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
require('dotenv').config();

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
app.use('/events', eventRouter);
app.use('/users',usersRouter);


const port = process.env.PORT;


// root
app.get('/',(req,res)=>{
    res.json({'key':'hello world'});;
});

// // test mongo data
// app.get('/testEvent', async(req,res)=>{
//     const sampleEvent = new Event({
//         title:'Sample charity',
//         description:'Its is a sample charity',
//         eventDate: new Date(),
//         banner:''
//     }); 
//     await sampleEvent.save();
//     console.log('Sample event saved');
//     res.send('Sample event saved to mongo atlas')
// })



app.listen(port,(err)=>{
    if(!err) console.log(`App is listening on port ${port}`);
    else console.log(err);
});
