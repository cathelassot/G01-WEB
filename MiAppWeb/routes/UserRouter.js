import express  from "express";

const router = express.Router()

//res json estuctura, solo tiene atributos y propiedades pero no acciones
const usuario = {
    "nombre de usuario": "Maria Jose",
    correo: "mj@correo.com",
    edad: 15,
    notas: [
        3,
        4,
        4.8
    ],
    mascota: {
        nombre: "Calvin",
        raza: "Pitbull",
        edad: 7
    }
}

//localhost:3000/usuario/...


router.get("/", (req, res) => {
    //implementar codigo
    res.json(usuario)//el formato json manda la informacion estucturada
} )

router.get("/mascota", (req, res) => {
    //implementar codigo
    res.json(usuario.mascota)//el formato json manda la informacion estucturada
} )

router.get("/nombre", (req, res) => {
    //implementar codigo
    res.json(usuario.nombre)//el formato json manda la informacion estucturada
} )

router.get("/agrupar", (req, res) => {
    res.send("Usted esta en la pestaña de AGRUPAR!.  ")
} )

router.get("/agrupar/:args", (req, res) => {
    let nombres = req.params.args
    nombres = nombres.split(" ")
    //nombres = "juan, andrea, daniel, laura"
    //nombres = ["juan,""andrea","daniel","laura"]
    res.send(nombres)
    })

router.get("/:nombre", (req, res) => {//para llamar una variable luego del / se pone : + lo q se quiere
    //implementar codigo
    let nombre = req.params.nombre
      res.send("Usted esta buscando al usuario: "+nombre)
} )

router.get("/:nombre/:id", (req, res) => {//para llamar una variable luego del / se pone : + lo q se quiere
    //implementar codigo
    let nombre = req.params.nombre
    let idUsuario = req.params.id
    res.json({
        "nombre de usuario": nombre,
        "id usuario": idUsuario
    })
      res.send("Usted esta buscando al usuario: "+nombre)
} )



export default router
