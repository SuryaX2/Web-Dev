let to = [];
let d = [];
let i = 0;
function display() {
    let html = '';
    let todoHtml = '';
    for (i = 0; i < to.length; i++) {
        html = `<span class="inner">${to[i]}</span><span class="inner">${d[i]}</span><button class="del-btn box" onclick="
        to.splice(${i}, 1);
        d.splice(${i}, 1);
        display();
        ">Delete</button>`;
        todoHtml += html;
    }
    document.querySelector('.show').innerHTML = todoHtml;
}
function todo_list() {
    to.push(document.querySelector('.inputbox').value);
    console.log(to);
    d.push(document.querySelector('.date').value);
    document.querySelector('.inputbox').value = '';
    display();
}
