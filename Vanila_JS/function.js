"use strict";
//FUNCTION -> obejct임
// functin 정의 방법
// function name(param1, param2 ...){
//      body..
//      return ..;
//}
function printParam(msg) {
  console.log(`${msg}`);
  return 0;
}
printParam("HELLO");

function changeName(obj, newName) {
  obj.name = newName;
  return obj;
}

let student = { name: "Ben", age: 20 };
console.log(`before change -- name : ${student.name}, age : ${student.age}`);
changeName(student, "Tom");
console.log(`name : ${student.name}, age : ${student.age}`);

// Defualt parameters
function showMsg(message, from) {
  console.log(`${message} by ${from}`);
}
showMsg("Hello", "BEN");
showMsg("Hi!!");

// Default 값 지정
function showMsg2(message, from = "unknown") {
  console.log(`${message} from ${from}`);
}
showMsg2("Hello", "the other side");
showMsg2("Hiiiiiii");

// Rest parameters -> ... 은 배열 형태로 전달됨
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`i = ${i} : ${args[i]}`);
  }
  for (const arg of args) {
    console.log(`for of : ${arg}`);
  }
  args.forEach((arg) => console.log(`forEach : ${arg}`));
}
printAll("Apple", "Grape", "PineApple");

// early return이 좋은 코드!!
function upgradeUser(user) {
  if (user.point <= 10) {
    return 0;
  }
  // if문에 해당하지 않는 경우 로직...
  return 1;
}

// First-class function
// anonymous function을 사용
const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();

// Call-back func
function randomQuiz(ans, printY, printN) {
  if (ans === "Hi") {
    printY();
    return;
  }
  printN();
}
const printY = function () {
  console.log("YES");
}
const printN = function () {
  console.log("NO");
};
randomQuiz("HI", printY, printN);

// Arrow func
const simplePrint = function () {
  console.log("simplePrint");
};
// const simplePrint = () => console.log("simplePrint!!");
simplePrint();

const multiply = (a, b) => {
  return a * b;
}
console.log(`5 x 5 = ${multiply(5, 5)}`);

//IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();