import express from "express";

const app = express();
const puerto = 3000;

function callback(){//la funcion es cuando este escucnado una peticion del cliente o usuario escriba eso en consola
    console.log("El servidor se esta ejecutando");
}

app.listen(puerto, callback)//el listen es para q la app se conecte con el cliente por el puerto de arriba 