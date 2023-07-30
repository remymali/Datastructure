// class Queue
// {
//     constructor()
//     {
//         this.items=[]
//     }
//     enqueue(element)
//     {
//         this.items.push(element)
//     }
//     dequeue()
//     {
//       return  this.items.shift()
//     }
//     isEmpty()
//     {
//         return this.items.length===0
//     }
//     size()
//     {
//         return this.items.length
//     }
//     peek()
//     {
         
//         if(!this.isEmpty())
//         {
//             return this.items[0]
//         }
//         return null
//     }
//     print()
//     {
//         console.log(this.items.toString())
//     }
//     }

//     const queue=new Queue()
//     queue.enqueue(10)
//     queue.enqueue(20)
//     queue.enqueue(29)

//     queue.dequeue()
//     queue.print()
//     console.log(queue.peek());

// class Queue{
//     constructor()
//     {
//         this.items={}
//         this.rear=0
//         this.front=0
//     }

//     enqueque(element)
//     {
//         this.items[this.rear]=element
//         this.rear++
//     }
//     dequeue()
//     {
//         const item= this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     isEmpty()
//     {
//         return this.rear-this.front===0
//     }
//     peek()
//     {
//         return this.items[this.front]
//     }
//     size()
//     {
//         return this.rear-this.front
//     }
//     print()
//     {
//         console.log(Object.values(this.items))
//     }
// }

// const queue=new Queue
// queue.enqueque(10)
// queue.enqueque(20)
// queue.enqueque(30)
// queue.dequeue()
// queue.print()

// class navigationBar
// {
//     constructor()
//     {
//         this.forwardStack=[]
//         this.backwardStack=[]
//     }
//     forward()
//     {
//         if(this.forwardStack.length>0)
//         {
//             let nextValue=this.forwardStack.pop()
//             this.backwardStack.push(nextValue)
//             console.log("Navigation Bar",nextValue)
//         }
//         else{
//             console.log("No forward library available");
//         }
//     }
//     backward()
//     {
//         if(this.backwardStack.length>0)
//         {
//             let previous=this.backwardStack.pop()
//             this.forwardStack.push(previous)
//             console.log("Navigation Bar",previous)
//         }
//         else{
//             console.log("No backword library available");
//         }
//     }
//     value(page)
//     {
//         this.backwardStack.push(page)
//         this.forward=[]
//         console.log("visit the page",page)
//     }
// }

  
//   // Example usage
//   const navigation = new navigationBar();
  
//   navigation.value("Home");
//   navigation.value("About");
//   navigation.value("Contact");
  
//   navigation.backward(); // Navigating backward to: About
//   navigation.forward(); // Navigating forward to: Contact
//   navigation.backward(); // Navigating backward to: About
//   navigation.backward(); // Navigating backward to: Home
//   navigation.forward(); // Navigating forward to: About
//   navigation.forward(); // Navigating forward to: Contact
//   navigation.forward(); // No forward history available.
  
// class NavigationStack {
//     constructor() {
//       this.backwardStack = [];
//       this.forwardStack = [];
//     }
  
//     // Move forward to the next page
//     forward() {
//       if (this.forwardStack.length > 0) {
//         const nextPage = this.forwardStack.pop();
//         this.backwardStack.push(nextPage);
//         console.log("Navigating forward to:", nextPage);
//       } else {
//         console.log("No forward history available.");
//       }
//     }
  
//     // Move backward to the previous page
//     backward() {
//       if (this.backwardStack.length > 0) {
//         const previousPage = this.backwardStack.pop();
//         this.forwardStack.push(previousPage);
//         console.log("Navigating backward to:", previousPage);
//       } else {
//         console.log("No backward history available.");
//       }
//     }
  
//     // Visit a new page
//     visit(page) {
//       this.backwardStack.push(page);
//       this.forwardStack = []; // Clear the forward history
//       console.log("Visiting page:", page);
//     }
//   }
  
//   // Example usage
//   const navigation = new NavigationStack();
  
//   navigation.visit("Home");
//   navigation.visit("About");
//   navigation.visit("Contact");
  
//   navigation.backward(); // Navigating backward to: About
//   navigation.forward(); // Navigating forward to: Contact
//   navigation.backward(); // Navigating backward to: About
//   navigation.backward(); // Navigating backward to: Home
//   navigation.forward(); // Navigating forward to: About
//   navigation.forward(); // Navigating forward to: Contact
//   navigation.forward(); // No forward history available.
  function sort(arr1,arr2)
  {
    const mergedArr=[]
    let i=0
    let j=0
    while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i]<arr2[j])
        {
            mergedArr.push(arr1[i])
            i++
        }
        else{
            mergedArr.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length)
    {
        mergedArr.push(arr1[i])
        i++
    }
    while(j<arr2.length)
    {
        mergedArr.push(arr2[j])
        j++
    }
    return mergedArr
  }
  const arr1 = [1,4,6,7,9];
  const arr2 = [2,3,5,8,10]
  
  const merged = sort(arr1, arr2);
  console.log(merged); 