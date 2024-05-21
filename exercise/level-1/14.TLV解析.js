const t = "31";
let str =
  "32 01 00 AE 90 02 00 01 02 30 03 00 AB 32 31 31 02 00 32 33 33 01 00 CC";
let i = 0;
let arr = str.split(" ");
let value = [];

while (i < arr.length) {
  const tag = arr[i];
  const length = parseInt(`${arr[i + 2]}${arr[i + 1]}`, 16);
  if (tag === t) {
    for (let index = i + 3; index < i + 3 + length; index++) {
      value.push(arr[index]);
    }
    break;
  } else {
    i = i + 3 + length;
  }
}
console.log(value.join(" "));
