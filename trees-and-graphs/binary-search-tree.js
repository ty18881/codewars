/**
 * A binary tree is a binary search tree when the nodes are ordered in a specific way.
 * If a node is in the ancestor's left subtree, it must be less than the ancestor.
 * If a node is in the ancestor's right subtree, it must be greater than the ancestor.
 * time complexity: O(n)
 * space complexity: O(n)
 * COMBINING greedy and divide-and-conquer approaches to solve this item.
 */

function isBinarySearchTree(treeRoot){

    // begin at the root, and set arbitrary upper and lower bounds 

    const nodeAndBoundsStack = [];

    nodeAndBoundsStack.push({
        node: treeRoot,
        lowerBound: Number.NEGATIVE_INFINITY,
        upperBound: Number.POSITIVE_INFINITY
    });


        // DFS to examine contents of the tree

        while (nodeAndBoundsStack.length) {

            const {node, lowerBound, upperBound} = nodeAndBoundsStack.pop();

            if (node.value <= lowerBound || node.value >= upperBound){
                // we detected a node out of order
                return false;
            }

            if (node.left){
                nodeAndBoundsStack.push({
                    node: node.left,
                    lowerBound,
                    upperBound: node.value
                });

            }

            if (node.right) {
                nodeAndBoundsStack.push({
                    node: node.right,
                    lowerBound: node.value,
                    upperBound
                });
            }
        }

        // if we reach this point, we've checked all the nodes and all were in order
        return true;
}