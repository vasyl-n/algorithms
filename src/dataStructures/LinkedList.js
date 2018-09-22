const LinkedList = function() {
  this.head = null;
  this.tail = null;
}

const Node = function(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.addToTail = function(value) {
  const node = new Node(value);
  if ( this.head === null && this.tail === null ) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
}

LinkedList.prototype.removeHead = function() {
  this.head = this.head.next;
}

LinkedList.prototype.contains = function(target) {
  let node = this.head;
  while( node !== null ) {
    if( node.value === target ) {
      return true;
    }
    node = node.next;
  }
  return false;
}

module.exports.LinkedList = LinkedList;
module.exports.Node = Node;
