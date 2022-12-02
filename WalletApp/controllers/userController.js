import userModel from "../models/userModel.js"

//CRUD
export async function crearUser(req, res) { // async es para q cargue rapidamente la respuesta
    //implementacion aqui
    const {nombre, edad, ciudad} = req.body.usuario//el req es la ¿?peticion del cuerop q hace el usuario

    const usuario = await userModel.create({//await(espera q cree ) es para q cargue en postman o web rapido sin recargar
        "nombre": nombre,
        "edad": edad,
        "ciudad": ciudad
    })
    res.status(201).json(usuario)
    // res.json({"mensaje":"FUNCIONA CREAR USUARIO"})respuesta 
}

export function readUser(res) {
    //implementacion aqui  
    res.sendStatus(200)
}

export function updateUser(res) {
    //implementacion aqui 
    res.sendStatus(200)
}

export function deleteUser(res) {
    //implementacion aqui 
    res.sendStatus(200)
}