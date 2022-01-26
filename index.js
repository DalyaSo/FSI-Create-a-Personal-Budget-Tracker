let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let x = 0; x < weeklyExpenseQuestions.length; x++) {
let answer = parseFloat(window.prompt(weeklyExpenseQuestions[x]))
weeklyExpenses = weeklyExpenses + answer
}

for(let x = 0; x < monthlyExpenseQuestions.length; x++) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[x]))
    monthlyExpenses = monthlyExpenses + answer
}

for(let x = 0; x < annualExpenseQuestions.length; x++) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[x]))
    annualExpenses = annualExpenses + answer
}