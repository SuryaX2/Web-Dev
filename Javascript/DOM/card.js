let n = prompt("How many Cards : ");
let add = document.querySelector('.add');
let display = '';
add.addEventListener('click', () => {
    create();
})
function create() {
    for (i = 1; i <= n; i++) {
        document.querySelector('.cont').innerHTML = html;
        display += html;
    }
    document.querySelector('.cont').innerHTML = display;
}
let html = `
<div class="card">
<div class="img">
    <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
        alt="">
    <div class="time">11:00</div>
</div>
<div class="title">
    <h2>Introduction to Backend | Sigma Web Dev video #2</h2>
    <div class="sub-title">
        <p>CodeWithHarry . 565k views . 2 months ago</p>
    </div>
</div>
</div>`;