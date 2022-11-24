import Avion from "./Avion.js";
import Servicio from "./Servicio.js";

class ServicioAereo extends Servicio{

    // idServicio = 0;

    // constructor(){
    //     this.generarId();
    // }

    // generarId(){
    //     this.idServicio = Math.random().toString
    //     (36).slice(2);/*random es para generar constante  un id aleatorio y slice es para eliminar dos posiciones iniciales*/
    // }

    constructor(){
        super();
    }

    obtenerTransporte(){
        return new Avion(this.idServicio)
    }
}
export default ServicioAereo;