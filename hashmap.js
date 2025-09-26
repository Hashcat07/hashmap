class HashMap{
    constructor(loadFactor=0.75,capacity=16){
        this.loadFactor=loadFactor
        this.capacity=capacity
        this.hashMap=new Array(capacity)
    }
    hash(key){
        let hashCode=0
        let primeNumber=31
        for(let i=0;i<key.length;i++)
            hashCode+=(primeNumber*hashCode+key.charCodeAt(i)) % this.capacity
        return hashCode
    }
    set(key,value){
        let index=this.hash(key)
        if(!this.hashMap[index])
            this.hashMap[index]={
        key:key,
        value:value
    }
    else{
        if(this.hashMap[index].key===key)
            this.hashMap[index].value=value
    }
    }
    get(key){
        let index=this.hash(key)
        if (index < 0 || index >= this.hashMap.length) {
  throw new Error("Trying to access index out of bounds");
}
    else if(!this.hashMap[index]) return null
    else return this.hashMap[index].value
    }
    has(key){
let index=this.hash(key)
        if (index < 0 || index >= this.hashMap.length) {
  throw new Error("Trying to access index out of bounds");
}
    if(this.hashMap[index].key===key)return true
    return false
    }
    remove(key){
        if(this.has(key)){
            this.hashMap[this.hash(key)]=undefined
        return true
        }
        else
            return false

    }
    length(){
        let length=0
        for(let i=0;i<this.hashMap.length;i++)
        {
            if(this.hashMap[i])
                length++
        }
        return length
    }
    clear(){
        this.hashMap=new Array(this.capacity)

    }
    keys(){
        let keys=[]
        this.hashMap.forEach(bucket=>{
            if(bucket)
                keys.push(bucket.key)
        })
        return keys
    }
    values(){
        let values=[]
        this.hashMap.forEach(bucket=>{
            if(bucket)
                values.push(bucket.value)
        })
        return values
    }
    entries(){
        let entries=[]
        this.hashMap.forEach(bucket=>{
            entries.push([bucket.key,bucket.value])
        })
        return entries
    }

}
