//*CODIGO DE BÚSQUEDA SECUENCIAL

//* TIENE QUE DEVOLVER LA POSICIÓN EN QUE SE ENCUENTRA EL ELEMENTO A BUSCAR

function busquedaSecuencial (array, elementoBuscar){
    const tamanio = array.lenght;
    for(var i = 0; i < tamanio; i++){
        if(array[i] === elementoBuscar){
            return i;
        }
    }
    return 
}