// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = (stats) => {
    const {max, min} = stats;
    return (max + min) / 2.0;
  } 
  console.log(half(stats)); // Output: 28.015