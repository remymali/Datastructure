// // class Node
// // {
// //     constructor(value)
// //     {
// //         this.value=value
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // function isValidateBST(root)
// // {
// //  return  isValidateHelper(root,-Infinity,Infinity)
// // }
// // function isValidateHelper(node,min,max)
// // {
// //     if(node===null)
// //     {
// //         return true
// //     }
// //     if(node.value<=min ||node.value>=max)
// //     {
// //         return false
// //     }
// //     return (
// //         isValidateHelper(node.left,min,node.value)&&
// //          isValidateHelper(node.right,node.value,max)
// //          )
// // }
// // const root=new Node(5)
// // root.left=new Node(3)
// // root.right=new Node(7)
// // root.left.left=new Node(2)
// // root.left.right=new Node(4)
// // root.right.left=new Node(6)
// // root.right.right=new Node(8)

// // console.log(isValidateBST(root))

// // root.left.left=new Node(6)
// // console.log(isValidateBST(root))


// class Node{
//     constructor(value)
//     {
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class binarySearch{
//     constructor()
//     {
//         this.root=null
//         this.size=0
//     }
//     insert(value)
//     {
//         let node=new Node(value)
//         if(this.root===null)
//         {
//             this.root=node
//         }
//         else{
//             this.insertNewNode(this.root,node)
//         }
//         this.size++
//     }
//     insertNewNode(root,newNode)
//     {
//         if(root.value>newNode.value)
//         {
//             if(root.left===null)
//             {
//                 root.left=newNode
//             }
//             else
//             {
//                 this.insertNewNode(root.left,newNode)
//             }
//         }
//         else
//         {
//             if(root.right===null)
//             {
//                 root.right=newNode
//             }
//             else
//             {
//                 this.insertNewNode(root.right,newNode)
//             }
//         }
//     }
//     search(root,target)
//     {
//         if(!root)
//         return false
//         else{
//             if(root.value===target)
//             return true
//             else if(root.value>target)
//             {
//                return this.search(root.left,target)
//             }
//             else{
//                 return this.search(root.right,target)
//             }
//         }
//     }
//     preorder(root)
//     {
//         if(root)
//         {
//             console.log(root.value)
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }
//     inorder(root)
//     {
//         if(root)
//         {
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
//         }
//     }
//     postOrder(root)
//     {
//         if(root)
//         {
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
//             }
//         }
//     }
//     min(root)
//     {
//         if(!root.left)
//         return root.value
//         else
//         {
//             return this.min(root.left)
//         }
//     }

//     max(root)
//     {
//         if(!root.right)
//         {
//             return root.value
//         }
//         else
//         {
//             return this.max(root.right)
//         }
//     }
//     findClosestValue(target)
//     {
//         if(!this.root)
//         return null
//         let closestValue=this.root.value
//         let node=this.root
//         while(node!=null)
//         {
//             if(Math.abs(node.value-target)<Math.abs(closestValue-target))
//             {
//                 closestValue=node.value
//             }
//             if(node.value===target)
//             break
//             else if(node.value>target)
//             {
//                 node=node.left
//             }
//             else{
//                 node=node.right
//             }
//         }
//         return closestValue
//     }
//     delete(value)
//     {
//         this.root=this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value)
//     {
//         if(root===null)
//         return null
//         if(value<root.value)
//         {
//             root.left=this.deleteNode(root.left,value)
//         }
//         else if(value>root.value)
//         {
//             root.right=this.deleteNode(root.right,value)
//         }
//         else
//         {
//             if(!root.left && !root.right)
//             {
//                 return null
//             }
//             else if(!root.left)
//             {
//                 return root.right
//             }
//             else if(!root.right)
//             {
//                 return root.left
//             }
//             else
//             {
//                 root.value=this.min(root.right)
//                 root.right=this.delete(root.right,root.value)
//             }
//         }
//         return root
//     }
    
    
// }

// const bst=new binarySearch()
// bst.insert(50);
// bst.insert(30);
// bst.insert(70);
// bst.insert(20);
// bst.insert(40);
// bst.insert(60);
// bst.insert(80);
// bst.inorder(bst.root)
// bst.delete(40)
// bst.inorder(bst.root)
// //console.log(bst.findClosestValue(8))
// //console.log(bst.search(bst.root,10))
// //bst.levelOrder()
// //console.log(bst.max(bst.root))
class TrieNode{
    constructor()
    {
        this.children=new Map();
        this.isEndofWord=false;
    }
}  
class trie{
    constructor()
    {
        this.root=new TrieNode()
    }
    Insert(word)
    {
        let currNode=this.root
        for(let i=0;i<word.length;i++)
        {
            let char=word[i]
            if(!currNode.children.has(char))
            {
                currNode.children.set(char,new TrieNode())
            }
            currNode=currNode.children.get(char)
        }
        currNode.isEndOfWord=true
    }
    search(word)
    {
        let currNode=this.root
        for(let i=0;i<word.length;i++)
        {
            let char =word[i]
            if(!currNode.children.has(char))
            {
                return false
            }
            currNode=currNode.children.get(char)
        }
        return currNode.isEndOfWord
    }
    startsWith(Prefix)
{
    let currNode=this.root
    for(let i=0;i<Prefix.length;i++)
    {
        let char=Prefix[i]
        if(!currNode.children.has(char))
        {
            return false
        }
        currNode=currNode.children.get(char)
    }
    return true
}
findLongestPrefix()
{
    let longestPrefix=''
    let currNode=this.root
    while(currNode && currNode.children.size===1 && !currNode.isEndOfWord)
    {
        const childChar=currNode.children.keys().next().value
        longestPrefix+=childChar
        currNode=currNode.children.get(childChar)
    }
    return longestPrefix
}
}  

let objtrie= new trie()
objtrie.Insert('Apple')
objtrie.Insert('Apply')
objtrie.Insert('Aptitude')
objtrie.Insert('Application')
objtrie.Insert('App')

console.log(objtrie.search("Apple"));
console.log(objtrie.startsWith('p'))
console.log(objtrie.findLongestPrefix())
