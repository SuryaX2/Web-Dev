let calc = '';
function tap(number) {
    try {
        if (number === '=')
            calc = eval(calc);
        else
            calc += number;
        document.querySelector('.display').value = calc;
    } catch (error) {
        document.querySelector('.display').value = 'Syntax Error';
    }
}

function clearDisplay() {
    calc = '';
    document.querySelector('.display').value = calc;
}