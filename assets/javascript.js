//Available choices
var letterChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//score
var wins = 0;
var losses = 0;
var guesses = 12;
var guessesLeft = 12;
var guessedLetters = [];
var letterToGuess = null;

//computer randomly chooses a letter

var computerGuess = letterChoices [Math.floor(Math.random()*letterChoices.length)];
console.log(computerGuess)
//guesses left function

var updateGuessesLeft = function() {
	document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

//letter to guess function

var updateletterToGuess = function(){
	this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

var updateGuessesSoFar = function(){
	document.querySelector('#let').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
};

//reset

var reset = function(){
	totalGuesses = 12;
	guessesLeft = 12;
	guessedLetters = [];

	updateletterToGuess();
	updateGuessesSoFar();
	updateGuessesLeft();

};

updateGuessesLeft();
updateletterToGuess();

//user input key

document.onkeyup = function(event) {
	guessesLeft--;
	var userGuess = event.key; 
	
	guessedLetters.push(userGuess);
	updateGuessesLeft();
	updateGuessesSoFar();

		if (guessesLeft > 0){
			if (userGuess === letterToGuess){
				wins++;
				document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
				alert("How did you know!?!");
				reset();
			}
		} else if (guessesLeft == 0){
			losses++;
			document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
			alert("Sorry, you're not a psychic!");

			reset();
		}
}





//var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		
//var wins = 0;
//var losses = 0;
//var guessesLeft = 12;
//var guessesSoFar = [];
//var userGuess = null;
//console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar);

        // Have computer pick a letter and store it in letterToBeGuessed		
//        var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
//		console.log("Computer picked the letter: " + letterToBeGuessed);

//		document.onkeyup = function(event) {
				
				// When user presses a key, it records it and saves to userGuess
//				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

				// Add the user's guess to guessesSoFar only if it's not already recorded
//				if (guessesSoFar.indexOf(userGuess) < 0) {
//					guessesSoFar[guessesSoFar.length]=userGuess;
//					guessesLeft--;
//				}


				// if letterToBeGuessed  is same as userGuess then wins increase by one
//				if (letterToBeGuessed == userGuess) {
//					wins++;
//					console.log("You won!");
//				}

				// if guessesLeft gets to 0 then losses increase by one
//				if (guessesLeft == 0) {
//					losses++;
//					console.log("You lost!");
//				}


//				console.log(guessesSoFar);

				// Displaying progress to HTML
  //              var html = "<h1 class="">The Psychic Game</h1>" 
    //             "<p><h3>Guess the letter</h3></p>"
      //           "<p><h3>Better than a prize, win the knowledge of"
        //         "knowing that you know! - And know that we know"
          //       "you know.</h3></p>"
            //     "<p>Wins: " + wins + "</p>" 
              //   "<p>Losses: " + losses + "</p>" 
                // "<p>Guesses Left: " + guessesLeft + "</p>" 
                 //"<p>Your guesses so far: " + guessesSoFar 
                // "</p>";
				// place html into the game ID
			//	document.querySelector("#game").innerHTML = html;
		//	}

	