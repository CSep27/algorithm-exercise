function getResult(str) {
  const reg = /([+|-]?[0-9]+\s*[0-9]+\.?[0-9]+\s*)/g;

  let result = str.match(reg);
  return result;
}
console.log(getResult("1234567890abcd9.+12345.678.9ed"));
