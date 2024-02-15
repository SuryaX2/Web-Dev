let h, m, s;
h = m = s = 0;
let running = false;
let timer = null;
let display = document.querySelector('.display');
let playBtn = document.querySelector('.play');
let stopBtn = document.querySelector('#pause');
let resetBtn = document.querySelector('.reset');
function update() {
    s += 1;
    if (s === 60) {
        s = 0;
        m += 1;
        if (m === 60) {
            m = 0;
            h += 1;
        }
    }
    let hours = h < 10 ? "0" + h : h;
    let min = m < 10 ? "0" + m : m;
    let sec = s < 10 ? "0" + s : s;
    display.innerHTML = `${hours} : ${min} : ${sec}`;
};

function playWatch() {
    if (!running) {
        timer = setInterval(update, 1000);
        running = true;
        document.querySelector('.playimg').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Eo_circle_deep-orange_pause.svg/480px-Eo_circle_deep-orange_pause.svg.png";
    }
    else {
        clearInterval(timer);
        running = false;
        document.querySelector('.playimg').src = "https://static.vecteezy.com/system/resources/previews/009/992/418/non_2x/button-video-player-icon-sign-design-free-png.png";
    }
};

function timerStop() {
    clearInterval(timer);
    running = false;
};

function resetTimer() {
    timerStop();
    h = m = s = 0;
    display.innerHTML = `${h} : ${m} : ${s}`;
};

playBtn.addEventListener('click', () => {
    playWatch();
});
stopBtn.addEventListener('click', () => {
    console.log('clicked');
    timerStop();
});
resetBtn.addEventListener('click', () => {
    resetTimer();
});

