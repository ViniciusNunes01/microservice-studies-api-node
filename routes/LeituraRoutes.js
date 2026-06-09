const express = require('express');
const router = express.Router();
const leituraController = require('../controllers/leituraController');

router.post('/leituras', leituraController.create);
router.get('/leituras', leituraController.findAll);
router.get('/leituras/:id', leituraController.findById);
router.put('/leituras/:id', leituraController.update);
router.delete('/leituras/:id', leituraController.delete);

module.exports = router;