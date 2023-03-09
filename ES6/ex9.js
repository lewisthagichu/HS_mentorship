// Use Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today, tomorrow} = HIGH_TEMPERATURES;
  console.log(today) //output: 77
  console.log(tomorrow) // output: 80