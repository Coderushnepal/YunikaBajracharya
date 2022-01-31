let body = document.getElementsByTagName("body")[0];
body.style = `
    background-color: #f7f7f7;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
`;

let title = document.createElement("h2");
title.innerHTML = "Expense Tracker";
document.body.appendChild(title);
title.style = `
    text-align: center;
`;

let container = document.createElement("div");
document.body.appendChild(container);
container.style = `
    width: 350px;
    margin: 30px auto;
`;

let yourBalance = document.createElement("h4");
container.appendChild(yourBalance);
yourBalance.innerHTML = "YOUR BALANCE";
yourBalance.style.margin = "0px";

let balanceAmount = document.createElement("h1");
let balance = 0.00;
balanceAmount.innerHTML = `$${balance.toFixed(2)}`;
container.appendChild(balanceAmount);
balanceAmount.style.margin = "0px";
balanceAmount.style.letterSpacing = "1px"; 

let incomeExpenseSection = document.createElement("div");
container.appendChild(incomeExpenseSection);
incomeExpenseSection.style =   `
    text-align: center;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 20px;
    justify-content: space-between;
    margin: 20px 0;
`;

let incomeSection = document.createElement("div");
incomeExpenseSection.appendChild(incomeSection);
incomeSection.style = `
    display: inline-block;
    width: 150px;
`;

let incomeText = document.createElement("h4");
incomeSection.appendChild(incomeText);
incomeText.innerHTML = "INCOME";
incomeText.style.margin = "0";

let incomeAmount = document.createElement("p");
let income = 0.00;
incomeAmount.innerHTML = `$${income.toFixed(2)}`;
incomeSection.appendChild(incomeAmount); 
incomeAmount.style = `
    color: #2ecc71;
    font-size: 20px;
    letter-spacing: 1px;
    margin: 5px 0;
`;

let expenseSection = document.createElement("div");
incomeExpenseSection.appendChild(expenseSection);
expenseSection.style = `
    border-left: 1px solid grey;
    display: inline-block;
    width: 150px;
`;

let expenseText = document.createElement("h4");
expenseSection.appendChild(expenseText);
expenseText.innerHTML = "EXPENSE";
expenseText.style.margin = "0";

let expenseAmount = document.createElement("p");
let expense = 0.00;
expenseAmount.innerHTML = `$${expense.toFixed(2)}`;
expenseSection.appendChild(expenseAmount); 
expenseAmount.style = `
    color: #c0392b;
    font-size: 20px;
    letter-spacing: 1px;
    margin: 5px 0;
`;

let historyTitle = document.createElement("h3");
container.appendChild(historyTitle);
historyTitle.innerHTML = "History";
historyTitle.style = `
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
`;

let historyList = document.createElement("ul");
container.appendChild(historyList);
historyList.style = `
    list-style-type: none;
    padding: 0;
    margin-bottom: 40px;
`;

let transactionTitle = document.createElement("h3");
container.appendChild(transactionTitle);
transactionTitle.innerHTML = "Add new transaction";
transactionTitle.style = `
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
`;

let form = document.createElement("div");
container.appendChild(form);

let text = document.createElement("label");
text.innerHTML = "Text";
form.appendChild(text);
text.style = `
    display: inline-block;
    margin: 10px 0;
`;

let textInput = document.createElement("input");
form.appendChild(textInput);
textInput.setAttribute("type", "text");
textInput.setAttribute("placeholder", "Enter text...");
textInput.style = `
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 94%;
`;

let textError = document.createElement("div");
form.appendChild(textError);
textError.innerHTML = "Please enter the text";
textError.style = `
    margin: 5px 0;
    color: #c0392b;
    font-size: 13px;
    display: none;
`;

let amountText = document.createElement("label");
form.appendChild(amountText);
amountText.innerHTML = "Amount <br> (negative - expense, positive - income)";
amountText.style = `
    display: inline-block;
    margin: 10px 0;
`;

let amountInput = document.createElement("input");
form.appendChild(amountInput);
amountInput.setAttribute("type", "number");
amountInput.setAttribute("placeholder", "Enter amount...");
amountInput.style = `
    border: 1px solid #dedede;
    border-radius: 2px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 94%;
`;
let amountError = document.createElement("div");
form.appendChild(amountError);
amountError.innerHTML = "Please enter the amount";
amountError.style = `
    display: none;
`;

let submitButton = document.createElement("button");
form.appendChild(submitButton);
submitButton.innerHTML = "Add transaction";
submitButton.style = `
    cursor: pointer;
    background-color: #9c88ff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 10px;
    width: 100%;
`;

function updateBalance() {
    let balance = income + expense;
    balanceAmount.innerHTML = `$${balance.toFixed(2)}`;
}

let transactions = [];
let id = 0;

function removeTransaction(amountRemove) {
    if (amountRemove > 0) {
        income -= amountRemove;
        incomeAmount.innerHTML = `$${income.toFixed(2)}`;
    }
    else {
        expense -= amountRemove;
        expenseAmount.innerHTML = `$${expense.toFixed(2) * (-1)}`;
    }
    updateBalance();

    transactions = transactions.filter(
        (transaction) => transaction.id != id
    );
};

function addTransaction(id, textInput, amountInput) {
    const transaction = {
        id: id,
        text: textInput,
        amount: amountInput,
    };
    transactions.push(transaction);

    let listItem = document.createElement("li");
    listItem.innerHTML = `
        ${transaction.text}
    `;

    historyList.appendChild(listItem);
    listItem.style = `
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        color: #333;
        justify-content: space-between;
        position: relative;
        padding: 10px;
        margin: 10px 0;
    `;

    let sign = '';
    if(transaction.amount > 0) {
        sign = '+';
        listItem.style.borderRight = "5px solid #2ecc71";
    }
    else  {listItem.style.borderRight = "5px solid #e74c3c"};

    let amountHistory = document.createElement("span");
    amountHistory.innerHTML = `${sign}${transaction.amount}`;
    amountHistory.style = `
        position: absolute;
        right: 12px;
    `;
    listItem.appendChild(amountHistory);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.style = `
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    listItem.appendChild(deleteButton);

    listItem.addEventListener("mouseover", function(event) {
        deleteButton.style = `
            cursor: pointer;
            background-color: #e74c3c;
            border: 0;
            color: #fff;
            font-size: 20px;
            line-height: 20px;
            padding: 2px 5px;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(-100%, -50%);
        `;
    });

    deleteButton.addEventListener("click", function() {
        listItem.remove();
        console.log("to remove: ",transaction);
        removeTransaction(transaction.amount);
    });

    listItem.addEventListener("mouseout", function(event) {
        deleteButton.style = `
            display: none;
        `;
    });
}

submitButton.addEventListener('click', function() {
    if (textInput.value.length == 0) {
        textError.style = `
            margin: 5px 0;
            color: #c0392b;
            font-size: 13px;
            display: block;
        `;
    }
    else if (amountInput.value == 0) {
        amountError.style = `
            margin: 5px 0;
            color: #c0392b;
            font-size: 13px;
            display: block;
        `;
    }
    else {
        textError.style.display = "none";
        amountError.style.display = "none";
        if (amountInput.value > 0) {
            id++;
            income += parseFloat(amountInput.value);
            incomeAmount.innerHTML = `$${income.toFixed(2)}`;
            updateBalance();
            addTransaction(id, textInput.value, parseFloat(amountInput.value));
        }
        else {
            id++;
            expense += parseFloat(amountInput.value);
            expenseAmount.innerHTML = `$${expense.toFixed(2) * (-1)}`;
            updateBalance();
            addTransaction(id, textInput.value, parseFloat(amountInput.value));
        }
        amountInput.value = '';
        textInput.value = '';
    }
});