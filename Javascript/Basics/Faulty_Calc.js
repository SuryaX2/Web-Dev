let a = prompt("\nEnter 1st Number : ");
let b = prompt("\nEnter 2st Number : ");
let c = prompt("\nEnter Operation : ");
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if (Math.random() > 0.1) {
    alert(`The Result is : ${eval(`${a} ${c} ${b}`)}`);
}
else {
    c = obj[c];
    alert(`The Result is : ${eval(`${a} ${c} ${b}`)}`);
}    