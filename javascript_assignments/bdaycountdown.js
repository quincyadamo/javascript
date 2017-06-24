// For everyday print how many days left. More than 30 days, print a sad message. Less than 30 days, print an excited message. Less than 5 days, scream it. Once it's your birthday, have a party //
function daysUntilMyBirthday(daysLeft) {
  for (var i = daysLeft; i >= 0; i--) {
    if (i >= 30) {
      console.log("Such a long time " + i + " days left!");
    }
    else if (i < 30 && i > 5) {
      console.log("It's getting closer! " + i + " days left!");
    }
    else if (i <= 5 && i > 0) {

      console.log("Yay! It's this weekend! " + i + " days left");
    }
    else if (i == 0) {

      console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
      console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
      console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
    }
  }
}

daysUntilMyBirthday(60);
