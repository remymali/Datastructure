class HashTable
{
    constructor(size)
    {
        this.table=new Array(size)
        this.size=size
    }
    hash(key)
    {
        let total =0
        for(let i=0; i< key.length; i++)
        {
            total+= key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value)
    {
        const index=this.hash(key)
       // this.table[index]=value   
       let bucket=this.table[index]
       console.log("check="+bucket)
       if(!bucket)
       {
        this.table[index]=[[key,value]]
       }
       else{
        const sameKeyItem=bucket.find(item=>item[0]===key)
        if(sameKeyItem)
        {
            sameKeyItem[1]=value
        }
        else{
            bucket.push([key,value])
        }
       }
    }
    get(key)
    {
        const index=this.hash(key)
        //return this.table[index]
        let bucket=this.table[index]
        if(bucket)
        {
           const sameKeyValue=bucket.find(item=>item[0]===key)
           if(sameKeyValue)
           {
            return sameKeyValue[1]
           }
        }
        return undefined
    }
    
    remove(key)
    {
        const index =this.hash(key)
        //this.table[index]=undefined
        const bucket=this.table[index]
        if(bucket)
        {
            const sameKeyValue=bucket.find(item=>item[0]===key)
            if(sameKeyValue)
            {
                bucket.splice(bucket.indexOf(sameKeyValue),1)
            }
        }
    }
    display()
    {
        for(let i=0;i<this.size;i++)
        {
            if(this.table[i])
            {
                console.log(i,this.table[i])
            }
        }
    }
}

const table= new HashTable(50)
table.set("name","Remy")
// table.set("age",36)
// table.display()
table.set('mane','Meenakshi')

table.display()
// table.remove('name')
// console.log(table.get('mane'))
// table.display()
