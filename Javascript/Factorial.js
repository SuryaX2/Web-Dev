function Fact(n) {
    let f = 1;
    for (let i = 1; i <= n; i++)
        f = f * i;
    return f;
}
let n = prompt("Enter Number : ");
let x = Fact(n);
console.log(x);
alert(`Factorial of ${n} is ${x}`);