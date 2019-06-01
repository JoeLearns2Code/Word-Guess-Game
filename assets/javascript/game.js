//Array of words to guess

var characters = ['luke skywalker', 'han solo', 'princess leia', 'lando', 'yoda', 'palpatine', 'darth vader', 'darth maul', 'count dooku', 'kylo ren', 'rey', 'chewbacca', 'jar jar', 'qui gon jinn', 'obiwan kenobi'];

//random word selected
var chosenWord = characters[Math.floor(Math.random() * characters.length)];
console.log(chosenWord);



//TODO: splitting currently chosen word into its component letters in an array

var splitWord = []
   for (var i =0; i < chosenWord.length; i++) {
   chosenWord[i].split(" ");
}
//Should work like this:

//(.split)  apple.split(" ")

// ['a', 'p', 'p' 'l', 'e'] .sort ()



//array for letters of current selected word

var currentWord = []
for (var i = 0; i < chosenWord.length; i++) {
   currentWord[i] = "_";
   
}

//to display on the play screen
var currentWordDisplay = (currentWord.join(' '));


//variable for correct guesses reducing remaining unknown letters

var remainingLetters = currentWord.length;

//array for letters already guessed

var alreadyGuess = []





//wins accrued

var wins = 0

//remaining guesses

var guessCount = 15





//starting state of game

function openGame() {
   alert('welcome')
   document.getElementById("wins").textContent = wins;
   document.getElementById("currentWord").textContent = currentWordDisplay;
   document.getElementById("guessesLeft").textContent = guessCount;
   document.getElementById("alreadyGuessed").textContent = alreadyGuess;

}

window.onload = openGame;

//press a key to start  - then the game begins


// while (remainingLetters > 0) {   //This is determines whether a round is won

//press a letter key to try to guess the name

document.onkeyup = function (event) {

   var guessLetter = event.key.toLowerCase();

   //if the key pressed equals a word in the chosen letter

   //TODO: if player selects a viable letter(65-90) in the word: replace underscore with letter, add letter to player's Already Guessed array table, subtract from Guesses Remaining.  
   if (event.keyCode >= 65 && event.keyCode <= 90 && chosenWord.includes(guessLetter)) {
      console.log(guessLetter);
      //replace letter in the currently selected word 
      for (var j = 0; j < remainingLetters; j++); {
      if(guessLetter == chosenWord[j])
      {  currentWord[j] = guessLetter  }
      }
      guessCount--;

      //if player does not select a letter in the word: add letter to player's Already Guess array table, subtract from Guesses Remaining.

   } else if (event.keyCode >= 65 && event.keyCode <= 90) {
      console.log("nope");
      guessCount--;
      alreadyGuess.push(guessLetter + " ");
      
      } 

      

   

   //TODO: add function to remove duplicates from alreadyGuess array

   
      
   

   //TODO: if player completely matches the word(i.e. 0 remaining letters) add 1 to Wins, reset Guesses Remaining and Letters Already Guessed, display character image, select a new word.

   if (remainingLetters === 0) {
      alert("Congratulations You Won!")
      wins++
   }





   document.getElementById("wins").textContent = wins;
   document.getElementById("currentWord").textContent = currentWordDisplay;
   document.getElementById("guessesLeft").textContent = guessCount;
   document.getElementById("alreadyGuessed").textContent = alreadyGuess;


}



//TODO: //if player runs out of Guesses Remaining: game over

//play again - word function, logic function
   //OR
//quit game


















