//EJEMPLO 1

class Colas{
    constructor(){
    this.queue = [];
    }

    enqueue(element){
        this.queue.push(element)
        return this.queue
    }


    dequeue(){
        return this.queue.shift()
    }

    peek(){
        return this.queue[0];

    }

    size(){
        return this.queue.length
    }

    isEmpty(){
        return this.queue.length ===0;
    }

    print(){
        console.log(this.queue)
    }
}

const queue = new Colas();
console.log(queue.isEmpty());
console.log(queue.enqueue("MIKA"))
console.log(queue.enqueue("RM"))
console.log(queue.enqueue("JIN"))
console.log(queue.enqueue("JUNGKOOK"))
console.log(queue.enqueue("SUGA"))
console.log(queue.size())


//SACANDO DATOS
console.log(queue.dequeue());

queue.print()

console.log(queue.isEmpty())

console.log (queue.peek())


//SACANDO DATOS
console.log(queue.dequeue());
queue.print()