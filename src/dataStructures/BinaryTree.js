const BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.insert = function(value) {
  const newTree = new BinaryTree(value);
  let node = this;
  const recurse = function(node) {
    if ( value < node.value && node.left === null) {
      node.left = newTree;
      return;
    } else if ( value < node.value && node.left !== null )  {
      recurse(node.left)
    }
    if ( value > node.value && node.right === null ) {
      node.right = newTree;
      return;
    } else if ( value > node.value && node.right !== null )  {
      recurse(node.right)
    }
  }
  recurse(node);
  return newTree;
}

BinaryTree.prototype.DF = function(root, cb){
  let stack = [];
  let done = false;
  let node = root;
  debugger
  while ( !done ) {
    if ( node !== null ) {
      stack.push(node);
      node = node.left;
    } else {
      if ( stack.length > 0 ) {
        node = stack.pop();
        cb(node)
        node = node.right;
      } else {
        done = true;
      }
    }
  }
}


var a = new BinaryTree(5)
a.insert(2)
a.insert(7);
a.insert(1)
a.insert(3);
a.insert(6)
a.insert(8)


a.DF(a, (n) => console.log(n.value))