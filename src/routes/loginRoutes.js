import express from "express"
import loginController from "../controllers/loginController.js"


const router = express.Router()

router 
    .get("/logins", loginController.listarLogin)
    .post("/logins", loginController.cadastrarLogin)
    .put("/logins/:id", loginController.atualizarLogin)
    .delete("/logins/:id", loginController.excluirLogin) 


export default router