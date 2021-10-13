// Lexical scopr (static scope)
// Global scope - Define outside of all code blocks
// local scope - Define inside a code block

// In a scope you can access variables define in that scope, or in any parent/ancestor


// Global Scope (varOne)
// Local Scope (varTwo)
    // Local Scope(varFour)
// Local Scope (varThree)
let varOne = 'varOne'
if(true) {
    console.log(varOne);
    let varTwo = 'varTwo'
    console.log(varTwo);
    if(true) {
        let varFour = 'varFour'
        console.log(varFour);
    }
}
if(true) {
    let varThree = 'varThree'
    console.log(varThree)
}
