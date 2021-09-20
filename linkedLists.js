/**
 {
     value : 10,
     next : {
         value : 2,
         next : {
            value : 3,
            next : {
                value : 4,
                next : {}
            }
         }
     }
 }
 */

class linkedList {
    constructor() {
        this.head = {
            value: null,
            next: null
        };
        this.tail = this.head;
        this.length = 0;
    }
    append(value) {
        let newNode = {
            value: value,
            next: null
        }
        if (this.head.value == null) {
            this.head.value = value;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }
    prepend(value) {
        let newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode;
        this.length++;
    }

    printList() {
        let list = [];
        let currnetNode = this.head;
        while (currnetNode !== null) {
            list.push(currnetNode.value);
            currnetNode = currnetNode.next;
        };
        return list;
    }

    insert(index, value) {
        let newNode = {
            value: value,
            next: null
        }
        let leader = this.traverseToIndex(index - 1);
        let nextReferencePoint = leader.next;
        leader.next = newNode;
        newNode.next = nextReferencePoint;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    delete (index) {
        let leader = this.traverseToIndex(index -1);
        leader.next = leader.next.next;
    }
};

let x = new linkedList();
console.log(x.append(1))
console.log(x.append(2))
console.log(x.append(3))
console.log(x.append(4))
console.log(x.delete())


