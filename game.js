var alphabet = ["a", 
				"b", 
				"c", 
				"d", 
				"e", 
				"f", 
				"g", 
				"h", 
				"i", 
				"j", 
				"k", 
				"l", 
				"m", 
				"n", 
				"o", 
				"p", 
				"q", 
				"r", 
				"s", 
				"t", 
				"u", 
				"v", 
				"x", 
				"y", 
				"z"];
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var psychicLetter;
var guessedLetters = 0


var newLetter = function() {
    psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(psychicLetter)
};

var soFar = function() {
    document.getElementById("guesses").textContent = "Guesses so far: " + guessesSoFar.join(",");
};

var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

var clearGuesses = function() {
        guessesSoFar.length = 0;
};


var newGame = function() {
	guessedLetters = 0;
    left = 9;
    newLetter();
    guessesLeft();
    soFar();
    clearGuesses();
};



var guessCheck = function () {
    for (var i = 0; i > guessesSoFar.length; i++) {
        if (this.userGuess = guessesSoFar[i]) {
            alert("Please choose a new letter!")
        }
        return
    }
}


document.onkeyup = function(event) {
    var userGuess = event.key;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    // for (var i = 0; i < guessesSoFar.length; i++) {
    // if (userGuess == guessesSoFar[i]) {
    //     alert("Please choose a new letter");
    // }
    // else {
        guessCheck(userGuess)
    if (event.keyCode >= 65 && event.keyCode <= 90){
    
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();

        if (left > 0) {
        if (userGuess == psychicLetter) {
            wins++;
            alert("You are a Psychic! Guess another letter to play again!")
        	document.getElementById("wins").innerHTML = "Wins:" + wins;
            newGame();
        }
    } else if (left == 0) {
        losses++;
        alert("You lose! Guess another letter to play again!")
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        newGame();
    }
    }
    

};