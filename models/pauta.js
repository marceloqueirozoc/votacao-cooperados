const mongoose = require('../database');

const PautaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        unique: true,
        require: true
    },
    
    descricao: {
        type: String,
        required: true
    },

    data_criacao: {
        type: Date,
        default: Date.now
    }

    // duracao: {
    //     type: TimeRanges,
    //     required: true
    // }
});


const Pauta = mongoose.model('pauta', PautaSchema);

module.exports = Pauta;