import { LinkedList } from "./linkedList.js";
class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.hashMap = new Array(capacity);
  }
  hash(key) {
    let hashCode = 0;
    let primeNumber = 31;
    for (let i = 0; i < key.length; i++)
      hashCode += (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    return hashCode;
  }
  set(key, value) {
    let index = this.hash(key);
    if (!this.hashMap[index]) {
      let list = new LinkedList();
      list.append(key, value);
      this.hashMap[index] = list;
    } else {
      let list = this.hashMap[index];
      if (this.has(key)) list.updateNode(key, value);
      else list.append(key, value);
    }
    if (this.length() > this.capacity * this.loadFactor) {
      this.resize();
    }
  }
  resize() {
    this.capacity *= 2;
    let tmpArray = [...this.hashMap];
    this.hashMap = new Array(this.capacity);
    tmpArray.forEach((bucket) => {
      if (bucket) {
        let tmp = bucket.head();
        while (tmp != null) {
          this.set(tmp.key, tmp.value);
          tmp = tmp.nextNode;
        }
      }
    });
  }
  get(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.hashMap.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (!this.hashMap[index]) return null;
    return this.hashMap[index].find(key);
  }
  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.hashMap.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (this.hashMap[index] && this.hashMap[index].contains(key)) return true;
    return false;
  }
  remove(key) {
    if (this.has(key)) {
      this.hashMap[this.hash(key)].removeAt(key);
      return true;
    } else return false;
  }
  length() {
    let length = 0;
    for (let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i]) length += this.hashMap[i].size();
    }
    return length;
  }
  clear() {
    this.hashMap = new Array(this.capacity);
  }
  keys() {
    let keys = [];
    this.hashMap.forEach((bucket) => {
      if (bucket) {
        let tmp = bucket.head();
        while (tmp != null) {
          keys.push(tmp.key);
          tmp = tmp.nextNode;
        }
      }
    });
    return keys;
  }
  values() {
    let values = [];
    this.hashMap.forEach((bucket) => {
      if (bucket) {
        let tmp = bucket.head();
        while (tmp != null) {
          values.push(tmp.value);
          tmp = tmp.nextNode;
        }
      }
    });
    return values;
  }
  entries() {
    let entries = [];
    this.hashMap.forEach((bucket) => {
      if (bucket) {
        let tmp = bucket.head();
        while (tmp != null) {
          entries.push([tmp.key, tmp.value]);
          tmp = tmp.nextNode;
        }
      }
    });
    return entries;
  }
}

export { HashMap };
