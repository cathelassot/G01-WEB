// import Animal from "./Extras/Animal.js";
// import Perro from "./Extras/Perro.js";


// const animal = new Animal(15);
// animal.comer(); //es la constante del Animal ya creado
// const Calvin = new Perro(7, "Pitbull")//se creo un nuevo perro llamado calvin con la const 

// Calvin.comer();
// Calvin.ladrar();

import Avion from "./Avion.js";
import Servicio from "./Servicio.js";
import ServicioAereo from "./ServicioAereo.js";

// aplicacion de mensajeria
const servicioTerrestre = new Servicio(); /*aqui se importo de servicio,tbn se escribe new pq secrea una instancia nueva si tuviera en la carpet servicio un contructor con id pues dentro de los parentesis se pondria el id osea numero */
const servicioTerrestre2 = new Servicio();
const servicioAereo = new ServicioAereo();
const servicioAereo2 = new ServicioAereo();



// const ford = servicioTerrestre.obtenerTransporte();
// const avion = servicioAereo.obtenerTransporte();  

function enviarPaquete(servicio, lugar){
    const transporte = servicio.obtenerTransporte();
    transporte.transportar(lugar);
}

enviarPaquete(servicioAereo, "Bucaramanga")
enviarPaquete(servicioAereo, "Riohacha")
enviarPaquete(servicioAereo2, "Bogota")
enviarPaquete(servicioTerrestre, "Cali")
enviarPaquete(servicioTerrestre, "otra ciuda")
enviarPaquete(servicioTerrestre2, "Pereira")


// function realizarEnvio(transporte, lugar){
//     transporte.transportar(lugar);
//     console.log(transporte, conductor);

// }

// realizarEnvio(ford, "Cali");
// realizarEnvio(avion, "Barranquilla");