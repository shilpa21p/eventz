const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[ true, "provide event name"],
        unique: true,
        trim: true,
        maxlength: [100, " event name cant characters exceeded."]
    },
    description: {
        type: String,
        required:[true, "provide description"],
        trim: true,
        minLength: 20,
        maxlength: [250, "Max description length are 250 characters."]
    },
    eventDate: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required:true
    },
    isEnabled: {
        type:Boolean,
        default: false
    },
   
} , {
    collection: "events",
    timestamps:true
})

module.exports = mongoose.model("Event", EventSchema)