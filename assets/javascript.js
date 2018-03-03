
var letterChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


var wins = 0;
var losses = 0;
var guesses = 12;
var guessesLeft = 12;
var guessedLetters = [];
var letterToGuess = null;



var computerGuess = letterChoices [Math.floor(Math.random()*letterChoices.length)];
console.log(computerGuess)


var updateGuessesLeft = function() {
	document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};



var updateletterToGuess = function(){
	this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

var updateGuessesSoFar = function(){
	document.querySelector('#let').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
};



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





