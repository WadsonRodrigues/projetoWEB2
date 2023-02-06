import mongoose from "mongoose";



const loginSchema = new mongoose.Schema(
    {
        id: {type: String},
        usuario: {type: String, required: true},
        senha: {type: String, required: true},
    },
    {
        versionKey: false
    }
)

const login = mongoose.model('login', loginSchema)

export default login 