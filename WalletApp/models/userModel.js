import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "nombre": String,
    "edad": Number,
    "ciudad": String
})

export default mongoose.model("users", userModel)//aqui es donde se conecta con mongocompas la primer es users de la tabla o colecion
//y la segunda userModel es la constante q se creo en usercontroller