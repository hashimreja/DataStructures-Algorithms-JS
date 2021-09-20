/*
stacks

to remeber stacks just imagine stacking plates on top of each other 
lifo last in first out
*/
class Stack {
    constructor(){
        this.head = {value : null , nextNode : null};
        this.tail = this.head;
        this.length = 0;
    }

    push(value){
        let node = {
            value : value,
            nextNode : null
        }
        if(this.head.value == null) {
            this.head.value = value;
            this.length++;
            return this.head;
        }else{
            node.nextNode = this.head;
            this.head = node;
            this.tail = node;
            this.length++;
            return this.head;
        }
    }

    pop(){
       let node = this.head;
        this.head = node.nextNode
        this.length--;
       return node.value;
    }
    peek(){
        return this.head.value;
    }
}

const stack = new Stack();
stack.push('google')
stack.push('udemy')
stack.push('yahoo');
console.log(stack.pop())