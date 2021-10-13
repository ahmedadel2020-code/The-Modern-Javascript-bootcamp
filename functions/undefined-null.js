// undefined for variable
let nam;
nam = 'ahmed'
if(nam === undefined) {
    console.log('please provide a name')
} else {
    console.log(nam)
}

// undefined for function arguments
// undefined as function return value
let square = function(num) {
    console.log(num)
}
let result = square()
console.log(result)

// Null as assigned value
let age = 27
age = null;
console.log(age)