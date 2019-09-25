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
// var guesses = 9;
var guessesSoFar = [];
var psychicLetter;
var guessedLetters = 0;


var newLetter = function() {
    psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(psychicLetter)
};

var soFar = function() {
    document.getElementById("guesses").textContent = "Guesses so far: " + guessesSoFar.join(",");
};

var guessesLeft = function() {

    document.getElementById("left").innerHTML = "Guesses left: " + left;
};

var clearGuesses = function() {
        guessesSoFar = [];
};


var newGame = function() {
	guessesSoFar = [];
    left = 10;
    newLetter();
    clearGuesses();
};

var guessCheck = function () {
    for (var i = 0; i > guessesSoFar.length; i++) {
        if (userGuess = guessesSoFar[i]) {
            console.log(true)
        }
    }
}


document.onkeyup = function(event) {
    var userGuess = event.key;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (event.keyCode >= 65 && event.keyCode <= 90){
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();

        if (left > 0) {
            if (userGuess == psychicLetter) {
                wins++;
                newGame();
                // alert("You are a Psychic! Guess another letter to play again!")
        	    document.getElementById("wins").innerHTML = "Wins:" + wins;
            
        }
        }   else if (left == 0) {
        losses++;
        newGame();
        // alert("You lose! Guess another letter to play again!")
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        
    }
    }

    
};