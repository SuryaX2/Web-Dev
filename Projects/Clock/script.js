function showTime() {
    let now = new Date();
    let hours = now.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let min = now.getMinutes();
    min = min < 10 ? "0" + min : min;
    let secs = now.getSeconds();
    secs = secs < 10 ? "0" + secs : secs;
    document.querySelector('.main').innerHTML = `${hours} : ${min}`;
    document.querySelector('.s').innerHTML = `${secs}`;
    const currentDate = now.getDate();
    const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.querySelector('.date').innerHTML = `${months[now.getMonth()]}, ${weeks[now.getDay()]} ${currentDate}`;
}

setInterval(() => {
    showTime();
}, 1000);