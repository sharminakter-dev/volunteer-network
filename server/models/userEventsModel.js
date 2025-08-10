const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userEventsSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    description:String,
    date: Date,
   image:{
        url:{
            type:String,
            default:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            set:(v)=>v===''?"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v
        },
        fileName:String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});

const UserEvents = mongoose.model('UserEvents',userEventsSchema);

module.exports = UserEvents;