// so #1 this was really hard. My tutor and I spent 2 hours working on this and she even made herself available to me after our session just through slack chat and I wasn't able to finish building the game.
// I would like to think I'm more than half way there but I honestly have been working on this since Thursday and don't have the brain capacity to do any more tonight before it is due.
// I have A LOT commented out at the bottom where I had built stuff, decided not to use it, and then stored it down there for later just in case. Pretty much anything past line 108 that's commented out you can ignore.

// The things I was not able to do are: make the win counter go up, have a starting event function, display letters the user has guessed, have the game reset after each instance, make the page look at all presentable.

// This top portion of code is just to define my variables that will be global and start creating the spots where players will guess letters.

// I created a variable that is an array of all the skateboarding brands I chose to use
var brands = ["welcome", "vans", "primitive", "thrasher", "girl", "uprise"];

// this word variable is used to determine which of the  words in the brand array is chosen for that specific instance of the game.
var word;

// number of wins
var wins = 0;

// letter that's pressed
var currentGuess;

// letters the user has guessed so far
var guessedLetters = [];

// if they guess a correct letter, it needs to not subtract from guesses

// starting number of guesses = 10
var remainingGuesses = 10;

// while () {

// }

// funciton i built to select the word from my brands array
function selectWord() {
  word = brands[Math.floor(Math.random() * brands.length)];
}

selectWord();
console.log(word);

var letters = word.split("");
console.log(letters);

// This next portion is an array where I will replace all the individual letters from whatever word is selected previously with underscores _
var answerArray = [];

function makeUnderscores() {
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
  }
}
makeUnderscores();

// this was the funciton i built to display my scores. Doesn't work perfect yet.
function display() {
  document.getElementById("guessesRemaining").innerHTML =
    "Guesses Remaining: " + remainingGuesses;
  document.getElementById("wins").innerHTML = "You've won " + wins;
  document.getElementById("blanks").innerHTML = answerArray.join("");
}

display();

document.onkeyup = function(event) {
  currentGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("User guess: " + currentGuess);

  var isCorrect = false;

  // function won() {
  //   alert("you did it doofus");
  // }

  for (var i = 0; i < letters.length; i++) {
    if (letters[i] == currentGuess) {
      // replace underscore in the correct position in the array
      isCorrect = true;
    }

    if ((isCorrect = true)) {
      for (var j = 0; j < answerArray.length; j++) {
        if (letters[j] === currentGuess) {
          answerArray[j] = currentGuess;
        }
      }
    }
  }
  // just subtracts with each keypress. I was unable to make the if/else statement that if the letter didn't match any of the letters in the word that the guesses counter would not count down.
  if (remainingGuesses > 0) {
    remainingGuesses--;
    document.getElementById("guessesRemaining").innerHTML =
      "Guesses Remaining: " + remainingGuesses;
  } else if (remainingGuesses == 0) {
    alert("you looooose");
  }

  document.getElementById("blanks").innerHTML = answerArray.join("");

  // console.log(remainingGuesses);
  document.getElementById("blanks").innerHTML = answerArray;

  // this section sort of worked. I was able to make all the users inputs a string and check that against my brands array and see if this string matched anything in there. I coudld display a win pop up but was unable to make my counter go up for wins.
  var remainingLetters = word.length;
  if (word == answerArray.join("")) {
    wins++;
    display;
    alert("you did it");
  }
};
// getElementById example
// document.getElementById("place").innerHTML = ("regular farts")

// This next portion is the actual loop where the game is created

// while (remainingLetters > 0) {
//   // this shows player's their progress
//   alert(answerArray.join(" "));

//   // for this section i need to not make it a prompt and instead an "onkeyup" and something like document.getElementbyID("displayedwords").text to show this content on the page instead of a pop up.
//   var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//   // if you press cancel it stops the game
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     // this portion is checking to make sure you only guess 1 letter (not more than one or a space)
//     alert("Please enter a single letter.");
//   } else {
//     // this is the portion that checks if the letter guessed is in the word
//     for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//       }
//     }
//   }

// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);
// var name = prompt("what's your real name?");

// console.log("hello " + name);

// var likesCats = confirm("do you like cats?");

// if (likesCats) {
//   console.log("you're a cool cat");
// } else {
//   console.log("Yeah, that's fine. You're still cool I guess.");
// }

// window.onload = function() {
// };
// var andswerList = [
//   "welcome",
//   "independent",
//   "vans",
//   "primitive",
//   "thrasher",
//   "girl",
//   "transworld",
//   "uprise"
// ];
//   // var GuessesLeft: 10,
//   // word: "",
//   //   // var wrongGuesses; //letters guessed
//   //   // var correctGuesses; //correctGuesses
//   //   // var score; //times game won
//   //   // var counter; //lives left
//   //   //random game words we are trying to guess
//   //   var wordSelect = "";
//   //   //   teamsList
//   //   // [Math.floor(Math.random() * teamsList.length)];
//   //   var letters = [];
//   //   //populate the empty array by splitting up the letters in the word
//   //   var letters = wordSelect.split("");
//   //   console.log(letters);
