//set variables
var alphabetChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var userGuess;
var guessesLeft = 10;
var printedGuesses = [];

//create function for event - what should occur when keys are pressed 
document.onkeyup = function(eventPress) {
    if (guessesLeft !== 0) {
        var userGuess = eventPress.key; 
        console.log("userGuess: ", userGuess);
//allow computer to randomly select letters
        var computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];
        //var computerGuess = alphabetChoices[1];
        //(used above to test if 'win' was working)

        //when player wins
        if (userGuess === computerGuess) {
            console.log("You win!");
            wins++; 
            console.log(wins);
            guessesLeft = 10;
            printedGuesses = [];
        
        //game rules until gameover 
        } else {
            guessesLeft--; 
            console.log("guessesLeft:", guessesLeft);
            console.log("Try again!");
            printedGuesses.push(userGuess);
            console.log(printedGuesses);

        }
//when user loses
    } else {
        guessesLeft = 10;
        printedGuesses = [];
        losses++;
    }


    //sets html text to display wins, losses, and guesses//
    var html =
    "<h1>Psychic Game " + "</h1>" +
    "<h3> Guess what letter I am thinking of!" + "</h3>" +
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses: " + losses + "</p>" +
    "<p> Guesses Left: " + guessesLeft + "</p>" +
    "<p> Your guesses so far: " + printedGuesses + "</p>";
    
    document.querySelector("#game").innerHTML = html;
}    


