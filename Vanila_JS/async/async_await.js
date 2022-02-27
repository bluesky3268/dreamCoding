"use strict";
// async and await : 깔끔하게 promise를 사용하는 방법

// 1. async
function fetchUser() {
    // 네트워크 통신 -> 백엔드에서 데이터 받아오는 데 걸리는 시간 10초라고 가정
    return new Promise((resolve, reject) => {
        resolve("Ben");
    })
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 위와 같이 번거롭게 Promise를 쓰지 않아도 함수 앞에 async를 붙여주면 비동기적으로 작동함
async function fetchUser2() {
    return "Benny";
}

const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);


// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1500); // await가 붙어 있으면 delay()가 끝날 때까지 기다려 줌 -> 동기적으로..
    return "APPLE";
}

async function getBanana() {
    await delay(1000);
    return "BANANA";
}

// callback 지옥...과 똑같음..
function pickFruits() {
    return getApple()
        .then(apple => {
            return getBanana().then(banana => `${apple} + ${banana}`);
        })
}
pickFruits().then(console.log);

async function pickFruits2() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} and ${banana}`;
}
pickFruits2().then(console.log);

async function pickFruits3() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}과 ${banana}`;
}
pickFruits3().then(console.log);

// 3. pickFruits3 개선
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(', '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);