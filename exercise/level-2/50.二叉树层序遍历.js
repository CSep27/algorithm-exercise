function getResult(backStr, midStr) {
  let result = [];
  let root = backStr.at(-1);
  result.push(root);

  function bfs(backStr, midStr, root) {
    let nextArrs = [];
    let rootIndex = midStr.indexOf(root);
    let leftMidSubTree = midStr.substring(0, rootIndex);
    let rightMidSubTree = midStr.substring(rootIndex + 1);

    let leftBackSubTree = backStr.substring(0, leftMidSubTree.length);
    let rightBackSubTree = backStr.substring(
      leftMidSubTree.length,
      leftMidSubTree.length + rightMidSubTree.length
    );
    if (leftBackSubTree) {
      let leftSubRoot = leftBackSubTree.at(-1);
      result.push(leftSubRoot);
      nextArrs.push([leftBackSubTree, leftMidSubTree, leftSubRoot]);
    }
    if (rightBackSubTree) {
      let rightSubRoot = rightBackSubTree.at(-1);
      result.push(rightSubRoot);
      nextArrs.push([rightBackSubTree, rightMidSubTree, rightSubRoot]);
    }

    return nextArrs;
  }

  let queue = [[backStr, midStr, root]];
  while (queue.length) {
    const nextArrs = bfs(...queue.shift());
    queue.push(...nextArrs);
  }

  return result;
}
console.log(getResult("CBEFDA", "CBAEDF"));
