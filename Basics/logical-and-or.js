let temp = 50

// logical and operator - True if both sides are true. False otherwise
// logical or operator - Truen if at least one side is true. False otherwise
if(temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if(temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}

// challenge area
let isGuesOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, offer up anything on the menue
if(isGuesOneVegan && isGuestTwoVegan) {
    console.log('only offer up vegan dishes')
} else if(isGuesOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('offer up anything on the menue');
}