var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFar = 0;

    document.onkeyup = function(event) {

      var userGuess = event.key;

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      var x = event.keyCode;
      var guessesSoFar = String.fromCharCode(x);

      if (guessesLeft > 0) {
        if (userGuess === computerGuess) {
          wins++;
          guessesLeft = 10;
        } else if (userGuess !== computerGuess) {
          guessesLeft--;
        }
          // var newGuessDiv = document.createElement("div");
          // newGuessDiv.innerHTML = computerChoices[i];
          // guessesSoFar.appendChild(newGuessDiv);
      }

      if (guessesLeft == 0) {
        losses++;
        guessesLeft = 10;
      }

      var html =

        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses So Far: " + guessesSoFar + "</p>";

      document.querySelector("#game").innerHTML = html;
    
    }
