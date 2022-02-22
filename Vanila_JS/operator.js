"use strict";
// 1. String concatenation
console.log("my" + " dog");
console.log("1" + 2);
console.log(`string leterals -> 1 + 2 = ${1 + 2}`);
console.log("It's \n\tmy book"); // \n : enter \t : tab

// 2. Numeric Operators
console.log(1 + 1);
console.log(1 - 1);
console.log(2 / 2);
console.log(2 * 2);
console.log(5 % 2);
console.log(2 ** 10);

// 3. Increment and decrement operators
let counter = 2;
console.log(`counter : ${counter}`);
const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

// 4. Assignment operators
let x = 5;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators
const v1 = false;
const v2 = 4 < 2;
console.log(`or : ${v1 || v2 || check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    console.log("...");
  }
  return true;
}

// 7. Equality
// '==' : loose equality -> 타입을 변경해서 검사함
// '===' : strict equality -> 타입이 다르면 다름 -> 이거 쓰는 게 더 좋음
const strFive = "5";
const numFive = 5;

console.log(strFive == numFive);
console.log(strFive != numFive);
console.log(strFive === numFive);
console.log(strFive !== numFive);

let ben = { name: "ben", age: 20 };

// 8. Conditional operators : if, if else ...
const name = "ben";
if (name === "ben") {
  console.log("Welcome ben!");
} else if (name === "tom") {
  console.log("Hello tom!!");
} else {
  console.log("Who are you?");
}

// 9. Ternary operator
console.log(name === "ben" ? "HI" : "HELLO");

// 10. Switch statement
const browser = "123";
switch (browser) {
  case "IE":
    console.log("browser : IE");
    break;
  case "Chrome":
    console.log("browser : chrome");
    break;
  case "FireFox":
    console.log("browser : firefox");
    break;
  default:
    console.log("browser : safari");
}

// 11. loops
let i = 5;
while (i > 0) {
  console.log(i);
  i--;
}

// do while
let j = 10;
do {
  console.log(`do while!! ${j}`);
  j--;
} while (j > 0);

// for
for (let i = 1; i <= 5; i++) {
  console.log(`for!! ${i}`);
}

// nested for
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`i : ${i}, j : ${j}`);
  }
}

// use continue
// 짝수 출력
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`i : ${i}`);
}
// 8만나면 반복문 종료
for (let i = 0; i < 11; i++) {
  if (i === 8) {
    console.log(`i : ${i}, 반복문 종료`);
    break;
  }
  console.log(`i : ${i}`);
}
