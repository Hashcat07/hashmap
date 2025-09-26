class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }
  append(key,value) {
    let newNode = new node(key,value);
    if (this.headNode === null) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      let tail = this.tail();
      tail.nextNode = newNode;
      this.tailNode = newNode;
    }
  }
  updateNode(key,value)
  {
    let tmp=this.headNode
    while(tmp.key!=key)
      tmp=tmp.nextNode
    tmp.value=value
  }
  size() {
    let length = 0;
    let tmp = this.head();
    while (tmp != null) {
      length++;
      tmp = tmp.nextNode;
    }
    return length;
  }
  head() {
    return this.headNode;
  }
  tail(){
    return this.tailNode}
  contains(key) {
    let tmp = this.head();
     while(tmp!=null){
      if(tmp.key===key)
        return true
      tmp=tmp.nextNode
}
    return false;
  }
  at(key) {
    let tmp = this.head();
    while(tmp!=null)
    {
      if(tmp.key===key)return tmp
      tmp=tmp.nextNode
    }
    return null;
  }
  find(key) {
    let tmp = this.head();
    let i = 0;
    while(tmp!=null){
      if(tmp.key===key)
        return tmp.value
      tmp=tmp.nextNode
    }
    return "Not Found";
  }
  toString() {
    let tmp = this.head();
    let list = "";
    if (this.headNode === null && this.tailNode === null) return "Empty List";
    while (tmp != null) {
      list += `${tmp.key}->`;
      tmp = tmp.nextNode;
    }
    return list+`${null}`;
  }
  removeAt(key) {
    if(!this.headNode) return 
    let tmp = this.head();
    if(tmp.key===key)
    {
      this.headNode=this.headNode.nextNode
      if(!this.headNode){
        this.tailNode=null
        return
      }
      return
    }
    let atIndex = this.at(key);
    if(!atIndex) return
    while (tmp.nextNode != atIndex) tmp = tmp.nextNode;
    tmp.nextNode = atIndex.nextNode;
  }
}

class node {
  constructor(key,value) {
    this.value = value;
    this.key=key
    this.nextNode = null;
  }
}

export { LinkedList };
