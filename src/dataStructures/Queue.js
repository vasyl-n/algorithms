var LinkedList = require('./LinkedList').LinkedList;
var LinkedListNode = require('./LinkedList').Node;

const Queue = function() {
  this.list = new LinkedList()
}

Queue.prototype.enqueue = function(value) {
  this.list.addToTail(value)
}

Queue.prototype.dequeue = function() {
  const value = this.list.head.value;
  this.list.removeHead();
  return value;
}

module.exports = Queue;
