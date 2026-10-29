// 1. Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}

// 2. Even check Boolean output
function isEven(number) {
  return number % 2 === 0;
}

// 3. Greeting with a template literal
function greet(name) {
  return `Hello, ${name}!`;
}

// 4. Test each one with two different inputs
console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212

console.log(isEven(4));   // true
console.log(isEven(7));   // false

console.log(greet("Amina"));  // Hello, Amina!
console.log(greet("Brian"));  // Hello, Brian!
let i = 1;
while (i <= 5) {
    console.log("Hello!");
    i++;
}

setTimeout(function() {
    console.log("Hello after 2 seconds!");
}, 2000);
