const arr = ["01:41:8.9", "1:1:09.211", "23:59:59.999"];

const reg = /(\d+):(\d+):(\d+)\.(\d+)/;

arr.sort((a, b) => {
  const log1 = transferTime(a);
  const log2 = transferTime(b);
  return log1 - log2;
});

function transferTime(time) {
  const [_, H, M, S, N] = reg.exec(time);
  const result =
    Number(H) * 60 * 60 * 1000 +
    Number(M) * 60 * 1000 +
    Number(S) * 1000 +
    Number(N);
  console.log(result);
  return result;
}
console.log(arr);
