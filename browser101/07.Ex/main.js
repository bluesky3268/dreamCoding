'use strict';

const startBtn = document.querySelector('start-btn');
const field = document.querySelector('.background-field');
const fieldRect = field.getBoundingClientRect();
const CARROT_SIZE = 80;

// startBtn.addEventListener('click', () => {
//     startGame();
// });

function startGame() {
    console.log(fieldRect);
    addItems('carrot', 5, 'img/carrot.png');
    addItems('bug', 5, 'img/bug.png');
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
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

startGame();