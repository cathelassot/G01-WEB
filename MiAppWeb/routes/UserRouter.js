import express  from "express";

const router = express.Router()

//res json estuctura, solo tiene atributos y propiedades pero no acciones
const usuario = {
    nombre: "Maria Jose",
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

export default router
