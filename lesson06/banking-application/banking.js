let choice;
let balance = 100;

do {
    choice = prompt('Enter "W" to withdraw funds, "D" to deposit funds, "B" for your account balance or "Q" to quit');
    switch(choice) {
        case 'W': {
            amtWithdraw = prompt('How much do you want to withdraw?');
            withdrawFunction(balance, amtWithdraw);
            break;
        }
        case 'D': {
            amtDeposit = prompt('How much do you want to deposit?');
            depositFunction(balance, amtDeposit);
            break;
        }
        case 'B': {
            balanceFunction(balance);
            break;
        }
        case 'Q': {
            alert('Goodbye!');
            break;
        }
    }
}
while (choice != 'Q')

function withdrawFunction(firstNumber, secondNumber) {
    if (Number(secondNumber) > balance) {
        alert('Insufficient funds.');
    } else {
    balance = firstNumber - Number(secondNumber);
    }
}

function depositFunction(firstNumber, secondNumber) {
    if (Number(secondNumber) >= 50000) {
        alert('This application has a deposit limit of $50,000. If you wish to deposit $50,000 or more, please visit your local bank branch. Thank you!');
    } else {
    balance = firstNumber + Number(secondNumber);
    }
}

function balanceFunction(firstNumber) {
    alert(('Your balance: $') + balance);
}