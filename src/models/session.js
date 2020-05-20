const mongoose = require('../database');

const SessionSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        require: true
    },
    
    description: {
        type: String,
        required: true
    },

    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'topic',
        require: true
    },

    vote: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vote',
        require: true
    }],

    createdAt: {
        type: Date,
        default: Date.now
    }



    // duracao: {
    //     type: TimeRanges,
    //     required: true
    // }
});


const Session = mongoose.model('session', SessionSchema);

module.exports = Session;