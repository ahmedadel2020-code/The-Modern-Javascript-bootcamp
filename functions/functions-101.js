// Function - input(argument), code, output(return value)

let greetUser = function() {
    console.log('Welcome user!')
}
greetUser()
greetUser()
greetUser()
let square = function(num) {
    let result = num * num
    return result;
}
let value = square(10);
let otherValue = square(3)
console.log(value)
console.log(otherValue);

// Challenge area

// convrtFahrenheitToCelsius
let convrtFahrenheitToCelsius = function(fahrenhit) {
    let cel = (fahrenhit - 32) * (5 / 9);
    return cel
}

let result = convrtFahrenheitToCelsius(68)
console.log(result);