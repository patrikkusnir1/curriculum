let count = 0;
const cc = card => {
  // if (card >= 2 && card <= 6) {
  //   count++
  // } 
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      {
        count++
      }
    break;
    
    case 10: 
    case "J":
    case "Q":
    case "K":
    case "A":
      {
        count--
      }
  }
  return count > 0 ? count + " Bet" : count + " Hold";   
}
