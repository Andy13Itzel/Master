/* alert("Hola")
alert("Mundo") */
/* 
alert(3+
    1
    +2); */

  /*   alert("Hello");
    [1,2].forEach(alert); */

    //Se puede combinar la declaración de la variable y su asignación en una sola línea:
   /*  
    let message = "Hola";
    alert(message); */

/*     //declarar variables en una sola línea es posible pero es recomendable HACERLO MULTILÍNEA
    let user = "John"; 
    let age = 25; 
    let message = "Hola";

    // VAR Y LET HACEN CASI LO MISMO 
    VAR SE SEPARO EN LET Y CONSTANT
    */

    //Las variables son como cajas: la variable message como una caja etiquetada "message" con el valor "Hola!" adentro
    // Se puede introducir cualquier tipo de valor y se puede cambiar cuantas veces queramos

/* let message = "HOLA";
    message = "MUNDO"; //CAMBIO DE VALOR y se REMUEVEN los datos antiguos
    alert(message);
 */

// CREAR DOS VARIABLES y COPIAR DATOS DE LA OTRA
//*SOLO SE DEBE DECLARAR UNA VARIABLE UNA VEZ O MARCARA ERROR
// CUANDO YA ESTA DECLARADA NO ES NECESARIO COLOCAR LET, SÓLO PONEMOS EL NOMBRE DE LA VARIABLE
/* let hello = "Hola mundo";
let message = hello; //copia la 1era variable

alert (hello); 
alert(message); */

/* Nombramiento de variables
1.- nombre con letras dígitos, y símbolos $ y _
2.- El 1er carácter no puede ser un dígito
3.- Se diferencian con Mayús y Minus es decir manzana y manzANA son diferentes
4.- No se pueden utilizar let, class, return, y function porque el lenguaje las utiliza
5.-SE UTILIZA camelCase*/

//CONSTANTES NO PUEDEN SER ALTERADAS, SE UTILIZAN CUANDO LAS VARIABLES NUNCA CAMBIARÁ
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // ¡error, no se puede reasignar la constante!