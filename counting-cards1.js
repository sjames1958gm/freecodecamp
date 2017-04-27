var count = 0;

function cc(card) {
  // Only change code below this line
  if ([2, 3, 4, 5, 6].indexOf(card) !== -1) {
      count++;
  } else if ([10, "J", "Q", "K", "A"].indexOf(card) !== -1) {
      count--;
  }

  return count + ((count > 0) ? " Bet" : " Hold");
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
