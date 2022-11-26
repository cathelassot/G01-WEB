import express from "express";

const app = express();
const puerto = 3000;

// function callback(){//la funcion es cuando este escucnado una peticion del cliente o usuario escriba eso en consola
//     console.log("El servidor se esta ejecutando");
// }

// app.listen(puerto, callback)//el listen es para q la app se conecte con el cliente por el puerto de arriba 
app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando");
})

app.get("/", (req, res) => {
    //implementar codigo, el get es para optener una peticion
    res.send("Hola, Mundo !!!")
} )

app.get("/home", (req, res) => {
    //implementar codigo, el get es para optener una peticion
    res.send("Bienvenido a Casa jja Home  !!!")
} )

app.get("/home/G01", (req, res) => {
    //implementar codigo, el get es para optener una peticion
    res.send("Bienvenido a la clase G01")
} )