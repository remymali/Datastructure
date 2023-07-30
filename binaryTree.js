// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarySearch {
//     constructor() {
//         this.root = null
//         this.size = 0
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(value) {
//         let node = new Node(value)
//         if (this.isEmpty()) {
//             this.root = node
//         }
//         else {
//             this.nextInsertion(this.root, node)
//         }
//         this.size++
//     }
//     nextInsertion(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode
//             }
//             else {
//                 this.nextInsertion(root.left, newNode)
//             }
//         }
//         else {
//             if (root.right === null) {
//                 root.right = newNode
//             }
//             else {
//                 this.nextInsertion(root.right, newNode)
//             }
//         }
//     }
//     search(root, value) {
//         if (!root) {
//             return false
//         }
//         else {
//             if (root.value === value) {
//                 return true
//             }
//             else if (root.value > value) {
//                 return this.search(root.left, value)
//             }
//             else {
//                 return this.search(root.right, value)
//             }
//         }
//     }
//     preOrder(root) {
//         if (root) {
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }

//     }

//     inorderTraversal(root) {
//         if (root) {
//             this.inorderTraversal(root.left);
//             console.log(root.value);
//             this.inorderTraversal(root.right);
//         }
//     }
//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }
//     levelOrder()
//     {
//         let queue=[]
//         if(this.root)
//         {
//             queue.push(this.root)
//         }
//         while(queue.length)
//         {
//             let curr=queue.shift()
//             console.log(curr.value)
//             if(curr.left)
//             {
//                 queue.push(curr.left)
//             }
//             if(curr.right)
//             {
//                 queue.push(curr.right)           
//              }
//         }
        
//     }
    
//     // closestValue(root,target)
//     //     {
//     //         let closestValue=root.value
//     //         minimumDiff(root)
//     //         {
//     //             if(root)
//     //             {
//     //             if(Math.abs(root.value-target)<Math.abs(closestValue-target))
//     //             {
//     //                 closestValue=root.value
//     //             }
//     //             if(root.value>target)
//     //             {
//     //                 minimumDiff(root.left)
//     //             }
//     //             else
//     //             {
//     //                 minimumDiff(root.right)
//     //             }
//     //         }
//     //         }
//     //         minimumDiff(root)
//     //         return closestValue

//     //     }
//     //   //  validation()
// }
// let bst = new binarySearch()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// //console.log(bst)
// // bst.inorderTraversal(bst.root)
// bst.levelOrder()
// // console.log(bst.search(bst.root,10))
// //console.log(bst.preOrder(bst.root))
// // const bst=new binarySearch()
// // console.log(bst.isEmpty())
// // let value=bst.closestValue(bst.root,2)
// // console.log(value)
// //console.log(bst)
// let person={
//     name:"Remy",
//     rollNo:12
// }
// function print(n)
// {
// if(n<=0)
// return
// console.log(n)
// print(n-1)

// }
// print(10)

//printing sum values in different arrays in object
// let obj={
//     a:[1,2,3],
//     b:[20,10]
// }
// let sum=0
// for(let x of Object.values(obj))
// {
// for(let y  of x)
// {
//     sum+=y
// }

// }
// console.log(sum)


//Binarysearch
// function binarysearch(arr,target)
// {
//     let left=0
//     let right=arr.length-1
//     while(left<=right)
//     {
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]===target)
//         return mid
//         else if(arr[mid]>target)
//         right=mid-1
//         else
//         left=mid+1
//     }
//     return -1
// }
// let arr=[1,3,4,5,6,9]
// let result=binarysearch(arr,3)
// console.log(result)

//linear search
// function linearSearch(arr,target)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]===target)
//         return (i)

//     }
// }
// let arr=[1,3,4,5,6,9]
// let result=linearSearch(arr,1)
// console.log(result)

//recursive binarySearch
// function recursiveBinarySearch(arr,target)
// {
//     return search(arr,target,0,arr.length)
// }
// function search(arr,target,left,right)
// {
//     if(left>right)
//     return-1
//     let mid=Math.floor((left+right)/2)
//     if(arr[mid]===target)
//     return mid
//     else if(arr[mid]> target)
//    return search(arr,target,left,mid-1)
//    else
//    return search(arr,target,mid+1,right)
// }
// let arr=[1,3,4,5,6,9]
// let result=recursiveBinarySearch(arr,5)
// console.log(result)
// function insertionSort(arr)
// {
// for(let i=1;i<arr.length;i++)
// {
//     let currentValue=arr[i]
//     for(j=i-1;j>=0 && arr[j]>currentValue;j--)
//     {
//         arr[j+1]=arr[j]
//     }
//     arr[j+1]=currentValue

// }
// return arr
// }
// let arr=[5,2,1,7]
// console.log(insertionSort(arr))

//bubble sort
// function bubbleSort(arr)
// {
//     for(let i=0;i<arr.length-1;i++)
//     {
//         for(let j=0;j<arr.length-1-i;j++)
//         {
//             if(arr[j]>arr[j+1])
//             {
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr=[5,2,1,7]
// console.log(bubbleSort(arr))

// SelectionSort
// function selectionSort(arr)
// {
//     for(i=0;i<arr.length-1;i++)
//     {
//         largest=i
//         for(j=i+1;j<arr.length;j++)
//         {
//             if(arr[j]<arr[largest])
//             {
//                 largest=j
//             }
//         }
//         let temp=arr[i]
//         arr[i]=arr[largest]
//         arr[largest]=temp
//     }
//     return arr
// }
// let arr=[5,2,1,7]
//  console.log(selectionSort(arr))
// function prime(num)
// {
//     if(num<=1)
//     return -1
//     for(let i=2;i<=num;i++)
//     {
//         if(num%2===0)
//         return false
        
//     }
//     return true
// }
// console.log(prime(8))
// class Node
// {
//     constructor(value)
//     {
//     this.value=value,
//     this.next=null
//     }

// }
// class linkedList
// {
//     constructor()
//     {
//         this.head=null,
//         this.size=0
//     }
// prepend(value)
// {
//     let node= new Node(value)
//     if(this.head===null)
//     {
//         this.head=node
//     }
//     else{
//         node.next=this.head
//         this.head=node
//     }
//     this.size++
// }
// append(value)
// {
//     let node= new Node(value)
//     if(this.head===null)
//     {
//         this.head=node
//     }
//     else{
//     let prev=this.head
//     while(prev.next)
//     {
//         prev=prev.next
//     }
//     prev.next=node
// }
// }
// print()
// {
//     let curent=this.head
//     let listvalues=[]
//     while(curent)
//     {listvalues.push(curent.value)
//         curent=curent.next
        
//     }
//     console.log(listvalues)
// }
// getSum() {
//     let current = this.head;
//     let sum = 0;
//     while (current) {
//       sum += current.value;
//       current = current.next;
//     }
//     console.log(sum);
//   }
// }
// let list=new linkedList()
// // list.prepend(10)
// // list.prepend(20)
// list.append(33)
// list.append(60)
// list.print()
// list.getSum()
 class Stack
 {
    constructor()
    {
        this.item=[]
    }

    pop()
    {
        return this.item.pop()
    }
    push(value)
    {
        this.item.push(value)
    }
    peek()
    {
        return this.item[this.item.length-1]
    }
    isEmpty()
    {
        return this.item.length===0
    }
    size()
    {
        return this.item.length
    }
    print()
    {
        console.log(this.item.toString())
    }
 }
 let stack= new Stack()
 stack.push(10)
 stack.push(99)
 console.log(stack.peek())
 stack.print()