import mongoose from "mongoose"

mongoose.connect('mongodb+srv://LokeRodrigues:ertdfgxcv123@webii-disciplina.0nkagad.mongodb.net/Defesa-Civil')

let db = mongoose.connection

export default db