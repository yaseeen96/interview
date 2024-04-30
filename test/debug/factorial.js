function calculateFactorial(num) {

    var result = 0; 

    for (var i = 1; i <= num; i++) {
        result += i; 
    }
    return result;
}

// Test the function with a known value
console.log('Factorial of 5:', calculateFactorial(5));