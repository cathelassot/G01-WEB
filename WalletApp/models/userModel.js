import mongoose from "mongoose";

const perfil = mongoose.Schema({
    mennsaje: {type:String, required:true},
    estado: String
})

const ciudadesPosibles = ["Bogotá", "Cali", "Medellin", "Cartagena", "Barranquilla"];

function validacionPar(numero){
    if (numero %2 ==0){
        return true
    }else{
        return false
    }
}


const userModel = mongoose.Schema({
    // "_id": {type:Number, unique:true},    
    "nombre": {type:String, required:true, minLength:3, maxLength:30, unique: true},//required es una validacion osea se dice q es requrido
    "edad": {type:Number, required:true, min:14, max:90, validate: {validator: validacionPar, message: "La edad debe ser numero par" }},//defaul: tbnse puede poner eje default:carlos osea si no escriben nombre sale el vr por defecto q seriacarlos
    "ciudad": {type:String, required:true, enum:ciudadesPosibles},//min y max = valor minimo y maximo 
    // "correo": {type:String, required:true, minLength: 3, maxLength:250, unique:true},
    // "activo":Boolean,
    // "notas":Array,
    // "objeto":perfil,
    // "fechaCreacion":Date // solo guarda la 0 utc osea se le resta 5 hras
})

export default mongoose.model("users", userModel)//aqui es donde se conecta con mongocompas la primer es users de la tabla o colecion
//y la segunda userModel es la constante q se creo en usercontroller