let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area
// name, age, location

// Ahmed is 20 and lives in Giza
// Increase age by 1 and print message again

let info = {
    name: 'Ahmed Adel',
    age: 20,
    location: 'Giza'
}
console.log(`${info.name} is ${info.age} and lives in ${info.location}`);

info.age = info.age + 1;
console.log(`${info.name} is ${info.age} and lives in ${info.location}`);
