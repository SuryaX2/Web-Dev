let n = '';
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

function containsNumber(str) {
    return /\d/.test(str);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')
        tap('=');
    else if (e.key === '*')
        tap('*');
    else if (e.key === '/')
        tap('/');
    else if (e.key === '+')
        tap('+');
    else if (e.key === '-')
        tap('-');
    else if (e.key === 'c')
        clearDisplay();
    else {
        n = e.key;
        if (containsNumber(n))
            tap(`${n}`);
    }
});