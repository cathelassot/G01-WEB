import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "nombre": {type:String, required:true},
    "edad": {type:Number, required:true},
    "ciudad": {type:String, required:true},
    "correo": {type:String, required:true}
})

export default mongoose.model("users", userModel)//aqui es donde se conecta con mongocompas la primer es users de la tabla o colecion
//y la segunda userModel es la constante q se creo en usercontroller