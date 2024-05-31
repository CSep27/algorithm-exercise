function getResult(str) {
  let reg1 = /[^a-zA-Z0-9-]/g;
  let str1 = str.replaceAll(reg1, " ");
  let reg2 = /\-\-+/g;
  let str2 = str1.replaceAll(reg2, " ");
  let reg3 = /(?<=\w)\-(?=\w)/;
  let arr = str2.split(" ");
  let result = [];
  arr.forEach((element) => {
    if (element === "") {
      return;
    }
    if (element.includes("-") && !reg3.test(element)) {
      element = element.replaceAll("-", "");
    }
    result.push(element);
  });
  console.log(str1);
  console.log(str2);
  console.log(arr);
  console.log(result);
  return result.reverse().join(" ");
}
console.log(getResult("I am an 20-years out--standing @ * -stu- dent"));
