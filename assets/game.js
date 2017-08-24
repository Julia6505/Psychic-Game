var alphabetChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var userGuess;
var guessesLeft = 10;
var printedGuesses = [];


document.onkeyup = function(eventPress) {
    if (guessesLeft !== 0) {
        var userGuess = eventPress.key; 
        console.log("userGuess: ", userGuess);
        // var computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];
        var computerGuess = alphabetChoices[1];

        if (userGuess === computerGuess) {
            console.log("You win!");
            wins++; 
            console.log(wins);
            guessesLeft = 10;
            printedGuesses = [];

        } else {
            guessesLeft--; 
            console.log("guessesLeft:", guessesLeft);
            console.log("Try again!");
            printedGuesses.push(userGuess);
            console.log(printedGuesses);

        }
    } else {
        guessesLeft = 10;
        printedGuesses = [];
        losses++;
    }

document.getElementById('win').innerHTML = "Wins:" + wins;
document.getElementById('losses').innerHTML = "Losses:" + losses;
document.getElementById('guessesleft').innerHTML = "Guesses left:" + guessesLeft;
document.getElementById('lettersguessed').innerHTML = "Letters Guessed" + printedGuesses;
}    
// var text =
// "<p> Wins: " + wins + "</p>" +
// "<p> Losses: " + losses + "</p>" +
// "<p> Guesses Left: " + guessesLeft + "</p>" +
// "<p> Your guesses so far: " + printedGuesses + "</p>";

// document.querySelector("#game").innerHTML = html;
// }
