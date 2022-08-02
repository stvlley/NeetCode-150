// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.


 const countDiameter = root => {
    if (!root) return 0;
  
    return 1 + Math.max(countDiameter(root.left), countDiameter(root.right));
  };
  

  const diameterOfBinaryTree = root => {
    if (!root) return 0;
  
    const center = countDiameter(root.left) + countDiameter(root.right);
    const left = diameterOfBinaryTree(root.left);
    const right = diameterOfBinaryTree(root.right);
  
    return Math.max(center, left, right);
  }