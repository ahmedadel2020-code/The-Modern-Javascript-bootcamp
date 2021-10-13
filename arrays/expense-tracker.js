const account = {
    name: 'Ahmed Adel',
    expenses: [],
    addExpense: function(text, amount) {
        this.expenses.push({description: text, amount: amount});

    },
    income: [],
    addIncome: function(description, amount) {
        this.income.push({description: description, amount: amount});
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
         this.expenses.forEach(function(expen) {           
            totalExpenses = totalExpenses + expen.amount;
        })
        let totalIncome = 0;
        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount;
        })
        let balance = totalIncome - totalExpenses;
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income, $${totalExpenses} in expenses.`
    }
}

// 1- add income array to account
// 2- addIncome method -> description, amount
// 3- tweak getAccountSummary

// Ahmed Adel has a balance of $1898. $3000 in income, $1102 in expenses.

account.addExpense('Rent', 950)
account.addExpense('cofee', 2)
account.addExpense('courses', 50)
account.addExpense('clothes', 100)
account.addIncome('job', 5000)
console.log(account.getAccountSummary())