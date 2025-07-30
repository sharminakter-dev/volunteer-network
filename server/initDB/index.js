// run this file to initialize fake datas -> node index.js

// External imports
const mongoose = require('mongoose');
require('dotenv').config({path:'../.env'});

// Internal imports
const Event = require('../models/eventModel');
const sampleData = require('./data')

// console.log(sampleData);

// mongo atlast connection
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.epeuytn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

async function main(){
    try{
        mongoose.connect(uri);
        console.log('connected to mongo Atlas successfully');
    }catch(err){
        console.log('Database connection failed',err);
    }
}
main();

// run this function to initialize fake data to mongo atlas
const initDb = async()=>{
    try{
        await Event.deleteMany({});
        await Event.insertMany(sampleData);
        console.log("Data was initialized")
    }catch(err){
        console.log(err);
    }
}

initDb();