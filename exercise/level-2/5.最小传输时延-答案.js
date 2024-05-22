function getMinTransDelay(n, times, src, tar) {
  // graph记录所有走法的对象
  const graph = {};
  times.forEach((time) => {
    const [u, v, w] = time;
    graph[u] ? graph[u].push([v, w]) : (graph[u] = [[v, w]]);
  });
  // 存储距离的数组长度为n+1，是因为是序号从1开始，0号位置的值没用到
  const dist = new Array(n + 1).fill(Infinity);
  dist[src] = 0;

  const needCheck = []; // 存放还没有处理的节点

  while (true) {
    let flag = false;
    graph[src]?.forEach((next) => {
      // 新值小于当前dist对应的值，就更新
      const [v, w] = next;
      const newDist = dist[src] + w;
      if (newDist > dist[v]) return;
      dist[v] = newDist;

      // src节点能走到v节点，那么v需要加入needCheck
      if (needCheck.indexOf(v) === -1) {
        needCheck.push(v);
        flag = true;
      }
    });

    if (!needCheck.length) break;

    // 将needCheck按照在dist中的值排序，获取dist中距离最小的那个
    if (flag) needCheck.sort((a, b) => dist[a] - dist[b]);

    src = needCheck.shift();
  }
  return dist[tar] === Infinity ? -1 : dist[tar];
}
console.log(
  getMinTransDelay(
    3,
    [
      [1, 2, 11],
      [2, 3, 13],
      [1, 3, 50],
    ],
    1,
    3
  )
);
