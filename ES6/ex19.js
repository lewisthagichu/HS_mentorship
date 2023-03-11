// Use getters and setters to Control Access to an Object
class Thermostat{
    constructor(F){
      this.F = F;
    }
    get temperature(){
      return 5/9 * (this.F - 32);
    }
    set temperature(celsius){
      this.F = (celsius * 9.0) / 5 + 32;
    }
  }
  
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  console.log(temp)
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  console.log(temp)