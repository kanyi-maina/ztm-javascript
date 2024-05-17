function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "You encounter a monster";
      break;
    case "back":
      whatHappens = "You found your way home";
      break;
    case "right":
      whatHappens = "You found a river";
      break;
    case "left":
      whatHappens = "You meet your one true love";
      break;
    default:
      whatHappens = "Please enter a valid direction";
  }
  return whatHappens;
}
