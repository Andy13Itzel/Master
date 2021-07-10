/* //HOISTING (DECLARACIÓN CORRECTA DE VARIABLES)

//var nombre = "JUAN";
//console.log(nombre)

function Suma(num1, num2){
    var total = num1 + num2;
    console.log("LA SUMA ES: " + total) 
    //return "LA SUMA ES: " + total;
}
Suma ( 2 , 2 )


//SIN PARAMETROS
//ALCANCE (SCOPE) GLOBAL

var x = parseInt(prompt("INGRESA EL PRIMER NÚMERO"))
var y = parseInt(prompt ("INGRESA EL SEGUNDO NÚMERO"))

function Sumar (){
    var total = x + y;
    console.log ("LA SUMA ES: " +  total)
}
Sumar()
 */

/* function MayorEdad(){
var edad = prompt ("Hola, ¿Cuántos años tienes?")
if (edad >= 18){
    console.log("Eres mayor de edad")
} else if (edad< 18){
    console.log("Eres menor de Edad")
} else {
        console.log("Esto no es una edad válida")
    }
}    

MayorEdad() */


/*--------------------------------------------------------
| 1.- Hacer una función que convierta de grados   |
|   centígrados a Farenheit                                        |
-----------------------------------------------------------*/
/*
Ejemplo: convierte 37º C a Fahrenheit.
Multiplica los grados Centígrados por 9/5.
Súmale 32º para adaptar el equivalente en la escala Fahrenheit*/

/* function Conversor (){
    var centígrados = parseInt(prompt("INGRESA LOS GRADOS")) 
    var Fahrenheit =  centígrados * 9/5 + 32
    console.log(centígrados + " grados cetígrados es equivalente a " +  Fahrenheit + " grados Fahrenheit")
}
Conversor() */

/*----------------------------------------------------
|2.- Hacer una función que muestre la tabla de |
| multiplicar de un número                                   |
-------------------------------------------------------- */

function multiplicar(){
    var num = parseInt(prompt("INGRESA LA TABLA A CONSULTAR"))
    var tabla = num * 
}