//EJEMPLO 2

class Colas{
    constructor(){
        this.collection = [];
    }

    //MÉTODOS
    enqueue(element){
        this.collection.push(element)
        return this.collection

    }

    dequeue(){
        return this.collection.shift()
    }

    isEmpty(){
        return this.collection.length === 0;
    }

    front(){
        return this.collection[0];

    }

    back(){
        return this.collection[this.collection.length -1]
    }

    size(){
        return this.collection.length
    }

    print(){
        console.log(this.collection)
    }
}

//AGREGANDO DATOS

const miBTS = new Colas ()
console.log(miBTS.isEmpty());

//AGREGANDO DATOS
miBTS.enqueue({nombre: "RM", sexo: "M"});
miBTS.enqueue({nombre: "JIN", sexo: "M"});
miBTS.enqueue({nombre: "JUNGKOOK", sexo: "M"});
miBTS.print()
console.log(miBTS.size());
console.log(miBTS.isEmpty());

console.log(miBTS.dequeue());
miBTS.print()

miBTS.enqueue({nombre: "SUGA", sexo: "M"});
miBTS.enqueue({nombre: "J-HOPE", sexo: "M"});
miBTS.print()

console.log(miBTS.dequeue());
miBTS.print()

//METODOS AUXILIARES
console.log(miBTS.front())
console.log(miBTS.back())