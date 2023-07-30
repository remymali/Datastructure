class Node
{
    constructor(value)
    {
        this.value=value
        this.next=null
    }
}

class LinkedList
{
    constructor()
    {
        this.head=null
        this.size=0
    }
    isEmpty()
    {
        return this.size===0
    }
    getSize()
    {
        return this.size
    }
    prepend(value)
    {
        let node=new Node(value)
        if(this.head==null)
        {
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print()
    {
       let curr=this.head 
       let listElement=''
       if(this.head===null)
       {
        console.log("List is empty")
       }
       else
       {
                while(curr)
                {

                        listElement+=`${curr.value} `
                        curr=curr.next
                }
                console.log(listElement);
        }
    }
    append(value)
    {
        let node=new Node(value)
        if(this.head===null)
        {
            this.head=node
        }
        else{
            let prev=this.head
            while(prev.next)
            {
                prev=prev.next
            }
            prev.next=node
            this.size++
        }
    }
    insert(value,index)
    {
        let prev=this.head
        if(index<0||index>this.size)
        {
            return
        }
        if(index==0){
            this.prepend(newValue)
        }
        else{
            let node=new Node(value)
            for(let i=0;i<index-1;i++)
            {
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    deleteFrom(index)
    {
        let removed
        let prev=this.head
        if(index<0|| index>this.size)
        {
            return
        }
        if(index===0)
        {
            removed=this.head
            this.head=this.head.next
        }
        else{
            for(let i=0;i<index-1;i++)
            {
                prev=prev.next
            }
            removed=prev.next
            prev.next=removed.next
            this.size--
        }
    }
    insertLeft(value,newValue) {
        if (this.isEmpty()) {
          return -1
        }
        
        else {
          let curr=this.head
          let prev=null
          while (curr && curr.value != value) {
            prev=curr
            curr = curr.next
          }
          let node = new Node(newValue)
            prev.next=node
            node.next=curr
           
          }
        }
      
    removeUsingValue(value)
    {
        let prev=this.head
        let removed
        if(this.isEmpty())
        {
            return
        }
        if(this.head.value===value)
        {
            this.head=this.head.next
            this.size--
        }
        else
        {
            while(prev.next && prev.next.value!==value)
            {
                prev=prev.next
            }
            if(prev.next)
            {
            removed=prev.next
            prev.next=removed.next
            this.size--
            }
            return null
        }
    }
    search(value)
    {
        let curr=this.head
        let i=0
        if(this.isEmpty())
        {
            return -1
        }
        else{
            while(curr && curr.value!=value)
            {
                curr=curr.next
                i++
            }
            return i
        }
    }
    reverse()
    {
        
        let prev=null
        let curr= this.head
        while(curr)
        {
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
        }

    }
     


let list=new LinkedList()
list.prepend(10)
list.prepend(20)
list.print()
list.append(60)
list.print()
list.insertLeft(10,13)
list.print()
list.reverse()
list.print()
// list.deleteLeft(38)

// function linearSearch(arr,target)
// {
// let n=arr.length
// for(i=0;i<n;i++)
// {
//     if(arr[i]==target)
//     {
//       return i  
//     }
// }
// }
// arr=[1,2,3,4,5]
// let a=linearSearch(arr,4)
// console.log(a)

// function binarySearch(arr,target)
// {
// let n=arr.length
// let left=0
// let right=n-1
// while(left<=right)
// {
//     let mid=Math.floor((left+right)/2)
//     if(arr[mid]==target)
//     {
//         return mid
//     }
//     else if(arr[mid]>target){
//         right=mid-1
//     }
//     else
//     {
//         left=mid+1
//     }
   
// }

// return -1
// }
// let arr=[1,2,3,4,5]
// let result=binarySearch(arr,2)
// console.log(result)