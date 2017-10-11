var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value; 
    console.log(storage)
    key++;
  };
  // console.log(storage) why doesn't print ? 

  someInstance.dequeue = function() {
    var firstElement = storage[end]
    if(storage[end]){    
        delete storage[end];
        end++;
    }
    return firstElement
  };

  someInstance.size = function() {
    return key-end;
  };

  return someInstance;
};


