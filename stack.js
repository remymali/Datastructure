// class Stack
// {
//     constructor()
//     {
//         this.items=[]
//     }

//     push(element)
//     {
//         this.items.push(element)
//     }
//     pop()
//     {
//         return this.items.pop()
//     }
//     peek()
//     {
//         return this.items[this.items.length-1]
//     }
//     isempty()
//     {
//         return this.items.length===0
//     }
//     size()
//     {
//         return this.items.length
//     }
//     print()
//     {
//         console.log(this.items.toString())
//     }
// }
// const stack=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()

// console.log(stack.peek());
// let size=stack.size()
// let reversedStack=[]
// for(let i=0;i<size;i++)
// { reversedStack+=stack.pop()
// }
// console.log(reversedStack)

// function reverseStack(stack)
// {
//     if(stack.length===0)
//     {
//         return
//     }
//    const element=stack.pop()
//    console.log(element) 
//    reverseStack(stack)
//    stack.push(element)
// }
// const stack = [1, 2, 3, 4, 5];
// const stack2=[8,7,6,5]
// //reverseStack(stack)
// let concatedStack=stack.concat(stack2.reverse())
// console.log(concatedStack)

function selectionSort(arr)
{
for(let i=0;i<arr.length-1;i++)
{   let  large=i
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[large]>arr[j])
        {
            large=j
        }

    }
    let temp=arr[i]
    arr[i]=arr[large]
    arr[large]=temp
}
return arr
}
let arr= [1, 4, 6, 7, 9,
10, 2, 3, 5, 8]
console.log(selectionSort(arr))