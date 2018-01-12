console.log("---------PHASE THREE---------");
console.log(" ");

Array.prototype.bubbleSort = function() {
    let flag = false;
    let result = this.slice();
    let holding;

    while (!flag) {
      flag = true;
      for (var i = 0; i < result.length - 1; i++) {
        if (result[i] > result[i+1]) {
          holding = result[i+1];
          result[i+1] = result[i];
          result[i] = holding;
          flag = false;
        }
      }
    }
    return result;
};

console.log([1,6,7,3,5,9].bubbleSort());



String.prototype.subString = function() {
  let result = [];
  let substring = "";
  for (var i = 0; i < this.length; i++) {
    for (var j = i; j < this.length; j++) {
      substring = substring + this[j];
      result.push(substring);
    }
    substring = "";
  }
  return result;
};

let testSubString = "abcdefg";
console.log(testSubString.subString());
