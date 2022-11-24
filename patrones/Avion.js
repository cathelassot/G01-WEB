export default class Avion{
    constructor(id){/*el placa del constructor es el identificador del avion osea podria ir cuanquie cosa y despues del = tbn hiria lo q se ponga de indetificador */
        this.placa = id;//this.placa es el atributo q haceparte del aviom
    }

    transportar(lugar){
        console.log("El Avion 🛫 ["+this.placa+"] está transportando el pedido a: "+lugar+" por medio Aereo.");
    }
}