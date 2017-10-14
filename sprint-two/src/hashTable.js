
var LimitedArray = function(limit) {
  var storage = []; // ask it later !!!

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};



// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if (this.retrieve(k) === this._storage[index]){
  //   this._storage[index] = v;
  // }
  if (this._storage.hasOwnProperty(index)) {
    var newObj = {};
    newObj[this._storage[index]] = index;
    newObj[v] = index;
    this._storage[index] = newObj;
  } else {
    this._storage[index] = v;
  }  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.hasOwnProperty(index)) {
    if (typeof this._storage[index] === 'object') {
      for (var key in this._storage[index]) {
        if (k === this._storage[index][key]) {
          return key;
        }
      }
    } else {
      return this._storage[index];
    }
  }  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};


var hashTable = new HashTable();
hashTable.insert('aygerim', 21)
console.log(hashTable)
/*
 * Complexity: What is the time complexity of the above functions?
 */


