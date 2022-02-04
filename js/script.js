// Create a function called receivingFunction which accepts one argument. Inside this function check if the argument is a function, and if it is, call the function.

// Create another function called callbackFunction which logs the string: "I am a callback function".

// Call receivingFunction and pass callbackFunction into it as an argument.

function receivingFunction(argument) {
  if (typeof argument === "function") {
    argument();
  }
}

function callbackFunction() {
  console.log("I am a callback function");
}

receivingFunction(callbackFunction);

// Convert the following for loop to a forEach loop.

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// for (let i = 0; i < prizes.length; i++) {
//   console.log(`Prize ${i + 1}: ${prizes[i]}`);
// }

prizes.forEach(function (item, index) {
  console.log(`Prize ${index + 1}: ${item}`);
});

// Question 3
// Write code that waits 5 seconds before logging the string: I waited 5 seconds before executing. Store the amount of seconds (5 initially) in a variable so it can be easily changed.

let time = 5000;

setTimeout(function () {
  console.log("I waited 5 seconds before executing");
}, time);

// Question 4
// Write code that logs the numbers 1 to 4 every 1.5 seconds and then stops.

let count = 0;

const interval = setInterval(function () {
  count++;

  if (count === 4) {
    clearInterval(interval);
  }
  console.log(count);
}, 1500);
