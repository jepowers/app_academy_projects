console.log("---------PHASE TWO---------");
console.log(" ");

Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

[1,2,3,4].myEach(function(el) {
  console.log(el + 1);
});

console.log("----------------");

Array.prototype.myMap = function(callback) {
  const mappedArray = [];
  this.myEach(function(el) {
    console.log(el);
    mappedArray.push(callback(el));
  });
  return mappedArray;
};



const testo = [1,2,3,4].myMap(function(el) {
  return el * 2;
});

console.log(testo);

console.log("----------------");


Array.prototype.myReduce = function(callback, initialValue = null) {
    let acc;
    let array;

  if (initialValue === null) {
    acc = this[0];
    array = this.slice(1);
  } else {
    acc = initialValue;
    array = this;
  }

  array.myEach(function(el) {
    acc = callback(acc, el);
  });

  return acc;
};


let testReduct = [1, 2, 3];
console.log(testReduct.myReduce(function(acc, el) {
  return acc + el;
}, 25));
