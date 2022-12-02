import express from "express"
import { crearUser, deleteUser, readUser, updateUser } from "../controllers/userController.js"

const userRouter = express.Router()

//CRUD 
//CREAR: POST
userRouter.post("/", (req, res)=>{
    crearUser(req, res)
})
//LEER: GET 
userRouter.get("/", (req, res)=>{
    readUser(res)
})
//ACTUALIZAR: PUT(se cambian todos lo datos) O PATCH(se cambian ciertas rutas)
userRouter.patch("/", (req, res)=>{
    updateUser(res)
})
//ELIMINAR
userRouter.delete("/", (req, res)=>{
    deleteUser(res)
})

export default userRouter

