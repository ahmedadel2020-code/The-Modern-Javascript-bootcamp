let myAccount = {
    name:'Ahmed',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {

    account.expenses = account.expenses + amount;
   
}

// addIncome
let addIncome = function(account, income) {
    account.income = account.income + income;
}
// resetAccount
let resetAccount = function(account) {
    account.income = 0;
    account.expenses = 0;
}
// getAccountSummary
let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance} in balance, $${account.income} in income, $${account.expenses} in expenses`;
}
// Account for Ahmed has 900$, 1000$ in income, 100$ in expenses

addExpense(myAccount, 100);
addIncome(myAccount, 1000);
addExpense(myAccount, 200)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));