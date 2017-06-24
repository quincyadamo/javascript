function randomGamble(quarters) {

  //console.log("Starting # of Quarters: " + quarters);

  var haveWon = false; // defualt
  var winningTicket = 1; // this could be any number but we selected 1

  while (quarters > 0 && haveWon == false) { // each time this happens this is a new turn
    quarters--; // GIVE ME YOUR MONEY!

    // NOW PLAY THE GAME!
    var selectedTicket = Math.floor((Math.random() * 100) + 1); // pulls a new ticket

    if (selectedTicket == winningTicket) {
      haveWon = true; // this breaks out of loop
    }
  }

  if (haveWon == true) {
    var winningQuarters = Math.floor((Math.random() * 51) + 50) + quarters;
    console.log("You've won " + winningQuarters + " quarters!");
    return winningQuarters;
  } else {
    // this means there's no quarters
    console.log("You lost :(" );
    return 0;
  }


}
var randomQuarters = Math.floor((Math.random() * 100) + 1); // get 1 to 100 quarters
randomGamble(randomQuarters);
