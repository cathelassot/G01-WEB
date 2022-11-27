import express from "express"

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

export default router
