// student score, total possible score
// 15/20 -> you got a C(75%)
// A 90-100, B 80-89, c 70-79, D 60-69, F 0 59

const studentScore = function(total, score) {
    if(typeof total !== 'number' || typeof score !== 'number') {
        throw Error('please provide a number')
    } 
    const grade = (score / total) * 100;
    if(grade >=90) {
        return `You got A(${grade}%)`;
    } else if(grade >= 80) {
        return `You got B(${grade}%)`;
    } else if(grade >= 70) {
        return `You got C(${grade}%)`;
    } else if(grade >= 60) {
        return `You got D(${grade}%)`;
    } else if(grade >= 0) {
        return `You got F(${grade}%)`;
    } else {
        return 'You entered wrong grade!'
    }
}

try {
    const result = studentScore('tes', '55');
    console.log(result);
} catch(e) {
    console.log(e.message)
}
