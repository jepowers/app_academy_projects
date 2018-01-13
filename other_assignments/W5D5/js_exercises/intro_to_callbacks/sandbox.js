const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function life() {


    reader.question(">>What is the meaning of life? ", function(answer) {
      console.log(`${answer}? Sounds good.`);

    });
  }



life();
reader.close();
