import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

//CRUD
//create
export async function crearUser(req, res) { // async es para q cargue rapidamente la respuesta
    //implementacion aqui
    // const {nombre, edad, ciudad} = req.body.usuario//el req es la ¿?peticion del cuerop q hace el usuario

    const usuario = req.body.usuario

    const {password} = usuario

    const salt = await bcrypt.genSalt(10)

    const encriptedPassword = await bcrypt.hash(password, salt)

    usuario.password = encriptedPassword

    let documento 

    try {
         documento = await userModel.create(usuario)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    

    res.status(201).json(usuario)
    // res.json({"mensaje":"FUNCIONA CREAR USUARIO"})respuesta 
}

//leer read
export async function readUser(req, res) {
    //implementacion aqui  
    const id = req.params.id

    let documento

    try {
        documento = await userModel.findOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }

    res.status(200).json(documento)
}

//update= actualizar
export async function updateUser(req, res) {
    //implementacion aqui 
    //1. findOneAndUpdate
    //2. findOne...Update
    const id = req.params.id
    const updates = req.body.updates

    let documento

    try {
        documento = await userModel.updateOne({"_id":id}, updates, {runValidators: true})//dentro de (la primer peticion es q busq ese id, con el segudo es q haga el cambio)
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
   
    res.status(200).json(documento)
}

//delete
export async function deleteUser(req, res) {
    //implementacion aqui 
    const id = req.body.id
  
    let documento = null

    try {
        documento = await userModel.deleteOne({"_id": id})
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
   
    res.status(200).json(documento)
}