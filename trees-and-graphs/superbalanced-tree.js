/**
 * How do I test this?
 * What data structure represents the treeRoot?
 */

class BinaryTreeNode {

    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value){
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value){
        this.right = new BinaryTreeNode(value);
        return this.right;
    }

}


function isBalanced(treeRoot){

    // tree without any nodes is considered superbalanced

    if (!treeRoot) {
        return true;
    }

    const depths = [];

    // this array stores node and node-depth pairs
    const nodes = [];

    nodes.push([treeRoot, 0]);

    while (nodes.length){

        const nodePair = nodes.pop();

        const node = nodePair[0];

        const depth = nodePair[1];

        if (!node.left && !node.right){

            // if current node doesn't have a left or right, it is a leaf node

            if (depths.indexOf(depth) < 0) {
                depths.push(depth);

                /**
                 * Two different ways we may have an unbalanced tree
                 * 1.  More than two different leaf depths
                 * 2.  Two leaf depths that are more than 1 apart.
                 */

                if (
                      (depths.length > 2)
                      || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
                ) {
                    return false;
                }
            }
        } else {
            // current node is not a leaf

            if (node.left) {
                nodes.push([node.left, depth+1]);
            }

            if (node.right){
                nodes.push([node.right, depth+1])
            }
        }
    }

    return true;

}

function buildTree(numNodes) {

    for (let i = 0; i < numNodes; i++) {
        // create the root node

        // create the child nodes from left to right.
    }
}