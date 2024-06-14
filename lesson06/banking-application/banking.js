
let choice
let amt
let balance = 100;

do {
    choice = prompt('Enter "W" to withdraw funds, "D" to deposit funds, "B" for your account balance or "Q" to quit');
    switch(choice) {
        case 'W': {
            amtWithdraw = prompt('How much do you want to withdraw?');
            break;
        }
        case 'D': {
            amtDeposit = prompt('How much do you want to deposit?');
            break;
        }
        case 'B': {
            alert(('Your balance: $') + balance);
            break;
        }
        case 'Q': {
            alert('Goodbye!');
            break;
        }
    }
}
while (choice != 'Q')

