class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

class Queue {
    constructor(){
        this.head = new Node();
        this.length = 0;
        this.tail = this.head;
    };
    push(value){
        if(this.head.value == null) {
            this.head.value = value;
            this.length++;
            return this;
        }
        let node = new Node(value)
        this.tail.nextNode = node ;
        this.tail = node;
        this.length++;
        return this;
    }
    peek(){
        return this.head.value;
    }
    pop(){
        let node = this.head;
        this.head = node.nextNode;
        this.length--;
        return node.value;
    }
}

let x = new Queue();

x.push('google')
x.push('udemy')
x.push('yahoo')
console.log(x.pop());
console.log(x.pop());
console.log(x.pop());




