'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION = 5;

const field = document.querySelector('.background-field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game-btn');
const gameTimer = document.querySelector('.timer');
const gameScore = document.querySelector('.score');

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const alertSound = new Audio('./sound/alert.wav');
const bgSound = new Audio('./sound/bg.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const winSound = new Audio('./sound/game_win.mp3');

let started = false;
let score = 0;
let timer = undefined;


field.addEventListener('click', (event) => {
    onFieldClick(event);
});

gameBtn.addEventListener('click', () => {
    if (started) {
        stopGame();
    }else{
        startGame();
    }
});

popUpRefresh.addEventListener('click', () => {
    startGame();
});

function onFieldClick(event) {
    if (!started) {
        return;
    }
    const target = event.target;
    if (target.matches('.carrot')) {
        target.remove();
        score++;
        playSound(carrotSound);
        updateScore();
        if (score === CARROT_COUNT) {
            finishGame(true);
        }
    } else if (target.matches('.bug')) {
        finishGame(false);
    }
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}

function updateScore() {
    gameScore.innerText = CARROT_COUNT - score;
}

function finishGame(win) {
    started = false;
    hideGameBtn();
    if (win) {
        playSound(winSound);
    }else{
        playSound(bugSound);
    }
    stopSound(bgSound);
    showPopup(win ? 'YOU WON!!' : 'YOU LOST!!');
    stopGameTimer();
}

function startGame() {
    started = true;
    initGame();
    showStopBtn();
    showTimerAndScore();
    startGameTimer()
    playSound(bgSound);
}
function stopGame() {
    started = false;
    stopGameTimer();
    hideGameBtn();
    showPopup('WANT TO PLAY AGAIN?');
    playSound(alertSound);
    stopSound(bgSound);
}

function showStopBtn() {
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
}

function hideGameBtn() {
    gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function stopGameTimer() {
    clearInterval(timer);
}

function updateTimerText(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function showPopup(text) {
    popUpText.innerText = text;
    popUp.classList.remove('popup-hide');
}

function hidePopup() {
    popUpText.innerText = '';
    popUp.classList.add('popup-hide');
}
function initGame() {
    score = 0;
    field.innerHTML = '';
    gameScore.innerText = CARROT_COUNT;
    // console.log(fieldRect);
    addItems('carrot', CARROT_COUNT, 'src/img/carrot.png');
    addItems('bug', BUG_COUNT, 'src/img/bug.png');
}

function addItems(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;

    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);

        item.style.position = 'absolute';

        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);

        item.style.left = `${x}px`;
        item.style.top = `${y}px`;

        // 만든 아이템 추가
        field.appendChild(item);
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
