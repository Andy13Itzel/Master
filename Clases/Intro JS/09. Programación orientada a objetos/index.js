//CREAR UN OBJETO

/* cont EstudianteUno ={
    nombre : "Eduardo",
    apellido: "Perez",
    califFinal:8,
    inscrito: true,
}

// DESESTRUCTURACIÓN

const {nombre, apellido, califFinal, inscrito} = EstudianteUno;
console.log ("Hola $(nombre) $(apellido) aprobaste la materia, califición final ") */

//PROGRAMACIÓN ORIENTADA A OBJETOS
// VAMOS A TENER DOS CLASES:  ESTUDIANTES, PROFESORES
//CREAR NUESTRA PLANTILLA
//SOLO UN CONSTRUCTOR POR CLASE

/* class Estudiantes {
        //CREAR NUESTRO CONSTRUCTOR
        constructor(nombre, apellido, califFinal, inscrito){
            this.nombre = nombre;
            this.apellido = apellido;
            this.califFinal = califFinal;
            this.inscrito = inscrito;
        }
//LOS METODOS USUALMENTE NECESITAN HACER ALGO CON LO QUE FUE LLAMADO NUESTR
//METODOS
//VAMOS A SIMULAR UN PEQUEÑO SISTEMA PARA SABER SI APROBARON O NO
Aprobado (){
    if (this.califFinal >= 7.6){
    return "Aprobado " + Math.round(this.califFinal)
    }else if (this.califFinal <= 7.5){
    return "Reprobado "+ Math.round(this.califFinal)
    }else{
    return "ERROR EN EL SISTEMA CONSULTAR MÁS TARDE"
    }
}

Inscrito(){
    if(this.inscrito === true){
        return "EL ALUMNO SÍ ESTA INSCRITO EN EL SEMESTRE"
    }else if (this.inscrito === false){
        return "ERROR EN EL NO ESTA INSCRITO EN EL SEMESTRE"
    }else {
        return "ERROR EN EL SISTEMA CONSULTAR MÁS TARDE"
    }    
}
}

//CREACIÓN DE  NUESTROS OBJETOS

const EstudianteUno= new Estudiantes ("Juan", "Gomez", 8.2, true)
const EstudianteDos= new Estudiantes ("Erick", "Rodriguez", 7.2, false)

console.log(EstudianteUno.nombre, EstudianteUno.apellido, EstudianteUno.Aprobado(), EstudianteUno.Inscrito())
console.log(EstudianteDos.nombre, EstudianteDos.apellido, EstudianteDos.Aprobado(), EstudianteDos.Inscrito() ) */

//EJERCICIO 1 NUESTROS AMIGOS DE CINEPOLIS, NOS HAN PEDIDO AYUDA CON LA GESTIÓN DEL CÁTALOGO DE PELICULAS 
// DEBEMOS ESPECIFIAR NOMBRE DE LA PELICULA, LA SALA, SU CLASIFICACIÓN Y SI HAY BOLETOS
// DISPONIBLES PARA LA FUNCION


// VAMOS A TENER UNA CLASE:  DISPONIBILIDAD
//CREAR NUESTRA PLANTILLA
//SOLO UN CONSTRUCTOR POR CLASE
/* 
class Cartelera {
    //CREAR NUESTRO CONSTRUCTOR
    constructor(nombre, sala, clasificacion, disponible){
        this.nombre = nombre;
        this.sala = sala;
        this.clasificacion = clasificacion;
        this.disponible = disponible;
    }
//LOS METODOS USUALMENTE NECESITAN HACER ALGO CON LO QUE FUE LLAMADO NUESTR
//METODOS
//VAMOS A SIMULAR UN PEQUEÑO SISTEMA PARA SABER SI APROBARON O NO

Disponible   (){
if (this.disponible >= 1){
return "\nAÚN HAY BOLETOS PARA LA FUNCIÓN"
}else if (this.disponible < 1 ){
return "\nYA NO HAY BOLETOS PARA LA FUNCIÓN"
}else{
return "\n Error en el sistema, consultar más tarde"
}
}
}
//CREACIÓN DE  NUESTROS OBJETOS

const peliUno = new Cartelera ("\nPELICULA: UN LUGAR EN SILENCIO", "\nSALA: 1", "\nCLASIFICACIÓN: B",2)
const peliDos = new Cartelera ("\nPELICULA: JHON WICK", "\nSALA: 2", "\nCLASIFICACIÓN: C+",0)

console.log("En carterlera: ",peliUno.nombre, peliUno.sala, peliUno.clasificacion, peliUno.Disponible())

console.log("En carterlera: ",peliDos.nombre, peliDos.sala, peliDos.clasificacion, peliDos.Disponible()) */

    

class Consola{
    constructor(nombre, videojuegos, disponibilidad, precio){
        this.nombre=nombre
        this.videojuegos=videojuegos
        this.disponibilidad=disponibilidad
        this.precio=precio
    }
    Disponible(){
        if(this.disponibilidad){
            return (`La Consola ${this.nombre} esta disponible actualmente. Por un precio de $${this.precio}`)
        }else{
            return (`La Consola ${this.nombre} no esta disponible actualmente`)
        }
    }
    Incluye(){
        if(this.disponibilidad){
            return (`La consola ${this.nombre} incluye los juegos ${this.videojuegos[0]}, ${this.videojuegos[1]}, ${this.videojuegos[2]}`)
        }else{
            return (`Me encantaria decirte que juegos se incluyen, pero la consola no esta disponible 😔`)
        }
    }
}
let xboxOne=new Consola("Xbox One", ["Grand Theft Auto", "Naruto Storm", "Fifa 21"], true, "200")
let xboxSeriesX=new Consola("Xbox Series X", ["Farcry", "Warzone", "Fifa 21"], false, "500")
let xboxSeriesS=new Consola("Xbox Series S", ["Final Fantasy", "Farm Simulator", "Fifa 21"], true, "300")

var resultado = xboxOne.Incluye()
var resultado2 = xboxOne.Disponible()

console.log(resultado)
console.log(resultado2)