// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

const maxDepth = (root) => {
   let maxDepth = 0;

   let BFS = (node, level) => {

        // dont forget exit condition
        if(node === null) return

        if(level > maxDepth) maxDepth = level;
        BFS(node.left, level +1)
        BFS(node.right, level +1)
   }

   BFS(root, 1)
   return maxDepth

    
}