function doubleAmountPerDay(totalDays) {
  var amount = 0.01; // day 1
  console.log("Day 1 -> $" + amount)
  for (var day = 1; day < totalDays; day++) {
    amount = amount * 2;
    var actualDay = day + 1;
    console.log("Day " + actualDay + " -> $" + amount)
  }

  return amount;
}

console.log(doubleAmountPerDay(30))
