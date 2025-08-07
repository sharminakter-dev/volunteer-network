const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userEventsSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    description:String,
    eventDate: Date,
    banner:{
        type:String,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});

const UserEvents = mongoose.model('UserEvents',userEventsSchema);

module.exports = UserEvents;