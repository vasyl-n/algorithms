const Stack = function() {
  this._storage = [];
}

Stack.prototype.push = function(value) {
  this._storage.push(value)
  return value;
}

Stack.prototype.pop = function() {
  return this._storage.pop()
}

module.exports = Stack;
