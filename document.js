// // class maxHeap{
// //   constructor()
// //   {
// //     this.heap=[]
// //   }
// //   heapifyDown(arr,n,i)
// //   {
// //     let left=2*i+1
// //     let right=2*i+2
// //     let largest=i
// //     if(left<n && arr[left]>arr[largest])
// //     {
// //       largest=left
// //     }
// //     if(right<n && arr[right]>arr[largest])
// //     {
// //       largest=right
// //     }
// //     if(i!=largest)
// //     {
// //       [arr[i],arr[largest]]=[arr[largest],arr[i]]
// //       this.heapifyDown(arr,n,largest)
// //     }
// //   }
// //   heapsort(arr)
// //   {
// //     let n=Math.floor((arr.length/2)-1)
// //     for(let i=n;i>=0;i--)
// //     {
// //       this.heapifyDown(arr,arr.length,i)
// //     }
// //     for(let i=arr.length-1;i>=0;i--)
// //     {
// //       let temp=arr[i]
// //       arr[i]=arr[0]
// //       arr[0]=temp
// //       this.heapifyDown(arr,i,0)
// //     }
// //   }
// // }
// // let heap=new maxHeap()
// // let arr=[10,17,2,25,7,30,15]
// // heap.heapsort(arr)
// // console.log(arr)

// class maxHeap
// {
//   constructor()
//   {
//     this.heap=[]
//   }
//   insert(value)
//   {
//     this.heap.push(value)
//     this.heapifyUp(this.heap.length-1)
//   }
//   heapifyUp(index)
//   {
//     let parentIndex=Math.floor((index-1)/2)
//     if(index>0 && this.heap[index]>this.heap[parentIndex])
//     {
//       [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//       this.heapifyUp(parentIndex)
//     }
//   }
//   heapifydown(arr,n,i)
//   {
//     let left=2*i+1
//     let right=2*i+2
//     let largest=i
//     if(left<n && arr[left]>arr[largest])
//     {
//       largest=left
//     }
//     if(right<n && arr[right]>arr[largest])
//     {
//       largest=right
//     }
//     if(i!=largest)
//     {
//       [arr[i],arr[largest]]=[arr[largest],arr[i]]
//       this.heapifydown(arr,n,largest)
//     }
//   }
//   heapSort(arr)
//   {
//     let n=Math.floor((arr.length/2)-1)
//     for(let i=n;i>=0;i--)
//     {
//       this.heapifydown(arr,arr.length,i)
//     }
//     for(let i=arr.length-1;i>=0;i--)
//     {
//       let temp=arr[i]
//       arr[i]=arr[0]
//       arr[0]=temp
//       this.heapifydown(arr,i,0)
//     }
//   }
// }
// let objHeap=new maxHeap()
// objHeap.insert(17)
// objHeap.insert(2)
// objHeap.insert(4)
// objHeap.insert(15)
// objHeap.insert(10)
// objHeap.insert(30)
// let arr=[17,2,4,15,10,30]
// objHeap.heapSort(objHeap.heap)
// console.log(objHeap.heap)
class Node{
  constructor(value)
  {
    this.value=value
    this.left=null
    this.right=null
  }
  
}
function isvalidate(root)
{
  return isvalidateHelper(root,-Infinity,Infinity)
}
function isvalidateHelper(root,min,max)
{
  if(root===null)
  return true
  if(root.value<=min ||root.value>=max)
  return false
  return( isvalidateHelper(root.left ,min,root.value)&&isvalidateHelper(root.right,root.value,max))
}
 
const root=new Node(5)
root.left=new Node(3)
root.right=new Node(7)
root.left.left=new Node(2)
root.left.right=new Node(4)
root.right.left=new Node(6)
root.right.right=new Node(8)
console.log(isvalidate(root))
root.left.left=new Node(6)
console.log(isvalidate(root))

class binarySearch{
  constructor()
  {
    this.root=null
    this.size=0
  }
  insert(value)
  {
    let node=new Node(value)
    if(this.root===null)
    {
      this.root=node
    }
    else
    {
      this.inserNewNode(this.root,node)
    }
    this.size++
  }
  inserNewNode(root,node)
  {
    if(root.value>node.value)
    {
    if(root.left==null)
    {
      root.left=node
    }
    else
    {
      this.inserNewNode(root.left,node)
    }
  }
  else
  {
    if(root.right==null)
    {
      root.right=node
    }
    else
    {
      this.inserNewNode(root.right,node)
    }
  }
  }
  preorder(root)
  {
    if(root)
    {
      console.log(root.value)
      this.preorder(root.left)
      this.preorder(root.right)
    }
  }
  Inorder(root)
  {
    if(root)
    {
      
      this.Inorder(root.left)
      console.log(root.value)
      this.Inorder(root.right)
    }
  }
  Postorder(root)
  {
    if(root)
    {
      
      this.Postorder(root.left)
      this.Postorder(root.right)
      
      console.log(root.value)
    }
  }
  search(root,target)
  {
    if(root===null)
    return false
    else if(root.value===target)
    return true
    else{
      if(root.value>target)
      {
        return this.search(root.left,target)
      }
      else
      {
        return this.search(root.right,target)
      }
    }
  }
  levelorder()
  {
    let queue=[]
    queue.push(this.root)
    while(queue.length)
    {
      let curr=queue.shift()
      console.log(curr)
      if(curr.left)
      {
        queue.push(curr.left)
      }
      if(curr.right)
      {
        queue.push(curr.right)
      }
    }
  }
  min(root)
  {
    if(!root.left)
    {
      return root.value
    }
    else{
      this.min(root.left)
    }
  }
  max(root)
  {
    if(!root.right)
    {
      return root.value
    }
    else{
      this.max(root.right)
    }
  }
  findClosestValue(target)
  {
    if(!this.root)
    return false
    let closestValue=this.root.value
    let root=this.root
    while(root!=null)
    {
      if(closestValue-target<root.value-targe)
      {

      }
    }
  }
}
let objbst= new binarySearch()
objbst.insert(10)
objbst.insert(3)
objbst.insert(13)
objbst.insert(1)
objbst.Postorder(objbst.root)

findClosestValue(target)
    {
        if(!this.root)
        return null
        let closestValue=this.root.value
        let node=this.root
        while(node!=null)
        {
            if(Math.abs(node.value-target)<Math.abs(closestValue-target))
            {
                closestValue=node.value
            }
            if(node.value===target)
            break
            else if(node.value>target)
            {
                node=node.left
            }
            else{
                node=node.right
            }
        }
        return closestValue
    }