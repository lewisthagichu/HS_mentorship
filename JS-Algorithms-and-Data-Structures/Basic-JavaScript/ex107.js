// Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
    let myNum = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return myNum;
  }
  let test = randomRange(10, 20);
  console.log(test)