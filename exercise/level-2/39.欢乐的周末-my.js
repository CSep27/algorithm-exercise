/* 
根据deepseek的答案，总结思路实现

1. 找到2
2. 以2为起点，尝试往四个方向走，如果遇到1表示走不通，其余的都能走通，如果遇到3，则记录下3的位置（记录两个起点能到达的3的位置）
3. 最终比较两个位置中是否有重叠的，有则结果+1

难点在于第二点

以2为起点，放入队列中
尝试四个方向，先判断是不是边缘位置，非边缘位置继续
- 判断是未访问过的节点
  - 如果是1，不可到达，不处理
  - 可到达（0，2，3），放到队列中，等待当前节点处理结束后，再继续处理队列
    + 如果是3，记录下来（需要有数据结构）
  * 将当前节点记录为已经访问过的点

重复上述步骤，循环条件为队列里是否有值
队列就是每次当前节点，周围节点中，满足未访问过，并且可达的节点，会在处理过程中被放入队列中

这样会以起点为中心，向四周扩散搜索

如何获取一个节点四个方向的节点，把当前节点当做[0,0]，得到四个方向节点的相对坐标，再用实际坐标值计算


数据结构
1. 存储两个起点 persons [[], []]
2. 队列：[`${x},${y}`, `${x},${y}`, ...]
3. 记录两个起点对应可达的饭店的位置：new Set(`${x},${y}`)
4. 记录已访问过的节点：new Set(`${x},${y}`)
*/

function fn(mapArr) {
  const persons = [];
  const n = mapArr.length;
  const m = mapArr[0].length;
  // 找到起点的位置
  for (let i = 0; i < n; i++) {
    const item = mapArr[i];
    for (let j = 0; j < m; j++) {
      const value = item[j];
      // 找到2的位置
      if (value === 2) {
        persons.push([i, j]);
      }
    }
  }
  const findRestaurant = (person) => {
    // 用来记录所有可以访问的节点
    const queue = [];
    const visited = new Set();
    const targets = new Set();

    queue.push(person);

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    // 起点先放到已访问列表中
    visited.add(`${person[0]},${person[1]}`);
    // 记录执行次数用
    let num = 0;
    while (queue.length > 0) {
      // 队列，先进先出，shift从头部
      const current = queue.shift();
      for (let i = 0; i < directions.length; i++) {
        const d = directions[i];
        // 得到四周点的坐标
        const x = current[0] + d[0];
        const y = current[1] + d[1];
        // 对应坐标位置上的值
        const value = mapArr[x][y];
        // 坐标不能超出 mapArr 范围
        if (x >= 0 && x < n && y >= 0 && y < m && value !== 1) {
          const str = `${x},${y}`;
          if (!visited.has(str)) {
            num++;
            // 可访问，那么该位置可以作为下一个起点
            queue.push([x, y]);
            if (value === 3) {
              targets.add(str);
            }
            visited.add(str);
          }
        }
      }
      // 四个方向都处理完后，循环
    }
    console.log("num", num);
    return targets;
  };

  const reachable1 = findRestaurant(persons[0], mapArr);
  console.log(reachable1);
  const reachable2 = findRestaurant(persons[1], mapArr);
  console.log(reachable2);
  let count = 0;
  for (const element of reachable1) {
    console.log(element);
    if (reachable2.has(element)) {
      count++;
    }
  }
  return count;
}

console.log(
  fn([
    [2, 1, 0, 3],
    [0, 1, 2, 1],
    [0, 3, 0, 0],
    [0, 0, 0, 0],
  ])
);
console.log(
  fn([
    [2, 1, 2, 3],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ])
);
