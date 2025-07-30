const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:String,
    eventDate: Date,
    banner:{
        type:String,
        default: "https://unsplash.com/photos/man-wearing-bib-kxk3rAa9thw",
        set:(v)=>v===''?"https://unsplash.com/photos/man-wearing-bib-kxk3rAa9thw":v
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;