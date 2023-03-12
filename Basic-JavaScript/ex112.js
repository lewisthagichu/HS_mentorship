// Use Recursion to Create a Countdown

function countdown(n){
    if (n < 1){
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n); // adds elements to beginning of array
      return countArray;
    }
  }
  console.log(countdown(5))