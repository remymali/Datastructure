// let words=["aba","aabb","abcd","bac","aabc"]
// let element=[],sumArr=[],sum=0,count=0
// for(let i=0;i<words.length;i++)
// {
//     for(let j=i+1;j<words.length;j++)
//     {
//         //element.push(words[i])
//         const word1=new Set(words[i].split(''))
//         const word2=new Set(words[j].split(''))
//         if(word2.includes(word1[j]))
//         count++
        
        
//     }

// }
// console.log(count)

// class Heap{
//     constructor()
//     {
//         this.heap=[]
//     }
//     heapifyDown(arr,n=arr.length,index)
//     {
//         let left=2*index+1
//         let right=2*index+2
//         let largest=index
//         if(left<n && arr[left]>arr[largest])
//         {
//             largest=left
//         }
//         if(right<n && arr[right]>arr[largest])
//         {
//             largest=right
//         }
//         if(largest!=index)
//         {
//             [arr[largest],arr[index]]=[arr[index],arr[largest]]
//             this.heapifyDown(arr,n,largest)
//         }
//     }
//     heapSort(arr)
//     {
//         let n=Math.floor((arr.length/2)-1)
//         for(let i=n;i>=0;i--)
//         {
//             this.heapifyDown(arr,arr.length,i)
//         }
//         for(let i=arr.length-1;i>=0;i--)
//         {
//             let temp=arr[i]
//             arr[i]=arr[0]
//             arr[0]=temp
//             this.heapifyDown(arr,i,0)
//         }
//     }
// }
// const heap=new Heap()
// let arr=[10,17,2,25,7,30,15]
// heap.heapSort(arr)
// console.log(arr)
// class Graph
// {
//     constructor()
//     {
//         this.adjacencyList={}
//     }
//     addVertex(vertex)
//     {
//         if(!this.adjacencyList[vertex])
//         {
//             this.adjacencyList[vertex]=new Set()
//         }
//     }
//     addEdge(vertex1,vertex2)
//     {
//         if(!this.adjacencyList[vertex1])
//         {
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2])
//         {
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
// }
// let graph=new Graph() 
// graph.addVertex('A')
// graph.addVertex('C')
// graph.addVertex('B')
// graph.addEdge('A','B')
// graph.addEdge('B','A')
// graph.addEdge('B','C')
// graph.addEdge('C','B')
// console.log(graph)

class Graph{
    constructor()
    {
        this.adjacencyList={}
    }
    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2)
    {
        if(!this.adjacencyList[vertex1])
        {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2])
        {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
        
    }
    display()
    {
        for(let vertex in this.adjacencyList)
        {
            console.log(vertex+"->"+[...this.adjacencyList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2)
    {
       return (this.adjacencyList[vertex1].has(vertex2))
    }
    removeEdge(vertex1,vertex2)
    {
       this.adjacencyList[vertex1].delete(vertex2)
       this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            return
        }
        for(let adjacentVertex in this.adjacencyList)
        {
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    
}
const graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('B','A')
graph.addEdge('B','C')
graph.addEdge('C','B')
graph.display()

//console.log(graph.hasEdge("A","C"))
//console.log(graph)