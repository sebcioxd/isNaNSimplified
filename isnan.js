// Take user input,
// Convert user input to a number,
// Check if number is indeed numbe,
// if its not a number, tell user and run whole program again,
// if it is a number, run loop with as many iterations as input says.

const prompt = require('prompt-sync')();

const takeInput = () => {
  const userInput = prompt('Say some number: ');
  const userInputNumber = parseFloat(userInput);
  if(isNaN(userInputNumber)) {
    console.log('This is not a number!');
    takeInput();
  }
  else {
    let i = 0;
    while(i < userInputNumber) {
      console.log("Iteration! ");
      i++;
    }
  }
}

takeInput();