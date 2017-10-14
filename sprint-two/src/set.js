var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)) { 
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (!this._storage.includes(item)){ 
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var set = Set()

set.add('Susan Sarandon');
set.add('Danny Glover');
console.log(set.contains('Danny Glover'))
console.log(set)

