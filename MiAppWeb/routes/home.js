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

let publicaciones = []

router.post("/nuevo", function(req,res){
    
    let id = Math.random().toString(36).slice(2)

    let publicacion = {
        "nuestra publicacion":req.body.publicacion,
        "identificador de la publicacion":id 
    }

    res.json(publicacion)
    publicaciones.push(publicacion)
})

router.get("/lista", (req, res) => {
    //implementar codigo, el get es para optener una peticion
    res.json(publicaciones)
} )

export default router
