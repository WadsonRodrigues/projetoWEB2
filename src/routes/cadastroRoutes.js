import express from "express"
import CadastroController from "../controllers/cadastroController.js"


const router = express.Router()

router 
    .get("/cadastros", CadastroController.listarCadastro)
    .post("/cadastros", CadastroController.cadastrarCadastro)
    .put("/cadastros/:id", CadastroController.atualizarCadastro)
    .get("/cadastros/:id", CadastroController.listarCadastroPorId) 
    .delete("/cadastros/:id", CadastroController.excluirCadastro) 


export default router