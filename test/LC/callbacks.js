function calculate(a, b, callback) {
    const sum = a + b;
  return callback(sum);
}


function logSum(sum) {
    console.log(`The sum is ${sum}`);
}

calculate(2, 3, logSum); // The sum is 5


// todo: write a function that takes in a message and a callback function
// the function should log a result after 3 seconds

function logAfterDelay(message, callback) {
    setTimeout(callback, 3000);
}

logAfterDelay('This is a test', console.log("ss")); // This is a test