/**
 * Use this to build a binary tree in memory.
 */

 class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }


  function buildMyTree(numNodes) {

    const myTree = [];

    const rootNode = new BinaryTreeNode(0);
    rootNode.insertLeft(1);
    rootNode.insertRight(2);
    myTree.push(rootNode);

    for (let i=3; i< numNodes+1; i++) {
        // const newNode = new BinaryTreeNode(i);

        if ( i % 2 === 0) {
            rootNode.left.insertLeft(i);
            rootNode.left.insertRight(i+1);
        } else {
            rootNode.right.insertLeft(i);
            rootNode.right.insertRight(i+1);
        }       

    }

    return myTree;
  }

  function printMyTree(treeRoot){

    // need to traverse each node and print left and right leaves where appropriate.
  }

  console.log(buildMyTree(4));