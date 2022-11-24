import Camion from "./Camion.js";

class Servicio{

    idServicio = 0;

    constructor(){
        this.generarId();
    }

    generarId(){
        this.idServicio = Math.random().toString
        (36).slice(2);/*random es para generar constante  un id aleatorio y slice es para eliminar dos posiciones iniciales*/
    }

    obtenerTransporte(){
        return new Camion(this.idServicio, "Bad Bunny")
    }
}
export default Servicio;