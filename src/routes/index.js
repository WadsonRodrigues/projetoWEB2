import express  from "express"
import login from "./loginRoutes.js"
import cadastros from "./cadastroRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Aula de node"});
    }) 

    app.use(
        express.json(),
        login,
        cadastros, 
    )
}

export default routes
