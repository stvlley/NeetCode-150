// Given the root of a binary tree, invert the tree, and return its root.

// 1. if root is null return null
// 2. create temp variable and assign it to root.left
// 3. change root.left to equal root.right
// 4. change root.right to equal temp
// 5. inverTree(root.left)
// 6. inverTree(root.right)


const invertTree = (root) => {

    if(root === null) return null;
    let temp = root.left;
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
}

