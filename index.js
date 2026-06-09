require('dotenv').config(); // CORRIGIDO: Carrega as variáveis do arquivo .env
const express = require('express');
const mongoose = require('mongoose');
const leituraRoutes = require('./routes/leituraRoutes');

const app = express();
app.use(express.json());

// CORRIGIDO: Conecta usando a variável de ambiente segura
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Conectado ao MongoDB Atlas com sucesso!');
    }).catch((err) => {
        console.error('Erro ao conectar no MongoDB:', err);
    });

app.use('/api', leituraRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Microsserviço IoT rodando na porta ${PORT}`);
});