// This top portion of code is just to define my variables that will be global and start creating the spots where players will guess letters.

// I created a variable that is an array of all the skateboarding brands I chose to use
var brands = [
  "welcome",
  "independent",
  "vans",
  "primitive",
  "thrasher",
  "girl",
  "transworld",
  "uprise"
];

// this word variable is used to determine which of the  words in the brand array is chosen for that specific instance of the game.
var word = brands[Math.floor(Math.random() * brands.length)];
// console.log(word);

// This next portion is an array where I will replace all the individual letters from whatever word is selected previously with underscores _
var answerArray = [];

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;

// This next portion is the actual loop where the game is created

while (remainingLetters > 0) {
  // this shows player's their progress
  alert(answerArray.join(" "));
  // for this section i need to not make it a prompt and instead an "onkeyup" and something like document.getElementbyID("displayedwords").text to show this content on the page instead of a pop up.
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
  // if you press cancel it stops the game
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    // this portion is checking to make sure you only guess 1 letter (not more than one or a space)
    alert("Please enter a single letter.");
  } else {
    // this is the portion that checks if the letter guessed is in the word
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
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
