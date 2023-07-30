
class maxHeap
{
  constructor()
  {
    this.heap=[]
  }
  insert(value)
  {
    this.heap.push(value)
    this.heapifyUp(this.heap.length-1)
  }
  heapifyUp(index)
  {
    let parentIndex=Math.floor((index-1)/2)
    if(index>0 && this.heap[index]>this.heap[parentIndex])
    {
      [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
      this.heapifyUp(parentIndex)
    }
  }
  heapifydown(arr,n,i)
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
    if(i!=largest)
    {
      [arr[i],arr[largest]]=[arr[largest],arr[i]]
      this.heapifydown(arr,n,largest)
    }
  }
  heapSort(arr)
  {
    let n=Math.floor((arr.length/2)-1)
    for(let i=n;i>=0;i--)
    {
      this.heapifydown(arr,arr.length,i)
    }
    for(let i=arr.length-1;i>=0;i--)
    {
      let temp=arr[i]
      arr[i]=arr[0]
      arr[0]=temp
      this.heapifydown(arr,i,0)
    }
  }
}
let objHeap=new maxHeap()
objHeap.insert(17)
objHeap.insert(2)
objHeap.insert(4)
objHeap.insert(15)
objHeap.insert(10)
objHeap.insert(30)
let arr=[17,2,4,15,10,30]
objHeap.heapSort(objHeap.heap)
console.log(objHeap.heap)