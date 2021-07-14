// INTRODUCCIÓN A HERENCIA
// HERENCIA SIMPLE, DONDE UNA SUBCLASE PUEDE HEREDAR ATRIBUTOS 
//O METODOS DE UNA CLASE PADRE
//METODOS GET (GETTER) SET (SETTER)

//EL NOMBRE DE LAS CLASES MAYUSCULAS
//EL NOMBRE DE LOS ATRIBUTOS MINUSCULA Y DESPUES CON UNA MAYUSCULA

//CLASE PADRE
class Telefono {
    constructor (marca){
        this.marca = marca;
        
    }
    //METODO
    getAnuncio (){
        return "Ha llegado el nuevo telefono de: " + this.marca
    }
}

//AQUI VAMOS A EMPEZAR A TRABAJAR LA HERENCIA
//SUBCLASE   //HERENCIA
class Modelo extends Telefono {
    constructor(marca, modelo){
        super(marca) 
        this.modelo = modelo;
    }

    //METODO

    getAnuncioCompleto(){
        return this.getAnuncio () +  "\nEl modelo que llegó es: " +  this.modelo
    }
}





//INSTANCIAR OBJETOS
const miTelefono = new Modelo ("Xiaomi. ", "Redmi note 10 Pro")
console.log(miTelefono.getAnuncioCompleto())