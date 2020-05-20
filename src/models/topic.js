const mongoose = require('../database');

const TopicSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        require: true
    },
    
    description: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    },

    session: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'session',
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


const Topic = mongoose.model('topic', TopicSchema);

module.exports = Topic;