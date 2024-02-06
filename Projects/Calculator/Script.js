let n = '';
let val = '';
let calc = '';
let display = document.querySelector('.display');
let btn = document.querySelectorAll('.btn');
let c = document.querySelector('#clr');
let allClear = document.querySelector('.all-clr');

function tap(number) {
    try {
        if (number === '=')
            calc = eval(calc);
        else
            calc += number;
        display.value = calc;
    } catch (error) {
        display.value = 'Syntax Error';
    }
}

function bspace() {
    calc = calc.slice(0, -1);
    display.value = calc;
}

function clearDisplay() {
    calc = '';
    display.value = calc;
}

function containsNumber(str) {
    return /\d/.test(str);
}

c.addEventListener('click', () => {
    bspace();
});

allClear.addEventListener('click', () => {
    clearDisplay();
});

btn.forEach(button => {
    button.addEventListener('click', () => {
        val = button.innerHTML;
        tap(val);
    });
});

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
    else if (e.key === 'Backspace')
        bspace();
    else if (e.key === 'c')
        clearDisplay();
    else {
        n = e.key;
        if (containsNumber(n))
            tap(`${n}`);
    }
});