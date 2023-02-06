import cadastros from "../models/Cadastro.js"


class CadastroController{
    static listarCadastro = (req, res) => {
        cadastros.find((err, cadastros) => {r
            res.status(200).json(cadastros)
        })
    }

    static cadastrarCadastro = (req, res) => {
        let Cadastro = new cadastros(req.body)
        Cadastro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar`})
            } else{
                res.status(201).send(Cadastro.toJSON())
            }
        })
    }

    static atualizarCadastro = (req, res) => {
        const id = req.params.id
        cadastros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err){
            res.status(200).send({message: "Cadastro atualizado com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }

    static listarCadastroPorId = (req, res) => {
        const id = req.params.id
        cadastros.findById(id, (err, cadastros) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do Cadastro não foi encontrado`})
            } else {
                res.status(200).send(cadastros)
            }
        })
    }

    static excluirCadastro = (req, res) => {
        const id = req.params.id
        cadastros.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: "Cadastro removido com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }
}

export default CadastroController 