const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))
console.log(squareLong(5))

const people = [{
    name: 'ahmed',
    age: 20
}, {
    name: 'tarek',
    age: 35
}, {
    name: 'ashraf', 
    age: 32
}]

// const under30 = people.filter(function(person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30);

const findPerson = people.find((person) => person.age === 20);
console.log(findPerson.name)
console.log(under30)