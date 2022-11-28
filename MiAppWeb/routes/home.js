import express from "express"
import {crearPublicacion, leerPublicaciones} from "../controllers/homController.js"

let router = express.Router()

//localhost:3000/home

router.get("/", (req, res) => {
    //implementar codigo, el get es para optener una peticion
    res.send("Bienvenido a Casa jja <b>Home</b>  !!!")//res es la respuesta y send es un metodo
} )

router.get("/G01", (req, res) => {
    //implementar codigo, el get es para optener una peticion
    res.send("Bienvenido a la clase G01")
} )


//CRUD = CREAR(create), LEER(read), ACTUALIZAR(update), Y  ELIMINAR(delete)

router.post("/nuevo", function(req,res){
    crearPublicacion(req, res)
  })

router.get("/lista", (req, res) => {
leerPublicaciones(req, res)
} )

router.get("/lista/:id", (req, res) => {
 leerPublicacion(req, res)
} )

export default router
