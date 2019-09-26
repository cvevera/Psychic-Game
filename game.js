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
var guessesSoFar = [];
var psychicLetter;


var soFar = function() {
    document.getElementById("guesses").textContent = "Guesses so far: " + guessesSoFar.join(",");
};

var guessesLeft = function() {

    document.getElementById("left").innerHTML = "Guesses left: " + left;
};

var newGame = function() {
	guessesSoFar.length = 0;
    left = 9;
    psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(psychicLetter)

};

document.onkeyup = function(event) {
    var userGuess = event.key;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (event.keyCode >= 65 && event.keyCode <= 90){
        if (userGuess == guessesSoFar[0] || userGuess == guessesSoFar[1] || userGuess == guessesSoFar[2]|| userGuess == guessesSoFar[3]|| userGuess == guessesSoFar[4]|| userGuess == guessesSoFar[5]|| userGuess == guessesSoFar[6]|| userGuess == guessesSoFar[7]|| userGuess == guessesSoFar[8]) {
            return
        }
        else {
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();

        if (left > 0) {
            if (userGuess == psychicLetter) {
                wins++;      
                newGame();
        	    document.getElementById("wins").innerHTML = "Wins:" + wins;
            
        }
        }   else if (left == 0) {
        losses++;
        newGame();
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        
    }
    }

    }
    
};