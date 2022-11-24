class Camion{

    constructor(id, conductor){/*el placa del constructor es el identificador del camion osea podria ir cuanquie cosa y despues del = tbn hiria lo q se ponga de indetificador */
        this.placa = id;//this.placa es el atributo q haceparte del camion
        this.conductor = conductor;
    }

    transportar(lugar){
        console.log("el camion 🚚["+this.placa+"] está transportando el pedido a: "+lugar+", por medio terrestre.");
    }
}

export default Camion;