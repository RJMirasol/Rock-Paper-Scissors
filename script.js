// Problem - Creating a rock, paper scissors game using JS

//Plan
//1.Does the program have UI & what it lools like? Not at the moment (will be in the future)
//2.What inputs will your program have? Users input via prompt and computers using a function
//3.What's the desired output? Either user or computer wins and output it on the console
//Given your inputs, what are the steps necessaty to return the desired output? Follow the pseudocode

//Pseudocode
//Get the computers selection using a function
// --Use math.random to get random numbers and make sure to convert to whole number and save it as a variable
// --Use conditional if statement for rock = 1, paper = 2, scissors = 3
// --Return the computer selection

//Get the users selection using prompt --Save the users input into the a variable

//Create a function to Compare computer's and user's input using conditional if statement
//Output the results via console log

// Coding Part
//Get the computers selection using a function
function getComputerSelection(pick) {
  // --Use math.random to get random numbers and make sure to convert to whole number and save it as a variable
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // --Use conditional if statement for rock = 1, paper = 2, scissors = 3
  if (randomNumber === 1) {
    pick = 'rock';
  } else if (randomNumber === 2) {
    pick = 'paper';
  } else if (randomNumber === 3) {
    pick = 'scissors';
  }
  // --Return the computer selection
  return pick;
}

//Get the users selection using prompt --Save the users input into the a variable
const userSelection = prompt(
  'Whats your selection\nRock,Paper,Scissors: '
).toLowerCase();

//Create sa function to Compare computer's and user's input using a conditional
function playGame() {
  const compSelect = getComputerSelection();

  //Output the winner via console log
  if (
    (compSelect === 'paper' && userSelection === 'rock') ||
    (compSelect === 'scissors' && userSelection === 'paper') ||
    (compSelect === 'rock' && userSelection === 'scissors')
  ) {
    console.log('Computer wins!');
  } else if (
    (compSelect === 'scissors' && userSelection === 'rock') ||
    (compSelect === 'rock' && userSelection === 'paper') ||
    (compSelect === 'paper' && userSelection === 'scissors')
  ) {
    console.log('User Wins!');
  } else if (
    (compSelect === 'scissors' && userSelection === 'scissors') ||
    (compSelect === 'rock' && userSelection === 'rock') ||
    (compSelect === 'paper' && userSelection === 'paper')
  ) {
    console.log('It is a tie');
  }
}

playGame();
