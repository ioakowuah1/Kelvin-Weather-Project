// forecast today
const kelvin = 0;
// subract 273 from kelvin forecast to celsius
var celsius = kelvin - 273;
// convert celsius to fahrenheit
var fahrenheit = celsius *(9/5) + 32;
// using floor to round the fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is TEMPERATURE degrees Fahrenheit");
console.log(`The temperature is ${fahrenheit} degree Fahrenheit`);
// convert celsius to Newton
var newton = celsius *(33/100);
// floor the newton value
newton = Math.floor(newton);
console.log(`The temperature is ${newton} Newton`);