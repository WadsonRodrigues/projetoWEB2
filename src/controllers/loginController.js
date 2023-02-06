import login from "../models/Login.js"


class loginController{
    static listarLogin = (req, res) => {
        login.find()
            .populate('cadastro')
            .exec((err, login) => {
                res.status(200).json(login)
        })
    }


    static cadastrarLogin = (req, res) => {
        let login = new login(req.body)
        log.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o Login`})
            } else{
                res.status(201).send(log.toJSON())
            }
        })
    }

    static atualizarLogin = (req, res) => {
        const id = req.params.id
        login.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err){
            res.status(200).send({message: "Login atualizado com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }

    static excluirLogin = (req, res) => {
        const id = req.params.id
        login.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: "Login removido com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }

}

export default loginController 