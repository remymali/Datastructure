
class Node
{
construct(value)
{
    this.value=value
    this.next=null
}
}


class HashTable
{
    constructor(size)
    {
        this.table=new Array(size)
        this.size=0
    }
    hash(key)
    {
        let total=0
        for(i=0;i<key.length;i++)
        {
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value)
    {
        let index=this.hash(key)
        let node= new Node(Value)
        if(this.table[index]==null)
        {
            this.table[index]=node
        }
        else{
            let nextIndex=this.table[index]
            while(nextIndex!=null)
            {
                nextIndex=nextIndex.next
            }
            nextIndex.next=node
            
        }
    }
    get(key)
    {
        let index=this.hash(key)
        let currentIndex=index
        while(currentIndex!=null)
        {
        if(this.table[index].key===key)
        {
            return this.table[index]
        }
        currentIndex=currentIndex+1%this.size
    }
        return undefined
    }
}
let hash= new HashTable(50)
