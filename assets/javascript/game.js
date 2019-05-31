//Array of words to guess

var characters = ['luke skywalker', 'han solo', 'princess leia', 'lando', 'yoda', 'palpatine', 'darth vader', 'darth maul', 'count dooku', 'kylo ren', 'rey', 'chewbacca', 'jar jar', 'qui gon jinn', 'obiwan kenobi' ];

//random word selected
var chosenWord = characters[Math.floor(Math.random() * characters.length)];
console.log(chosenWord);

//array for letters of current selected word

var currentWord = []
for (var i = 0; i < chosenWord.length; i++) {
    currentWord[i] = "_";
    currentWord.split;
}

//variable for correct guesses reducing remaining unknown letters

var remainingLetters = currentWord.length;

//array for letters already guessed

var alreadyGuess = []




//wins accrued

var wins = 0

//remaining guesses

var guessCount = 15





//starting state of game

function openGame () {
   alert('welcome')
   document.getElementById("wins").textContent = wins;
   document.getElementById("currentWord").textContent = currentWord;
   document.getElementById("guessesLeft").textContent = guessCount;
   document.getElementById("alreadyGuessed").textContent = alreadyGuess;

}

window.onload = openGame;

//press a key to start  - then the game begins


// while (remainingLetters > 0) {   //This is determines whether a round is won

//press a letter key to try to guess the name

document.onkeyup = function (event) {

   var guessLetter = event.key.toLowerCase();


   if (chosenWord.includes(guessLetter)) {
      console.log("okay");
      guessCount--;
      remainingLetters--; 
      currentWord.push(guessLetter);
      currentWord.sort();
      
      
   }
   else {
      console.log("nope");
      guessCount--;
      alreadyGuess.push(guessLetter + " ");

   }


   if (remainingLetters === 0){
      alert("Congratulations You Won!")
      wins++
   }
   
   
   
   

   document.getElementById("wins").textContent = wins;
   document.getElementById("currentWord").textContent = currentWord;
   document.getElementById("guessesLeft").textContent = guessCount;
   document.getElementById("alreadyGuessed").textContent = alreadyGuess;


   }





//(.split)  apple.split(" ")

// ['a', 'p', 'p' 'l', 'e'] .sort ()

// function to remove duplicates ()


//if player selects a letter in the word: replace underscore with letter, add letter to player's Already Guessed array table, subtract from Guesses Remaining.  


//if player does not select a letter in the word: add letter to player's Already Guess array table, subtract from Guesses Remaining.



//if player completely matches the word: add 1 to Wins, reset Guesses Remaining and Letters Already Guessed, display character image, select a new word.
//userGuess === currentWord

// } - closing bracket of WHILE condition

//if player runs out of Guesses Remaining: game over

//play again - word function, logic function
   //OR
//quit game