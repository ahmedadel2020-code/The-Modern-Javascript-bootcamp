const createCounter = () => {
    let count = 0

    return {
        inCrement() {
            count++
        }, 
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.inCrement()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) => {
    return(b) => {
        return a + b
    }
}

// const add10 = createCounter(10)
// console.log(add10(-2))
// console.log(add10(20))

const creatTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}

const tip20 = createCounter(0.2)
const tip30 = createCounter(0.3)
console.log(tip20(100))
console.log(tip30(100))