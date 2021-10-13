// Global scope(convert, tempOne, tempTwo)
    // local scope(fahrenheit, cel)
        // local scope(isFreezing)
let convrtFahrenheitToCelsius = function(fahrenhit) {
    let cel = (fahrenhit - 32) * (5 / 9);
    if(cel <= 0) {
        let isFreezing = true
    }
    return cel
}

let result = convrtFahrenheitToCelsius(68)
console.log(result);