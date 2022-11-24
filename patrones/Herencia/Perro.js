import Animal from "./Animal.js";

export default class Perro extends Animal{

    constructor(edad, raza){//la edad se trae de el contructor q c extiende ANimal, y la raza la ponemos aqui porq no todos los animales tienen raza pero si el perro
        super(edad)//se escribe super porq se hace referencia al stributo edad del padre osea de la clase animal

        this.raza = raza;//se pone de nuevo el this porq es el atributo solo del perro
    }

    ladrar(){//es la accion del perro
        console.log("El perro de la raza "+this.raza+" ladra.");
    }
    //la clase perro tambien hereda la funcion comer
}