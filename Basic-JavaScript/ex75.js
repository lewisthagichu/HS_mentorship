// Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes >= par + 3){
    return "Go Home!";
  } else if (strokes == par + 2){
    return "Double Bogey";
  } else if (strokes == par + 1){
    return "Bogey";
  } else if (strokes == par && strokes == 1){
    return "Hole-in-one!";
  } else if (strokes == 1){
    return "Hole-in-one!";
  } else if (strokes == par){
    return "Par";
  } else if (strokes == par - 1){
    return "Birdie";
  } else {
    return "Eagle";
  } 

}

golfScore(5, 4);