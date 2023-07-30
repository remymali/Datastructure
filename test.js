
// // // // let object={
// // // //     name:"Remy",
// // // //     roll:1,

// // // const { reject } = require("promise")
// // // const { question } = require("readline-sync")


// // // // }
// // // // let printFullname =function(){
// // // //     console.log(this.name+" "+this.roll)
// // // // }
// // // // let object2={
// // // //     name:"Rayees"
// // // // }
// // // // let printFun=printFullname.bind(object)
// // // // printFun();
// // // //console.log(object2["name"])
// // // //for(let key in object)
// // // //console.log(object[key])
// // // //console.log(Object.entries(object))
// // // // object.hobbys=["Designing","baking"]
// // // // console.log(object)
// // // // object.hobbys=["Designing","baking"]
// // // // let objectCopy=Object.assign(object)
// // // // console.log(object)
// // // // objectCopy.hobbys.push('stitching')
// // // // objectCopy.skill={
// // // //     frontEnd:["js","html","css"],
// // // //     backEnd:["node","nest.js","express.js"]
// // // // }
// // // // let object={
// // // //     name:"Remy",
// // // //     roll:1,
// // // //     print:function()
// // // //     {
// // // //         console.log(`${this.name}+" "+${this.roll}`)
// // // //     }
// // // // }
// // // // let object2={
// // // //     name:"Rayees"
// // // // }
// // // //console.log(Object.prototype.object)


// // // // function mult(a,b)
// // // // {

// // // //     if(b==0)
// // // //     return 0;
// // // //     else
// // // //     {
// // // //     return  a+mult(a,b-1)
// // // //     }
// // // // }
// // // // let result=mult(5,4)
// // // // console.log(result)
// // // // const originalObject = {
// // // //     name: "John",
// // // //     age: 30,
// // // //     address: {
// // // //       city: "New York",
// // // //       country: "USA"
// // // //     }
// // // //   };

// // // //   const shallowCopy = {...originalObject};

// // // //   console.log(originalObject); // Output: { name: "John", age: 30, address: { city: "New York", country: "USA" } }
// // // //   console.log(shallowCopy); // Output: { name: "John", age: 30, address: { city: "New York", country: "USA" } }

// // // //   shallowCopy.address.city = "India";
// // // //   console.log(originalObject); // Output: { name: "John", age: 30, address: { city: "London", country: "USA" } }
// // // //   console.log(shallowCopy); // Output: { name: "John", age: 30, address: { city: "London", country: "USA" } }

// // // // Let's say we have a function that takes an argument and we want to provide a default value if the argument is null or undefined
// // // // function greet(name) {
// // // //     const defaultName = ' ';
// // // //     const greeting = `Hello, ${name ?? defaultName}!`;
// // // //     console.log(greeting);
// // // //   }

// // // //   greet(); // Output: "Hello, friend!"
// // // //   greet('Alice'); // Output: "Hello, Alice!"
// // // //   greet(null); // Output: "Hello, friend!"
// // // //   greet(undefined); // Output: "Hello, friend!"

// // // // function add(num1,num2,callback)
// // // // {
// // // //     let err=false
// // // //     if(num1==0)
// // // //     {
// // // //         err=true
// // // //     }
// // // //     callback(num1+num2,err)
// // // // }
// // // // function mult(num1,num2,callback)
// // // //  add(10,20,(prod)=>{
// // // //     console.log(prod)
// // // //     mult()
// // // // });

// // // // fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// // // //        .then((res)=>res.json())
// // // //        .then((msg)=>console.log(msg[0].setup, msg[0].punchline))
// // // //        .catch((err)=>console.log(err))

// // // //   let arr=[1,2,3,4]
// // // //   let result=arr.filter((num)=> num%2==0)
// // // //   console.log(result)
// // // //   let str='hello'
// // // //   console.log(str.split('').reverse().join(''));

// // // // const people="Remy M Ali"
// // // // console.log(people.trim().length);
// // // let arr=[1,2,3,4,2,3,5,6,2]
// // // // let newArr=new Set(arr)
// // // // let filteredArr=arr.filter((currElem)=>
// // // // {
// // // //     if(newArr.has(currElem))
// // // //     return newArr.delete(currElem)

// // // // });
// // // // console.log(filteredArr);

// // // function sum(arr)
// // // {
// // //     if(arr.length===0)
// // //     return 0
// // //     else
// // // return arr[0]+sum(arr.slice(1))
// // // }
// // // console.log(sum(arr))
// // // const person={
// // //     name:"Remy",
// // //     rollNo:57,
// // //     printDtl:function(district,state){
// // //         console.log(`${this.name} of roll number ${this.rollNo} from district ${this.district} in state ${this.state}`)
// // //     }

// // // };
// // // //person.printDtl.apply(person,['Ernakulam','Kerala'])
// // // let fun=person.printDtl.bind(person,'Ernakulam','Kerala')
// // // fun()
// // // let str="1234"
// // // let newStr=str.split('').toString()
// // // console.log(newStr);
// // // let arr=['apple','pinapple']
// // // const [a,b]=arr
// // // console.log(b)
// // // function add(num1,num2)
// // // {
// // //     return new Promise((Response,Reject)=>{
// // //         if(num1==0)
// // //         Reject("First number is zero")
// // //         else
// // //         Response(num1+num2)
// // //     })
// // // }
// // // function mul(num1,num2)
// // // {
// // //     return new Promise((Response,Reject)=>{
// // //         Response(num1*num2)
// // //     })
// // // }
// // // function div(num1,num2)
// // // {
// // //     return new Promise((Response,Reject)=>{
// // //         Response(num1/num2)
// // //     })
// // // }

// // // async function getEmployee()
// // // {
// // //     let allEmpDtls=await getAllEmpDtl()
// // //         console.log("asdsad")

// // // }
// // // add(0,10).then((sum)=>{
// // //     console.log(sum)
// // //     return mul(sum,sum).then((prod)=>{
// // //         console.log(prod)
// // //         return div(prod,10).then((result)=>{
// // //             console.log(result)
// // //         })
// // //     })
// // // }).catch((err)=>{
// // //     console.log(err)
// // // })

// // // let intervalId

// // // intervalId=setInterval(function(){
// // //     console.log(" This will be printing after a certain intervals")
// // // },2000);

// // // setTimeout(function(){
// // //     clearInterval(intervalId)
// // //     console.log("Interval is cleared")
// // // },6000)

// // // let promise=new Promise((resolve,reject)=>{
// // //     let error=false
// // //     if(error==true)
// // //     reject('Failed!')
// // //     else
// // //     resolve('Success!')
// // // })
// // // promise.then((response)=>{
// // // console.log(response)
// // // }).catch((err)=>{
// // //     console.log(err)
// // // })
// // // let nums=[4,3,2,7,8,2,3,1],arr2=[]
// // // var findDisappearedNumbers = function(nums) {
// // //     var newArray = [];
// // //     var missing = [];
// // //     for(let i =0 ; i < nums.length; i++ ) {
// // //         newArray[nums[i]] = nums[i];
// // //     }
// // //     for(let i = 1; i <= nums.length; i++) {
// // //         if(newArray[i] == null) {
// // //             missing.push(i);
// // //         }
// // //     }
// // //     return missing;
// // // };
// // // let result=findDisappearedNumbers(nums)
// // // console.log(result);
// // //  let arr=[4,3,2,7,8,2,3,1]
// // // const read=require('readline-sync')
// // //  let n=Number(read.question("Enter a number"))
// // //  let sum=0,arr2=[],f=1
// // //  for(let i=1;i<=n;i++)
// // //  {

// // //     arr2.push(sum)
// // //     sum+=f

// // //  }
// // //  console.log(arr2)
// // // function factorial(n)
// // // {
// // //    let fact =1;
// // //    for(i=2;i<=n;i++)
// // //    {
// // //       fact=fact*i;
// // //    }
// // //    return fact
// // // }
// // // console.log(factorial(3))
// // // function isprimeNumber(n)
// // // {
// // //    if(n<2)
// // //    return false

// // //    for(i=2;i<=n;i++)
// // //    {
// // //       if(n%i==0)
// // //       return false
// // //       else 
// // //       return true
// // //    }
// // // }

// // // console.log(isprimeNumber(5))

// // // function powerrOf2(n)
// // // {
// // //    if(n<1)
// // //    return false
// // //    else{
// // //          while(n>2)
// // //          {
// // //          if(n%2!==0)
// // //          return false
// // //             n=n/2
// // //          }
// // //          return true
// // //       }

// // // }
// // // console.log(powerrOf2(6)); 
// // //linear search
// // // function linearSearch(arr,target)
// // // {
// // // for(let i=0;i<arr.length;i++)
// // // {
// // //    if(arr[i]===target)
// // //    {
// // //       return arr.indexOf(arr[i])
// // //    }
// // // }
// // // }

// // // const array=[1,3,4,5,6,9]
// // // const indexOfVal=linearSearch(array,6)
// // // console.log("Index of array element"+indexOfVal)

// // //non linear
// // // function binarySearch(arr,target)
// // // {
// // //   let size=arr.length
// // //   let left=0
// // //   let right=size-1
// // //   while(left<=right)
// // //   {
// // //     let mid=Math.floor((left+right)/2)
// // //     if(arr[mid]===target)
// // //     {
// // //       return mid
// // //     }
// // //     else if(arr[mid]>target)
// // //     {
// // //       right=mid-1
// // //     }
// // //     else{
// // //       left=mid+1
// // //     }
// // //   }
// // //   return -1
// // // }
// // // const array=[1,3,4,5,6,9]
// // // let result=binarySearch(array,6)
// // // console.log(result)
// // // function fibanocci(n)
// // // {
// // //   let fib=[0,1]
// // //   for(let i=2;i<n;i++)
// // //   {
// // //     fib[i]=fib[i-2]+fib[i-1]
// // //   }
// // //   return fib
// // // }

// // // let result=fibanocci(6)
// // // console.log(result)

// // // function factorial(n)
// // // {
// // //   let fact=1
// // //   for(let i=1;i<=n;i++)
// // //   {
// // //     fact=fact*i
// // //   }
// // //   return fact
// // // }
// // // let result=factorial(4)
// // // console.log(result)
// // // function returnIndex(arr,target)
// // // {
// // //   let n=arr.length
// // // for(let i=0;i<n;i++ ) 
// // //  {
// // //   for(let j=0;j<n;j++ ) 
// // //   {
// // //     if(arr[i]+arr[j]==target)
// // //     {
// // //       return [i,j]
// // //     }

// // //   }
// // // }
// // //  }
// // //let array=[1,2,3,4,5]
// // // console.log(returnIndex(array,5))
// // // function shiftLeft(arr,n)
// // // {
// // //   let size=arr.length
// // //   for(let j=0;j<n;j++)
// // //   {
// // //   let temp=arr[0]
// // //   for(i=0;i<size;i++)
// // //   {
// // //     arr[i]=arr[i+1]
// // //   }
// // //   arr[size-1]=temp

// // // }
// // // console.log(arr);
// // // }

// // // shiftLeft(array,2)
// // // function insert(arr,index,value)
// // // {
// // //   let n=arr.length
// // //   let temp=0
// // //   for(let i=0;i<=n;i++)
// // //   {
// // //     if(i==index)
// // //     {
// // //       for(let j=n;j>i;j--)
// // //       {
// // //         arr[j]=arr[j-1]
// // //       }
// // //       arr[i]=value
// // //     }
// // //   }
// // //   console.log(arr)
// // // }
// // // let arr=[1,2,3,4]
// // // insert(arr,2,100)

// // // function deleteElemArray(arr,index)
// // // {
// // //   let n=arr.length
// // //   for(i=0;i<n;i++)
// // //   {
// // //     if(i==index)
// // //     {
      
// // //         arr[i]=arr[i+1]
// // //       i--
// // //       n--
// // //     }
// // //   }
// // //   console.log(arr)
// // // }
// // // let arr=[1,2,3,4,3,6,7]
// // //  deleteElemArray(arr,2)
// // // let arr=[1,2,3,4,3,6,7]
// // //console.log(arr.reverse())
// // // let n=arr.length/2-1
// // // for(i=n;i>0;i--)
// // // {
// // //   let arr2=arr[i]
  
// // // }
// // // // console.log(arr2)
// // // let str=["abcd"]

// // // console.log(str1)
// // //  str=["abcde"]
// // // const str2=str.toString()

// // // for(let i=0;i<str.length;i++)
// // // {
// // //   const str1=str.toString()
// // //   const charo = str1[i];
// // //   const asciiValue = charo.charCodeAt(i);
// // //   console.log(`Character: ${charo}, ASCII Value: ${asciiValue}`);
// //   // const char2 = str2[i];
// //   // const asciiValue2 = char2.charCodeAt(i);
// //   // console.log(`Character: ${char2}, ASCII Value: ${asciiValue2}`);
// // //}
// // const str = ["abcd"];
// //  const string=str.toString() 
// //  const str2 = ["abcde"];
// //  const string2=str.toString() 
// // console.log(string)
// // let sum1=0
// // let sum2=0
// // for (let i = 0; i < string.length; i++) {
// //   const char = string[i];
// //   const asciiValue = string.charCodeAt(i);
 
// //   sum1+=asciiValue
// //   const char2 = string2[i];
// //   const asciiValue2 = string2.charCodeAt(i);
  
// //   sum2+=asciiValue2
// //   console.log(`Character: ${char}, ASCII Value: ${asciiValue}`);
// // }
// // console.log(String.fromCharCode(sum1-sum2))
// // function primeNumber(n)
// // {
// //   if(n<2)
// //   {
// //     return false
// //   }
// //   for(let i=2;i<Math.sqrt(n);i++)
// //   {
// //     if(n%i===0 && n!=2)
// //     {
// //       return false
// //     }
  
// //   }
// //   return true
// // }
// // let result=primeNumber(51)
// // console.log(result)
// // if(result)
// // console.log("Prime Number")
// // else
// // console.log("Not a Prime Number")
// // let arr=[1,2,3,4,2,3,4,5]
// // let newArr=new Set(arr)
// // console.log(newArr)
// //function powerOf2(n)
// // {
// //   if(n<1)
// //   return false
// //   return (n & (n-1))===0
// // }

// // let result =powerOf2(7)
// // console.log(result)

// // function recursiveFibanocci(number)
// // {
// //   if(number<2)
// //   return number
// //   return recursiveFibanocci(number-1)+recursiveFibanocci(number-2)
  
// // }
// // let result=recursiveFibanocci(8)
// // console.log(result);
// // function recusiveFactorial(n)
// // {
// // if(n<2)
// // return 1
// // return n*recusiveFactorial(n-1)
// // }
// // let result=recusiveFactorial(3)
// // console.log(result)
// // let array=[10,100,1000,250,750],largest=0,secLargest=0;
// // for(i=0;i<array.length;i++)
// // {
// //   if(array[i]>largest)
// //   {
// //     secLargest=largest
// //     largest=array[i]
// //   }
// //   else if(array[i]<largest && array[i]>secLargest)
// //   {
// //     secLargest=array[i]
// //   }

// // }


// // console.log(secLargest);
// // function print(num)
// // {
// //   if(num>0)
// //   {
// //   print(num-1)
// //   console.log(num)
// //   }
// // }
// // print(3)
// // class Node
// // {
// //   constructor(value)
// //   {
// //     this.value=value
// //     this.next=null
// //   }
// // }
// // class LinkedList
// // {
// //   constructor()
// //   {
// //     this.head=null
// //     this.size=0
// //   }
// //   isEmpty()
// //   {
// //     return this.size===0
// //   }
// //   print()
// //   {
// //     if(this.isEmpty())
// //     {
// //       return 
// //     }
// //     else
// //     {
// //       let curr=this.head
// //       while(curr)
// //       {
// //         curr=curr.next
// //       }
// //     }
// //   }
// // }
// // function recursiveBinarySearch(arr,target)
// // {
// //   return search(arr,target,0,arr.length-1)
// // }
// // function search(arr,target,left,right)
// // {if(left>right)
// //   {
// //     return -1
// //   }
  
// //     let mid=Math.floor((left+right)/2)
// //     if(arr[mid]===target)
// //     {
// //       return mid
// //     }
// //     else if(arr[mid]<target)
// //     {
// //      return search(arr,target,mid+1,right)
// //     }
// //     else
// //     {
// //       return search(arr,target,left,mid-1)
// //     }
  
 
// // }
// // let arr=[1,2,3,4,5]
// // console.log(recursiveBinarySearch(arr,4))

// // function recursiveBinarySearch(arr,target)
// // {
// //   return search(arr,target,0,arr.length-1)
// // }

// // function search(arr,target,left,right)
// // {
// //   if(left>right)
// //   {
// //     return -1
// //   }
// //   let mid=Math.floor((left+right)/2)
// //   if(arr[mid]===target)
// //   {
// //     return mid
// //   }
// //   else if(arr[mid]>target)
// //   {
// //     return search(arr,target,left,mid-1)
// //   }
// //   else{
// //     return search(arr,target,mid+1,right)
// //   }
// // }
// // let arr=[1,2,3,4,5]
// // console.log(recursiveBinarySearch(arr,4))

// // function replaceCharacterByStar(str,index)
// // {
// //   let newstr=''
// //   let j=0
// // for(i=0;i<str.length;i++)
// // {
// //   if(i===index[j])
// //   {
// //     newstr+='*'
// //     j++
// //   }
// //   else{
// //     newstr+=str[i]
// //   }
// // }
// // return newstr
// // }

// // let str="codeRevolution"
// // let arr=[2,3,4]
// // console.log(replaceCharacterByStar(str,arr))

// // function palindrom(string)
// // {
// // let n=string.length
// // let left=0
// // let right=n-1
// // while(left<=right)
// // {
// //   if(string[left]!=string[right])
// //   {
// //     return false
// //   }
// //   left++
// //   right--
// // }
// // return true
// // }
// // let str="racecar"
// // palindrom(str)?console.log("The string is palindrom."):console.log("The string is not palindrom")
// class Node{
//   constructor(value)
//   {
//     this.value=value
//     this.next=null
//   }
// }
// class LinkedList{
//   constructor()
//   {
//     this.head=null
//     this.size=0
//   }
//   isEmpty()
//   {
//     this.size===0
//   }
  
//     arrayToList(arr)
//     {
//       while(arr.length!=0)
//       {
//         let node=new Node(arr.shift())
//         if(this.head===null)
//         {
//           this.head=node
//         }
//         else{
//           let prev=this.head
//           while(prev.next){
//             prev=prev.next
//           }
//           prev.next=node
//           this.size++
//         }
//       }
//     }
//     prepend(value)
//   {
//     let node= new Node(value)
//     if(this.head===null)
//     {
//       this.head=node
//     }
//     else{
//       node.next=this.head
//       this.head=node
//       }
//       this.size++
//     }
//     append(value)
//     {
//       let node=new Node(value)
//       if(this.head===null)
//       {
//         this.head=node
//       }
//       else
//       {
//         let prev= this.head
//         while(prev.next)
//         {
//           prev=prev.next
//         }
//         prev.next=node
//         this.size++
//       }
//     }
//     print()
//     {
//      if(this.isEmpty())
//       {
//         console.log("List is empty")
//       }
//       else
//       {
//         let curr=this.head
//         let listedVlaues=[]
//         while(curr)
//         {
//           listedVlaues.push(curr.value)
//           curr=curr.next
//         }
//         console.log(listedVlaues)
//       }
//     }
//     reverse()
//     {
//       let curr=this.head
//       let prev=null
//       while(curr)
//       {
//         let next=curr.next
//         curr.next=prev
//         prev=curr
//         curr=next
//       }
//       this.head=prev
//     }
//     insertLeftValue(value,target)
//     {
      
//       let node=new Node(value)
//       let curr=this.head
//       let prev=null
//       while(curr && curr.value!=target )
//       {
//         prev=curr
//         curr=curr.next
//       }
//       prev.next=node
//       node.next=curr
     

//     }
//     removeDuplicates()
//     {
//       let curr=this.head
//       while(curr.next)
//       {
//         if(curr.value===curr.next.value)
//         {
//           curr.next=curr.next.next
//           this.size--
//         }
//         else{
//           curr=curr.next
//         }
//       }
//     }

//     delete(value)
//     {
//       let curr=this.head
//       if(this.isEmpty())
//       {
//         console.log("List is empty")
//       }
//       if(this.head.value===value)
//       {
//         this.head=null
//       }
//       else{
//         let prev=null
//         while(curr&& curr.value!=value)
//         {
//           prev=curr
//           curr=curr.next
//         }
//         prev.next=curr.next
//         this.size--
//       }
//     }
    
//     }
//     let list=new LinkedList()
//     list.prepend(10)
//     list.prepend(10)
//     list.append(10)
//     let arr=[1,2,3]
//     list.arrayToList(arr)
//     list.removeDuplicates()
//     list.insertLeftValue(33,100)
//     list.print()
//     list.delete(10)
   
//     list.print()
//     //list.reverse()
//    // list.print()

    
  


// function insertionSort(arr)
// {
//   for(let i=1;i<arr.length;i++)
//   {
//     let current=arr[i]
//     let j=i-1
//     while(j>=0 && arr[j]>current)
//     {
//       arr[j+1]=arr[j]
//       j--
//     }
//     arr[j+1]=current
    
//   }
//   return arr
// }
// let arr=[ 1, 54, 9, 12, 2, 1 ]
// console.log(insertionSort(arr))

// function quickSort(arr)
// {
//   let pivot= arr[arr.length-1]
//   let left=[]
//   let right=[]
//   if(arr.length<2)
//   return arr
//   for(let i=0;i<arr.length-1;i++)
//   {
  
//   if(pivot>arr[i])
//   {
//     left.push(arr[i])
//   }
//   else{
//     right.push(arr[i])
//   }
//   }
//   return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort([ 1, 54, 2, 12, 9, 1 ]))

// function bubbleSort(arr)
// {
//   for(j=0;j<arr.length-1;j++)
//   {
//   for(let i=0;i<arr.length-1-j;i++)
//   {
//     if(arr[i]>arr[i+1])
//     {
//       let temp=arr[i]
//       arr[i]=arr[i+1]
//       arr[i+1]=temp
//     }
//   }
// }
// return arr
// }
// console.log(bubbleSort([ 1, 54, 2, 12, 9, 1 ]))

// function mergeSort(arr)
// {
//   if(arr.length<2)
//   return arr
//   let mid=Math.floor((arr.length)/2)
//   let leftArr=arr.slice(0,mid)
//   let rightArr=arr.slice(mid)
//   return merge(mergeSort(leftArr),mergeSort(rightArr))
// }
// function merge(leftArr,rightArr)
// {
// let sortedArray=[]
// while(leftArr.length&& rightArr.length)
// {
// if(leftArr[0]>rightArr[0])
// {
//   sortedArray.push(rightArr.shift())
// }
// else
// {
//   sortedArray.push(leftArr.shift())
// }
// }
// return [...sortedArray,...leftArr,...rightArr]
// }
// console.log(mergeSort([ 1, 54, 2, 12, 9, 1 ]))
//function print(num)
// {
//   if(num>0)
//   {
//   print(num-1)
//   console.log(num)
//   }
// }
// print(3)