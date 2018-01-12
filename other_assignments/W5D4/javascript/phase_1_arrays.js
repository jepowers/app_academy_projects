Array.prototype.uniq = function() {
  const uniqArray = [];
  this.forEach (function(el) {
    if (!uniqArray.includes(el)) {
      uniqArray.push(el);
    }
  });
  return uniqArray;
};

const testArray = [1,1,2,3,4,4,4,5,6,7,88,99,88];
console.log(testArray.uniq());


Array.prototype.twoSum = function() {
  const pairs = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};


const testTwoSum = [1, 2, 3, 4, 5, 6, -2, -5];
console.log(testTwoSum.twoSum());


Array.prototype.transpose = function() {
  const transposedArray = [];
  for (var i = 0; i < this.length; i++) {
    const col = [];
    for (var j = 0; j < this.length; j++) {
      col.push(this[j][i]);
    }
    transposedArray.push(col);
    // console.log("COLS");
    // console.log(col);
  }
  return transposedArray;
};


const testTranspose = [[1,2,3],[4,5,6],[7,8,9]];
console.log(testTranspose.transpose());

// console.log("outside");
// console.log(col);
