

class Pila{

    constructor(){
        this.stack=[];
    } 



push(element){
this.stack.push(element)
return this.stack;
}

pop (){
return this.stack.pop()
}

peek(){
return this.stack [this.stack.length - 1]
}

size(){
return this.stack.length;
}

print(){
console.log(this.stack)
}


}

const stack = new Pila();
console.log(stack.size());
console.log (stack.push('Rojo'));
console.log (stack.push('Amarillo'));
console.log(stack.size());
stack.print();


console.log(stack.pop());
console.log(stack.size());
stack.print();

console.log (stack.push('Café'));
console.log (stack.push('Gris'));

console.log(stack.peek())
console.log(stack.size());
stack.print();