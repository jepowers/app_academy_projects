const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    reader.question("Gimme a number: ", function(num) {
      //parse the input
      const parseNum = parseInt(num);

      //add to sum & show it to user
      sum += parseNum;
      console.log(`Current sum: ${sum}`);

      //recursively call addNumbers with new nums
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    //call completionCallback when there are no more numsLeft
    completionCallback(sum);
  }
}

// addNumbers(0, 3, sum =>
//   console.log(`Total Sum: ${sum}`));


addNumbers(0, 3, function (sum) {
  console.log("Final Sum: " + sum);
  reader.close();
});
