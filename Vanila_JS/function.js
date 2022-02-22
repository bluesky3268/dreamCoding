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
