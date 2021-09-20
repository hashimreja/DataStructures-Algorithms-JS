class doublyLinkedList {
    constructor() {
        this.head = { value: null, nextNode: null, previousNode: null };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        if (this.head.value === null) {
            this.head.value = value;
            return this.head;
        } else {
            const newNode = {
                value: value,
                previousNode: null,
                nextNode: null
            }
            this.tail.nextNode = newNode;
            newNode.previousNode = this.tail;
            this.tail = newNode;
            this.length++;
            return newNode;
        }
    }
    printList() {
        let counter = 0;
        let list = [];
        let currentNode = this.head;
        while (counter < this.length) {
            list.push(currentNode.value)
            currentNode = currentNode.nextNode;
            counter++;
        }
        return list;
    }
    traverseList(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < index) {
            currentNode = currentNode.nextNode;
            counter++;
        }
        return currentNode;
    }
    prepend(value){
        let newNode = {
            value : value,
            nextNode : null,
            previousNode : null
        }
        newNode.nextNode = this.head;
        this.head.previousNode = newNode;
        this.head = newNode;
        this.length++;
    }
}

let x = new doublyLinkedList();
console.log(x.append(1))
console.log(x.append(2))
console.log(x.append(3))
console.log(x.append(4))
console.log(x.append(5))
console.log(x.prepend(0))
console.log(x.prepend(0))
console.log(x.printList())
