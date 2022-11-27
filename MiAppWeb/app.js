import express from "express";
import UserRouter from "./routes/UserRouter.js";
import homeRouter from "./routes/home.js";

const app = express();
const puerto = 3000;

// function callback(){//la funcion es cuando este escucnado una peticion del cliente o usuario escriba eso en consola
//     console.log("El servidor se esta ejecutando");
// }

/**funcion normal
 * funtion nombre(arga, argb, arg...){
 * //imprementacion dela funcion
 * }
 * 
 * funcion flecha 
 * (arga, argb, arg...) => {
 * //implementacion de la funcion
 * }
 */


// //Ejemplo de la funcionflecha o de una funcion o se tiene nada q ver con la app es explicativo

// function suma(a, b, callback){
//     const resultado = a + b;
//     callback(a, b, resultado);
// }
// suma(18, 15, (a, b,resultado) => {
//     console.log("El valor a es: "+a);
//     console.log("El valor b es: "+b);
//     console.log("El resultado es: "+resultado);

// })

// app.listen(puerto, callback)//el listen es para q la app se conecte con el cliente por el puerto de arriba 
app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando");
})

app.get("/", (req, res) => {
    //implementar codigo, el get es para optener una peticion
    res.send("Hola, Mundo !!!")
} )

// app.get("/direccion", (req, res) => {
//     //implementar codigo, el get es para optener una peticion
//     res.redirect("/home/G01")//redirect lo que hace es reemplazar la direccion de /direccion es ir a /home/G01 redirige
// } )

app.use("/usuario",UserRouter)
app.use("/home", homeRouter)
