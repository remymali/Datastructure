// //bubble sort
// // function bubbleSort(arr) {
// //     let swapped=true
// //    while(swapped)
// //    {
// //         swapped=false
// //         let i=0
// //         while(i<arr.length-1)
// //         {
// //             if(arr[i]>arr[i+1])
// //             {
// //             let temp=arr[i]
// //             arr[i]=arr[i+1]
// //             arr[i+1]=temp
// //             swapped=true
// //             }
// //             i++
// //         }
// //     }
// // return arr
// // }
// //   let arr =  [13,56,7,13,13,5];
// // let result=bubbleSort(arr)
// // console.log(result)

// //Insertion sort
// // function insertion(arr)
// // {
   
// // for(i=1;i<arr.length;i++)
// // {
   
// //         let currentValue=arr[i]
// //         let j=i-1
// //         while(j>=0 && arr[j]>currentValue)
// //         {
// //             arr[j+1]=arr[j]
// //             j--
// //         }
// //         arr[j+1]=currentValue

   

// // }
// // return arr
// // }
// // let arr=[33,3,22,89,1,43,10]
// // let result=insertion(arr)
// // console.log(result)

// //Quick sort

// // function quickSort(arr)
// // {
// //     if(arr.length<2)
// //     return arr
// //     let pivot=arr[arr.length-1]
// //     let left=[]
// //     let right=[]
// // for(i=0;i<arr.length-1;i++)
// // {
// //     if(pivot>arr[i])
// //     {
// //         left.push(arr[i])
// //     }
// //     else
// //     {
// //         right.push(arr[i])
// //     }
// // }
// // return [...quickSort(left),pivot,...quickSort(right)]
// // }
// // let arr=[33,3,22,89,1,43,10]
// // let res=quickSort(arr)
// // console.log(res)

// class HashTable
// {
//     constructor(size)
//     {
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key)
//     {
//         let total=0
        
//         for(let i=0;i<key.length;i++)
//         {
//             total+=key.charCodeAt(i)
//         }

//         return total%this.size
//     }
//     set(key,value)
//     {
//         let index=this.hash(key)
//         this.table[index]=value
//     }
//     get(key)
//     {
//         let index=this.hash(key)
//         return this.table[index]
//     }
//     display()
//     {
//         for(let i=0;i<this.size;i++)
//         {
//             if(this.table[i])
//             {
//                 console.log(i,this.table[i])
//             }
//         }
//     }
//     remove(key)
//     {
//         let index=this.hash(key)
//         this.table[index]=undefined
//     }
// }
// let table=new HashTable(50)
// table.set('name','Preetha')
// table.set('RollNo',36)
// console.log(table.get('name')
// );
// //table.remove('name')
// table.display()
class HashTable
{
    constructor(size)
    {
        this.table=new Array(size)
        this.size=size
    }
    hash(key)
    {
        let total=0
        for(let i=0;i<key.length;i++)
        {
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value)
    {
        let index=this.hash(key)
        this.table[index]=value
    }
    get(key)
    {
        let index=this.hash(key)
        console.log(this.table[index])
    }
    display()
    {
        for(let i=0;i<this.size;i++)
        {
            if(this.table[i])
            console.log(i ,this.table[i])
        }
    }
    remove(key)
    {
        let index=this.hash(key)
        this.table[index]=undefined
    }
}
let table=new HashTable(50)
table.set('name','Teena')
table.set('age',35)
table.get('age')
table.display()
table.remove('name')
table.display()