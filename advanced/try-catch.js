const getTip = (amount) => {
    if(typeof amount === 'number') {
        return amount * 0.25
    } else {
        throw Error('Argument must be a number')
    }
}

try {
    const result = getTip(1)
    console.log(result)
} catch(error) {
    console.log('Catch block is running')
}

