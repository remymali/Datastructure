

// const { resolve } = require("promise")


// // function add(num1,num2,callback)
// // {
// //     let err=false
// //     if(num1==0)
// //     {
// //         err=true
// //     }
// //     callback(num1+num2,err)
// // }
// // function multiply(num1,num2,callback)
// // {
// //     let err=false
// //     if(num1==0)
// //     {
// //         err=true
// //     }
// // callback(num1*num2)
// // }
// // function division(num1,num2,callback)
// // {
// //     callback(num1/num2)
// // }

// // add(20,10,(sum,err)=>
// // {
// //     if(err)
// //     {
// //         console.log("The first number is zero");
// //     }
// //     else{
// //         console.log(sum)
// //         multiply(sum,sum,(mul)=>{
// //             console.log("product="+mul)
// //             division(mul,10,(result)=>{
// //                 console.log(result);
// //             })
// //         })
// //     }
// // })

// // const Promise=require('promise')

// // function add(num1,num2)
// // {
// //     return new Promise((resolve,reject)=>{
// //         if(num1==0)
// //         {
// //             reject("First number is zero")
// //         }
// //             resolve(num1+num2)
// //     })
// // }
// // function mul(num1,num2)
// // {
// //     return new Promise((resolve,reject)=>{
// //         resolve(num1*num2)
// //     })
// // }
// // function division(num1,num2)
// // {
// //     return new Promise((resolve,reject)=>{
// //         resolve(num1/num2)
// //     })
// // }
// // add(10,20).then((sum)=>{
// //     console.log(sum)
// //     return mul(sum,sum).then(prod=>{
// //         console.log(prod)
// //         return division(prod,10).then(result=>{
// //             console.log(result)
// //         })
// //     })
   
// // }).catch((err)=>{
// //     console.log(err)
// // })
// // function getname(){
// // return new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve('Remy')
// //     },2000)
    
// // })
// // }
// // function getNumber(){
// //     return new Promise((resolve,reject)=>{
// // setTimeout(()=>{
// //     resolve("9048098002")
// // },3000)

// //     })
// // }
// // console.log("Start");
// // getname().then((resolve)=>{
// //     console.log(resolve);
// // })
// // getNumber().then((resolve)=>{
// //     console.log(resolve);
// // })
// // Promise.all([getNumber(),getname()]).then(result=>{
// //     console.log(result)
// // })
// // async function getUser(){
// //     let name=await getname()
// //     console.log(name)
// //     let number= await getNumber()
// //     console.log(number)
// // }
// // getUser()


// // let intervalId;
// // // Start the interval
// // intervalId = setInterval(function() {
// //   console.log('This will run every 2 seconds');
// // }, 2000);

// // // Cancel the interval after 10 seconds
// // setTimeout(function() {
// //   clearInterval(intervalId);
// //   console.log('Interval cancelled');
// // }, 4000);

// var person=[]
//   {
//     name:"Remy"
//   place:"Ernakulam"
//   age:36
//   },
// }
//   {
//   name:"Remy"

//   place:"Ernakulam"
//   age:36

//   }
// };

// let onePerson=person.find(a=>)

let arr=[1,2,3,4,5,6]
const [first,second,...rest]=arr
console.log(rest)