const mongoose = require('mongoose');
const Forms = mongoose.model('Register');
const model = require('../models/form');

// list
exports.listForms = async (req, res) => {
  try {
    const data = await Forms.countDocuments();
    res.status(200).send({ data });
  } catch (e) {
    res.status(500).send({ message: 'Falha ao carregar os dados do formulário' });
  }
};

// create
exports.createForm = async (req, res) => {
  try {
    if (await model.findOne({ cpf: req.body.cpf })) {
      return res.status(400).send({ message: 'CPF JÁ CADASTRADO!' });
    }
    
    if (await model.findOne({ email: req.body.email })) {
      return res.status(400).send({ message: 'EMAIL JÁ CADASTRADO!' });
    }

    await model.create(req.body);
    return res.status(201).send({ message: 'Cadastro feito com sucesso!' });
  } catch (e) {
    return res.status(500).send({ message: 'Falha ao cadastrar o formulário.' });
  }
};