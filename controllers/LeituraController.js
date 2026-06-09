const LeituraSensor = require('../models/LeituraSensor');

exports.create = async (req, res) => {
    try {
        const novaLeitura = new LeituraSensor(req.body);
        const leituraSalva = await novaLeitura.save();
        res.status(201).json(leituraSalva);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const leituras = await LeituraSensor.find();
        res.status(200).json(leituras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findById = async (req, res) => {
    try {
        const leitura = await LeituraSensor.findById(req.params.id);
        if (!leitura) return res.status(404).json({ message: 'Leitura não encontrada' });
        res.status(200).json(leitura);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const leituraAtualizada = await LeituraSensor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!leituraAtualizada) return res.status(404).json({ message: 'Leitura não encontrada' });
        res.status(200).json(leituraAtualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const leituraDeletada = await LeituraSensor.findByIdAndDelete(req.params.id);
        if (!leituraDeletada) return res.status(404).json({ message: 'Leitura não encontrada' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};