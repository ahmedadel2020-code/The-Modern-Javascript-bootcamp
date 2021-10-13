let name = '  Ahmed Adel  '

console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())
// include method
let password = 'saag3335dgd452'
console.log(password.includes('password'))

// trim
console.log(name.trim())

// challenge area
// isValidPassword
// length is more than 8 - and does not contain the word passwrod
let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}
console.log(isValidPassword('safd'))
console.log(isValidPassword('abcaee65496sdg'))
console.log(isValidPassword('safdpassword544'))