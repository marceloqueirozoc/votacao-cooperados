const mongoose = require('../database');

const VoteSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true,
    },
    vote: {
        type: String,
        required: true,
    },

    session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'session',
        require: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Vote = mongoose.model('vote', VoteSchema);

module.exports = Vote;
