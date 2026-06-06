class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
    this.size = size;
    this.count = 0;
  }

  _hash(key) {
    let hash = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      hash = (hash * PRIME + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.table[index]) this.table[index] = [];

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
    this.count++;
  }

  get(key) {
    let index = this._hash(key);
    if (!this.table[index]) return undefined;

    for (let pair of this.table[index]) {
      if (pair[0] === key) return pair[1];
    }
    return undefined;
  }

  delete(key) {
    let index = this._hash(key);
    if (!this.table[index]) return false;

    const before = this.table[index].length;
    this.table[index] = this.table[index].filter((p) => p[0] !== key);

    if (this.table[index].length < before) {
      this.count--;
      return true;
    }
    return false;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  keys() {
    return this._collect(0);
  }
  values() {
    return this._collect(1);
  }
  entries() {
    return this._collect();
  }

  _collect(index) {
    let result = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let pair of bucket) {
          result.push(index !== undefined ? pair[index] : pair);
        }
      }
    }
    return result;
  }

  get length() {
    return this.count;
  }

  clear() {
    this.table = new Array(this.size);
    this.count = 0;
  }
}

const ht = new HashTable();
ht.set('Bangladesh', 'BD');
ht.set('India', 'IN');
ht.set('USA', 'US');

console.log(ht.get('Bangladesh')); // "BD"
console.log(ht.has('India')); // true
console.log(ht.length); // 3

ht.delete('USA');
console.log(ht.length); // 2

console.log(ht.keys()); // ["Bangladesh", "India"]
console.log(ht.values()); // ["BD", "IN"]
