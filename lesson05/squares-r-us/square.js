function numberSquared() {
    let input = prompt('Enter a number that you want squared');
    let numberToSquare = input;
    let result = 0;
    
    result = numberToSquare * Number(input);
    
    alert(result);
}

function multiplyNumbers() {
    let input = prompt('Enter 2 numbers (separated by a space) that you want to multiply');
    let inputNumbers = input.split(' ')
    let result = 0;
    
    result = inputNumbers[0] * inputNumbers[1];
    
    alert(result);
}