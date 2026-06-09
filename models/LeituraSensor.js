const mongoose = require('mongoose');

const leituraSensorSchema = new mongoose.Schema({
    // Armazenando apenas o ID referencial da API Spring Boot
    culturaId: {
        type: Number, 
        required: true
    },
    temperaturaAr: {
        type: Number,
        required: true
    },
    umidadeSolo: {
        type: Number,
        required: true
    },
    dataLeitura: {
        type: Date,
        default: Date.now // Timestamp automático
    }
});

module.exports = mongoose.model('LeituraSensor', leituraSensorSchema);