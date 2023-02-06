import mongoose from "mongoose";

const cadastroSchema = new mongoose.Schema(
    {
        id: {type: String},
        nomecompleto: {type: String, required: true},
        cpf: {type: String, required: true},
        rg: {type: String, required: true},
        endereco: {type: String},
        cep: {type: Number},
        email: {type: String},
        telefone: {type: Number},
        datanascimento: {type: Date},
        sexo:{type: String}

    },
    {
        versionKey: false
    }
)

const cadastros = mongoose.model("cadastros", cadastroSchema)

export default cadastros