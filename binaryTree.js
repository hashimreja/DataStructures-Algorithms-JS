class BinarySearchTrees {
    constructor() {
        this.head = {
            value: null,
            leftNode: null,
            rightNode: null
        }
    }

    insert(value) {
        let Node = { value: value, leftNode: null, rightNode: null };
        if (this.head.value == null) {
            this.head = Node;
            return this;
        } else {
            let headNode = this.head;
            while (true) {
                if (headNode != null) {
                    if (headNode.value > value) {
                        //move to the left
                        if (headNode.leftNode == null) {
                            headNode.leftNode = Node;
                            break;
                        }
                        headNode = headNode.leftNode
                    }
                    else if (headNode.value < value) {
                        //move to the right
                        if (headNode.rightNode == null) {
                            headNode.rightNode = Node;
                            break;
                        }
                        headNode = headNode.rightNode
                    }
                }
            };
            return JSON.stringify(this.head ,null , '           ');
        }
    }

    lookup(value){
        let currentNode = this.head;
        while(true){
            if(value == currentNode.value){
                return currentNode;
            }else if(value < currentNode.value){
                if(currentNode.leftNode){
                    currentNode = currentNode.leftNode;
                }else{
                    return null;
                }
                
            }else if(value > currentNode.value){
                if(currentNode.rightNode){
                    currentNode = currentNode.rightNode;
                }else{
                    return null;
                }
            }
        }
    }
    delete(value){
        let previousNode;
        let currentNode = this.head;
        while(true){
            if(value == currentNode.value){
                currentNode.leftNode.rightNode
            }else if(value < currentNode.value){
                if(currentNode.leftNode){
                    currentNode = currentNode.leftNode;
                }else{
                    return null;
                }
                
            }else if(value > currentNode.value){
                if(currentNode.rightNode){
                    currentNode = currentNode.rightNode;
                }else{
                    return null;
                }
            }
        }
    }
    //bfs
    breadthFirstSearch(){
        let list = [];
        let queue = [];
        let currentNode = this.head;
        queue.push(currentNode);
        while(queue.length >0){
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.leftNode){
                queue.push(currentNode.leftNode);
            }
            if(currentNode.rightNode){
                queue.push(currentNode.rightNode);
            }
        }
        return list;
    }
}


let x = new BinarySearchTrees();
console.log(x.insert(5))
console.log(x.insert(4))
console.log(x.insert(3))
console.log(x.insert(2))
console.log(x.insert(6))
console.log(x.insert(7))
console.log(x.insert(88))
console.log(x.breadthFirstSearch())

