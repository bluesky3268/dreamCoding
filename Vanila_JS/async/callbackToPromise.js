"use strict";

class UserStorage{
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id === "ben" && password === "1234") {
                    resolve(id);
                } else {
                    reject(new Error('NOT FOUND ID OR WRONG PASSWORD'));
                }
            }, 1500);
        });
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "ben") {
                    resolve({name: "ben", role: "admin"});
                } else {
                    reject(new Error("no access"));
                }
            });
        });
    }
}


const userStorage = new UserStorage();
const id = prompt("아이디를 입력하세요");
const password = prompt("비밀번호를 입력하세요");

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(loginUser => alert(`name : ${loginUser.name}, role : ${loginUser.role}`))
    .catch(error => alert(`!! ${error} !!`));