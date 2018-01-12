var knowYourScope = () => {
  for (let i = 0; i === 1; i++) {
    test = 1;
    var test;
    console.log(test);
  }
};

knowYourScope();
console.log(test);

console.log(typeof knowYourScope);
