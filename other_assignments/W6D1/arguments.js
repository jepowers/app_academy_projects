function sum() {
  const nums = Array.from(arguments);

  let numSum = 0;
  nums.forEach(el => {
    numSum += el;
  });

  return numSum;
}

function sumTwo(...args) {
  let numSum = 0;

  args.forEach(el => {
    numSum += el;
  });

  return numSum;
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Function.prototype.myBind = function (context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context,bindArgs.concat(callArgs));
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

function curriedSum(numArgs) {
  let numbers = [];

  function _curriedSum(number) {
    if (number !== undefined) {
      numbers.push(number);
    }

    if(numbers.length === numArgs) {
      let numSum = 0;

      numbers.forEach(function (el) {
        numSum += el;
      });

      return numSum;
    } else {
      return (otherNum => _curriedSum(otherNum));
    }
  }

  return _curriedSum();
}

Function.prototype.curry = function(length, ...someArgs) {
  if (someArgs.length === length) {
    return this.apply(null, someArgs);
  } else {
    return (...otherArgs) => {
      return this.curry.apply(
        this, [length].concat(someArgs).concat(otherArgs)
      );
    };
  }
};

let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`

// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// console.log(f1 = f1(6));

// console.log(markov.says.myBind(breakfast, "meow", "Kush")());
// console.log(markov.says.myBind(breakfast)("meow", "a tree"));
// console.log(markov.says.myBind(breakfast, "meow")("Markov"));
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// console.log(sumTwo(1, 2, 3, 4) === 10);
// console.log(sumTwo(1, 2, 3, 4, 5) === 15);
