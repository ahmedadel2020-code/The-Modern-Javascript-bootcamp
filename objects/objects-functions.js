let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (Book) {
    return {
        summary: `${Book.title} by ${Book.author}`,
        pageCountSummary: `${Book.title} is ${Book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.summary)

// Challenge area
// Create function - take fahrenheit in - return object with all three

let temp = {
    fahrenhit: 32,
    cel: (32 - 32) * (5 / 9),
    kel: (32 - 32) * (5 / 9) + 273.15
}

let convert = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        cel: (fahrenheit - 32) * (5 / 9),
        kel: (fahrenheit - 32) * (5 / 9) + 273.15
    }
}

let result = convert(50);
console.log(result);