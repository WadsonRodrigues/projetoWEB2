import express from "express";
import db from "./config/dbConnect.js"
import login from "./models/Login.js"
import routes from "./routes/index.js"


db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})


const app = express();

app.use(express.json())

routes(app)

//código omitido

app.get('/logins/:id', (req, res) => {
  let index = buscaLogins(req.params.id);
  res.json(login[index]);
})

app.post('/logins', (req, res) => {
  login.push(req.body);
  res.status(201).send('Login foi cadastrado com sucesso')
})

app.put('/logins/:id', (req, res) => {
  let index = buscaLogins(req.params.id)
  login[index].titulo = req.body.titulo
  res.json(login)
})

app.delete('/logins/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaLogins(id);
  login.splice(index, 1);
  res.send(`Login ${id} removido com sucesso`);
})

function buscaLogins(id) {
  return login.findIndex(logins => logins.id == id)
}

export default app