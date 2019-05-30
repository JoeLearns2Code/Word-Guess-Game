//Array of words to guess

var characters = ['luke skywalker', 'han solo', 'princess leia', 'lando', 'yoda', 'palpatine', 'darth vader', 'darth maul', 'count dooku', 'kylo ren', 'rey', 'chewbacca', 'jar jar', 'qui gon jinn', 'obiwan kenobi' ];

//random word selected
var chosenWord = characters[Math.floor(Math.random() * characters.length)];
console.log(chosenWord);

//array for lettrs of current selected word

var currentWord = []
for (var i = 0; i < chosenWord.length; i++) {
    currentWord[i] = "_";
}

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
//    document.getElementById("alreadyGuessed").textContent = ;

}

window.onload = openGame;

//press a key to start



//display underscores for selected word



//if player selects a letter in the word: replace underscore with letter, add letter to player's Already Guessed array table, subtract from Guesses Remaining.  


//if player does not select a letter in the word: add letter to player's Already Guess array table, subtract from Guesses Remaining.



//if player completely matches the word: add 1 to Wins, reset Guesses Remaining and Letters Already Guessed, display character image, select a new word.


//if player runs out of Guesses Remaining: game over