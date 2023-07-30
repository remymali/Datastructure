
// class maxHeap{
//     constructor()
//     {
//         this.heap=[]
//     }
//     insert(value)
//     {
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }
//     heapifyUp(index)
//     {
//         let parentIndex=Math.abs(index-)
//     }
// }

function heapSort(arr)
{
    let n=Math.floor((arr.length/2)-1)
    for(let i=n;i>=0;i--)
    {
        heapifyDown(arr,arr.length,i)
    }
    for(let i= arr.length-1;i>=0;i--)
    {
        let temp= arr[i]
        arr[i]=arr[0]
        arr[0]=temp
        heapifyDown(arr,i,0)
    }

}
function heapifyDown(arr,n,i)
{
    let left=2*i+1
    let right=2*i+2
    let largest=i
    if(left<n && arr[left]>arr[largest])
    {
        largest=left
    }
    if(right<n && arr[right]>arr[largest])
    {
        largest=right
    }
    if(largest!=i)
    {
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapifyDown(arr,n,largest)
    }
}
let arr=[10,2,3,4,5,17]
//let objHeap=new maxHeap()

heapSort(arr)
console.log(arr)
