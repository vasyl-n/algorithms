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

BinaryTree.prototype.inorder = function(root, cb){
  let stack = [];
  let done = false;
  let node = root;
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

BinaryTree.prototype.DF = function(root, cb) {
  let stack = [];
  let done = false;
  node = root;
  while ( !done ) {
    if ( node !== null ) {
      cb(node);
      stack.push(node);
      node = node.left;
    } else {
      if ( stack.length > 0 ) {
        var n = stack.pop();
        node = n.right;
      } else {
        done = true;
      }
    }
  }
}

BinaryTree.prototype.BF = function(root, cb) {
  let queue = [root];
  node = root;
  while ( queue.length > 0 ) {
    var el = queue.shift();
    cb(el);
    el.left && queue.push(el.left);
    el.right && queue.push(el.right)
  }
}


var a = new BinaryTree(5)
a.insert(2)
a.insert(7);
a.insert(1)
a.insert(3);
a.insert(6)
a.insert(8)


// a.inorder(a, (n) => console.log(n.value));
// a.DF(a, (n) => console.log(n.value));
a.BF(a, (n) => console.log(n.value));