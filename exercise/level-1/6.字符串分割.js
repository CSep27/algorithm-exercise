const k = 3;
const str = "12abc-abCABc-4aB@";

const arr = str.split("-");

const isLower = (s) => {
  return s >= "a" && s <= "z";
};
const isUpper = (s) => {
  return s >= "A" && s <= "Z";
};

const transfer = (s) => {
  let i = 0;
  let lowerNum = 0;
  let upperNum = 0;
  while (i < s.length) {
    if (isLower(s[i])) {
      lowerNum++;
    } else if (isUpper(s[i])) {
      upperNum++;
    }
    i++;
  }
  if (lowerNum > upperNum) {
    return s.toLocaleLowerCase();
  } else if (lowerNum < upperNum) {
    return s.toLocaleUpperCase();
  } else {
    return s;
  }
};
let firstStr = transfer(arr[0]);

arr.shift();

let leftStr = arr.join("");

let newSub = [];
let i = 0;
while (i < leftStr.length) {
  newSub.push(transfer(leftStr.substring(i, i + k)));
  i += k;
}
newSub.unshift(firstStr);
console.log(newSub.join("-"));

/* for (let index = 0; index < arr.length; index++) {
  let element = arr[index];
  if (index === 0) {
    arr[index] = transfer(element);
  } else {
    let newSub = [];
    let i = 0;
    while (i < element.length) {
      newSub.push(transfer(element.substring(i, i + k)));
      i += k;
    }
    arr[index] = newSub.join("-");
  }
} */
// console.log(arr.join("-"));
