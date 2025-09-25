class HashMap{
    constructor(loadFactor,capacity){
        this.loadFactor=loadFactor
        this.capacity=capacity
        this.hash=new Array(capacity)
    }
    hash(key){
        let hashCode=0
        let primeNumber=31
        for(let i=0;i<key.length;i++)
            hashCode+=(primeNumber*hashCode+key.charCodeAt(i)) % this.capacity
        return hashCode
    }
    set(key,value){
        let hashIndex=this.hash(key)
        if(!this.hash[hashIndex])
            this.hash[hashIndex]={
        key:key,
        value:value
    }
    else{
        if(this.hash[hashIndex].key===key)
            this.hash[hashIndex].value=value
    }
    }
    get(key){
        let hashIndex=this.hash(key)
        if(!this.hash[hashIndex]) return null
        if(this.hash[hashIndex].key===key) return this.hash[hashIndex].value
    }
    has(key){

    }
    remove(key){

    }
    length(){

    }
    clear(){

    }
    keys(){

    }
    values(){

    }
    entries(){

    }
}