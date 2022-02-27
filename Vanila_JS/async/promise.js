// Promise : 콜백을 사용하지 않고 비동기(asynchronous)를 간편하게 처리할 수 있도록 도와주는 object
"use strict";

// State(상태) : pending -> fulfilled or rejected
// Producer(정보제공자)와 Consumer(정보소비자)

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {
    // doing heavy work -> 무거운 작업을 동기적으로 수행하면 큰 데이터를 읽어오거나 하는 경우 시간이 꽤 걸리기 때문에 다음라인의 코드가 실행되지 않기 때문에 비동기적으로 처리해줘야 함
    console.log("some business logic ...");
    setTimeout(() => {
        // resolve("ben");
        reject(new Error("There's no network to connect"));
    }, 1000);
});

// 2. Consumers : then, catch, finally
promise
    .then((value) => {
    console.log(`Hi, ${value}`);
    })
    .catch((error) => {
    console.log(`errorMsg : ${error}`);
    })
    .finally(() => {
        console.log(`finally always runs`);
    });

// 3. Promise chaining
const fetchNum = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNum
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1)
            }, 1000);
        });
    })
    .then(num => console.log(num));


// 4. Error handling
const getHen = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hen"), 1000);
});

const getCock = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Cock"), 1000);
});

const getEgg = hen => new Promise((resolve, reject) =>{
    if(hen === "Hen"){
        setTimeout(() => resolve(`${hen} => Egg`), 1000);
    }else {
        setTimeout(() => reject(new Error("Just Hen can lay eggs")));
    }
});


const cook = egg => new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cooked`), 1000);
});


getHen()
    .then(getEgg)   // 받은 걸 그대로 넘길 때는 생략해도 됨
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);

getCock()
    .then(getEgg)   // 받은 걸 그대로 넘길 때는 생략해도 됨
    .then(egg => cook(egg))
    .catch(error => {
        return "Cock cannot lay eggs";
    })
    .then(meal => console.log(meal))
    .catch(console.log);

// 5.