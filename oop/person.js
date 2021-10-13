// prototypal inheritance
// myPerson --> Person.prototype --> Object.prototype --> null



class Person {
    constructor(first, last, age, likes = []) {
        this.firstName = first
        this.lastName = last
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}`
        this.likes.forEach((like) => {
            bio = bio + ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} ${this.lastName} is a ${this.age}`
        // Ahmed is a coder
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade;
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing';
        return `${this.firstName} ${this.lastName} ${status} the class.`
    }
}

const me = new Employee('Ahmed', 'Adel', 20, 'Teacher',[])
me.fullName = 'adel abdelrahman'
console.log(me.getBio())
