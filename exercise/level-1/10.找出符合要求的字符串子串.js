const str1 = "bbach";
const str2 = "bbaaccedfg";

const s = new Set();

for (let index = 0; index < str1.length; index++) {
  const element = str1[index];
  if (str2.indexOf(element) > -1) {
    s.add(element);
  }
}
const arr = Array.from(s);
arr.sort();
console.log(s);
console.log(arr.join(""));
