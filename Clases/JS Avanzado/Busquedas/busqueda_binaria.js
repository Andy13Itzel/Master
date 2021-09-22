//*CODIGO DE BÚSQUEDA BINARIO

//* ARREGLO ORDENADO

const myArray = [
    1,2,3,4,5,6,7,8,9,10,11,12,13];

function binarySearch (array,elemento){
    var min = 0;
    var max = array.length;
    var aux;

    while (min <= max){
        aux = Math.floor ((max+min)/2);
        if (array[aux] === elemento){
            return aux;
        }
        else if (array[aux]< elemento){
            min = aux +1
        }
        else{
            max = aux -1;
        }
    }
    return -1
}

console.log(binarySearch(myArray,9));