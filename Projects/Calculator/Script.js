let calc = '';
function tap(number) {
    if (number === '=')
        calc = eval(calc);
    else
        calc += number;
    document.querySelector('.display-para').innerHTML = calc;
}
function clearDisplay() {
    document.querySelector('.display-para').innerHTML = 'Calculator';
}