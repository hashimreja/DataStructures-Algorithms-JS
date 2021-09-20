class Graph {
    constructor(){
        this.nodes = 0;
        this.adjacentList = {}
    }

    addVertex(value){
        if(this.adjacentList[value]){
            return 'vertex aready exist'
        }
        this.adjacentList[value] = [];
        this.nodes++;
        return this;
    }
    addEdge(value1,value2){
        let getEdges = this.adjacentList[value1];
        if(!getEdges.includes(value2)){
            this.adjacentList[value1].push(value2);
            this.adjacentList[value2].push(value1);
        }
        return this;
    }
}


//
let graph = new Graph();
console.log(graph.addVertex(0))
console.log(graph.addVertex(1))
console.log(graph.addVertex(2))
console.log(graph.addEdge(0,1))
console.log(graph.addEdge(0,2))