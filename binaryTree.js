/* 
*LETS LEARN ABOUT BINARY TREES
*Root: the value stored in the node. Also name for the "Top" of the tree.
*Node: thing in the tree with children. 
Children can also be nodes, as long as they have their own child/ren.
*Level/height: distance from the root.
Generational distance. Is it first node? (1) nodes children? (2) 
nodes childrens children?(3) etc.
Some consider the first node to be zero? apparently? but it looks like it makes calculations harder.
*Leaf: thing in the tree with no children. At the bottom.

*Perfect Binary tree: All nodes have 2 children, all leaves on same level. 
*Full binary tree: each node has 2 leaves. Leaves can be on different levels
*Degenerate Binary tree: All internal nodes have exactly one node. 
I'm a degenerate binary tree
*Maximum # of nodes each height (where first node is 1): 2^h-1
*max # of nodes possible at a level: i = 2^i 
these 2 do the same thing is? just depends on what info we have I think.
*Min nodes at a height": n = h+1.

*Node has 3 fields:
*Data: Stores the value 
*Left: Stores the left subtree/address to left subtree
*Right: Stores the right subtree/address to the right subtree
*/

//* LETS MAKE A BINARY TREE
class BST {
  /*this is called a BST class in the tutorial we looked at. 
  but this is a blueprint for a node. BST is the collection of nodes.
  though we need only 1 node to make a "tree" so it's not wrong to call it that.
  Also ~*this could have been an object! and some functions! then it'd be functional*~ 
  but we're sticking with the tutorial OOJ formatting for now. 
  */
  constructor(val) {
    this.val = val; //Data. Stores the Value
    this.left = null; // Left Subtree
    this.right = null; //Right Subtree. Nothing besides our one node. so both trees are null.
  }

  // * INSERT
  insert(val) {
    var newNode = new BST(val);
    // each node is its own instance of the tree class. A little confusing but not actually that confusing when you think about it.
    //from hereon its relatively straightforward.
    if (val < this.val && !this.left) {
      //if theres no left value on this bst and our new node is less than it
      this.left = newNode; //we place it on the previously empty left side
    } else if (val < this.val && this.left) {
      //if we already got a left value & our new node is less than node.val
      this.left.insert(val); //
    } else if (val > this.val && !this.right) {
      this.right = newNode;
    } else if (val > this.val && this.right) {
      this.right.insert(val);
    }
  }
  // *SEARCH
  search(val) {
    if (this.val === val) {
      //check against the current nodes value
      return true;
    } else if (this.val > val && this.left) {
      //if less than / left condition, call again on the left side.
      return this.left.search(val); //*DONT FORGET RETURN. THIS IS RECURSION. WE GOTTA RUN IT AGAIN. THAT MEANS RETURN!!
    } else if (this.val < val && this.right) {
      //if right than/ right condition, call again on the right side.
      return this.right.search(val);
    } else {
      //if no right and left exist, or somehow val is some mystical unaccounted for number, then its not there!
      return false;
    }
  }
}

//* IN ORDER TRAVERSAL
/* This gives us an output of smallest to largest in traditional examples of binary tree.
  we go down the leftmost possible root of the tree all the way out to the leaf, then backtrack towards the right.
*/
let myArray = [];
function inOrder(myBST) {
  if (myBST.left) {
    // if theres left left to go
    inOrder(myBST.left); //run this on the left
  }
  myArray.push(myBST.val);
  console.log(myBST.val); //cause of recursion we will get here first when we have the most left value
  if (myBST.right) {
    inOrder(myBST.right); //now we can run this on the right side (if it exists) for this node/leaf
  }
}

//* Out? Order traversal
/*IDK what this is called but if we do the opposite shouldn't it print max to min?
yep it does.
Lets rename this when we learn what its called. outOrder is a bad name.
Looks like its just called right to left inOrder traversal. So we're keeping outOrder.
*/
function outOrder(myBST) {
  if (myBST.right) {
    outOrder(myBST.right);
  }
  console.log(myBST.val);
  if (myBST.right) {
    outOrder(myBST.right);
  }
}

//* PREORDER TRAVERSAL
//slightly confused on what a practical application of this would look like.
// but basically we print/access as we go down the binary tree. Left to right.
function preOrder(myBST) {
  console.log(myBST.val); //this is preOrder. we print the value before we call anything else
  if (myBST.left) {
    //call on left if it exists
    preOrder(myBST.left);
  }
  if (myBST.right) {
    //call on right if it exists
    preOrder(myBST.right);
  }
}

// * POSTORDER TRAVERSAL
/* This one seems a bit more conceptually tricky. We do a left recursive run, then a right recursive run. 
Then access the node value last.
Maybe its just pre order but with the val access at the very end? 
probably its that it would make sense.
lets find out.

yep. Thats all it is.
*/

function postOrder(myBST) {
  if (myBST.left) {
    //call on left if it exists
    postOrder(myBST.left);
  }
  if (myBST.right) {
    //call on right if it exists
    postOrder(myBST.right);
  }
  console.log(myBST.val);
}

let rootNode = new BST(20);
rootNode.insert(15);
rootNode.insert(13);
rootNode.insert(18);
rootNode.insert(25);
rootNode.insert(30);
console.log(rootNode.search(8));
console.log(rootNode.search(12));
console.log("IN ORDER:");
inOrder(rootNode);
console.log("OUT ORDER:");
outOrder(rootNode);
console.log("PRE ORDER:");
preOrder(rootNode);
console.log("POST ORDER:");
postOrder(rootNode);
console.log(myArray);
