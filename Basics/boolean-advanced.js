let isAccountLocked = true
let userRole = 'user'


if(isAccountLocked) {
    console.log('Is account locked')
} else if(userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('welcome')
}

// challenge area
let temp = 85
if(temp <= 32) {
    console.log("it's freezing outside")
} else if(temp >= 110) {
    console.log("it's hot outside")
} else {
    console.log('Go for it')
}
