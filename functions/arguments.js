// Multiple arguments
let add = function(a, b, c) {
    return a + b + c;
}
let result = add(10, 15, 5);
console.log(result);

// Deafult arguments
let getScoreText = function(name = 'Annonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}
let scoreText = getScoreText(undefined, 90)
console.log(scoreText);

// Challenge area
// total, tipPercent .2
// A 25% tip on $48 will be 10$
let calcPrice = function(total, tip = .2) {
    return `A ${tip * 100}% tip on $${total} will be $${total * tip}`;
}
let calc = calcPrice(68)
console.log(calc)

let name = 'ahmed'
let age = 20
console.log(`Hey, my name is ${name} and my age is ${age}`)