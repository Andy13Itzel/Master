//*  CREAR CLASE LLAMADA NODO
//* EL NODO ES LA INFORMACIÓN DEL ELEMENTO
//* TIENE UN APUNTADOR (O ENLACE) AL SIGUIENTE NODO

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//? VAMOS A CREAR NUESTRA CALSE LISTA ENLAZADA
//? UNA LISTA ENLAZADA DEBE TENER UNA CABECERA (HEAD)
//? TIENE UN TAMAÑO DE LISTA (LENGTH)

//* CREAR LISTA ENLAZADA

class LinkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }

    isEmpy(){
        return this.head===null;
    }

    //! MÉTODOS DE LA LISTA
    addStart(data){


    }

    addEnd(){

    }

    delete(){

    }

    get(){

    }

    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data)
            currentNode = currentNode.next;
        }
    }

}

const listaNumeros = new LinkedList();
console.log (listaNumeros.isEmpy())

listaNumeros.addStart
