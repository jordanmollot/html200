let choice;
let amt = 0;
let balance = 100;

do {
    choice = prompt('Enter "W" to withdraw funds, "D" to deposit funds, "B" for your account balance or "Q" to quit');
    switch(choice) {
        case 'W': {
            amtWithdraw = prompt('How much do you want to withdraw?');
            withdrawFunction(balance);
            break;
        }
        case 'D': {
            amtDeposit = prompt('How much do you want to deposit?');
            depositFunction(balance);
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

function withdrawFunction() {
    amt = balance - Number(amtWithdraw);
}

function depositFunction() {
    amt = balance + Number(amtDeposit);
}

function balanceFunction() {
    totalBalance = balance + amt;
    alert(('Your balance: $') + totalBalance);
}