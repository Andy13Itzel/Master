class PilasObjeto{
    constructor(){
        this.stack={}; //se guardan los elementos de la pila
        this.count=0;

    }

    push(element){
        this.stack[this.count]= element;
        this.count++;
        return this.stack;
        }
        
        pop (){
        this.count--;
        const element = this.stack [this.count];
        delete this.stack[this.count];
        return this.stack;
        }
        
        peek(){
        return this.stack [this.stack.length - 1]
        }
        
        size(){
        return this.count;
        }
        
        print(){
        console.log(this.stack)
        }
        
}