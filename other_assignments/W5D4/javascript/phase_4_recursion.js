console.log("---------PHASE FOUR---------");
console.log(" ");

let range = function(start, end) {
  if (start === end) {
    return [end];
  } else {
    let result = range(start, (end - 1));
    result.push(end);
    return result;
  }
};

console.log(range(2, 7));


let sumRec = function(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let result = sumRec(arr.slice(1)) + arr[0];
    return result;
  }
};

console.log(sumRec([1,2,3,4,5]));


let exponent = function(base, exp) {

};
