import express from "express"
import { crearUser, deleteUser, readUser, updateUser } from "../controllers/userController.js"

const userRouter = express.Router()

//CRUD 
//CREAR: POST
userRouter.post("/", (req, res) => {
    crearUser(req, res)
})

//LEER: GET 
userRouter.get("/:id", (req, res) => {
    readUser(req, res)
})

//ACTUALIZAR: PUT(se cambian todos lo datos) O PATCH(se cambian ciertas rutas)
userRouter.patch("/:id", (req, res) => {
    updateUser(req, res)
})

//ELIMINAR
userRouter.delete("/", (req, res) => {
    deleteUser(req, res)
})

export default userRouter

