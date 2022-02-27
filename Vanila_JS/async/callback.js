"use strict";
// 비동기 처리의 시작 - 1. 콜백
// synchronous와 asynchronous(by order -> in order)
// Synchronous -> 동기적 : Execute the code block by order after hoisting(정해진 순서에 맞게 코드가 실행이 되는 것)
// Asynchronous -> 비동기적 : 언제 코드가 실행될 지 예측할 수 없는 것
// * hoisting : var, function declaration이 제일 위로 올라가는 것

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous CallBack
function printImmediately(print) {
    print();
}
printImmediately(() => console.log("HI"));

// Asynchronous CallBack
function printWithDelay(print, timeOut) {
    setTimeout(print, timeOut);
}

printWithDelay(() => console.log('async callback'), 2000);

// Don't do like this
class UserStorage{
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (id === "ben" && password === "1234") {
                onSuccess(id);
            }else{
                onError(new Error('not found id or wrong password'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "ben") {
                onSuccess({name: "ben", role: "admin"});
            } else {
                onError(new Error("no access"));
            }
        });
    }
}


const userStorage = new UserStorage();
const id = prompt("아이디를 입력하세요");
const password = prompt("비밀번호를 입력하세요");
userStorage.loginUser(
    id
    , password
    , (user) => {
        userStorage.getRoles(
            user
            , userWithRole => {
                alert(`Hello ${userWithRole.name}, role : ${userWithRole.role}`);
            }
            , error => {
                console.log(error);
            }
        );
    }
    , (error) => {
        console.log(error);
    }
);

// 콜백 함수 안에서 또 다른 콜백함수를 호출하고 또 다른 콜백함수를 호출하고... 이런 콜백 체인의 문제점
// 1. 일단 가독성이 떨어져 코드 파악이 힘듦
// 2. 코드 파악이 힘드니깐 유지보수가 어려워짐