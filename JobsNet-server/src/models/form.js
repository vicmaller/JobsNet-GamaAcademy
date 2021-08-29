const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    profession: { type: String, required: true },
    date: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    houseNumber: { type: String, required: false},
    complement: { type: String, required: false },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    cep: { type: String, required: true },
    federativeUnit: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    celphone: { type: String, required: true },
    contatcPhone: { type: String, required: false},
    contatcName: { type: String, required: false },
    rg: { type: String, required: true },
    cpf: { type: String, required: true, unique:true},
    cnh: { type: String, required: true },
    cnhCategory: { type: String, required: false},
})

const model = mongoose.model('Register', schema);

module.exports = model