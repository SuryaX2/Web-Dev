let n = '';
let val = '';
let calc = '';
let display = document.querySelector('.display');
let btn = document.querySelectorAll('.calculator-button');
let c = document.getElementById('clr');
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
btn.forEach(button => {
    button.addEventListener('click', () => {
        val = button.innerHTML;
        tap(val);
    });
});
// c.addEventListener('click', () => {
//     console.log(c);
//     bspace();
// });
allClear.addEventListener('click', () => {
    clearDisplay();
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