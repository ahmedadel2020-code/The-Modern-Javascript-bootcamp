// const myAge = 20
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'

// console.log(message)

const myAge = 20

const showPage = () => {
    console.log('Showing the page')
}

const showErrorPage = () => {
    console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tylor', 'Ahmed', 'mo', 'al', 'so']

const res = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people in your team';
console.log(res)