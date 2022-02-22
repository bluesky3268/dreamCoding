// 1.Variable : 변수
"use strict";

// 글로벌 변수는 애플리케이션이 실행될 때부터 종료될 때까지 항상 메모리에 떠 있기 때문에
// 최소한으로 쓰는 것이 좋음 (가능한 클래스, 함수등 필요한 부분에서만 정의해서 사용하는 것이 좋음)
let globalName = "global name";
{
  let name = "ben";
  console.log(name);
}
console.log(globalName);
console.log(name);

// let ES6에 추가 된 변수 선언, let 이전에는 var를 사용했는데 절대 사용하지 말 것
// hoisting : 어디서 변수가 선언되었는지 상관없이 변수의 선언을 가장 위로 올려주는 것

// 2. Constants : 상수
const dayInWeek = 7;
const maxNum = 5;

// 3. Variable types
// primitive : number, string, boolean, null, undefined, symbol 등 ->  더이상 나눠질 수 없는 single item
// object : function, first class function -> single item들은 하나로 묶어서 box로 관리할 수 있게 해줌
// 3-1 number
let a = 12;
// let a : number = 12; -> 타입스크립트는 이렇게 변수의 타입을 선언해줘야 함

// 나누고자 하는 값이 0인지 숫자인지 확인 하는 것은 상당히 중요함 (특히 DOM에서 좌표를 사용할 때)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt가 추가됨(크롬, 파이어폭스만 지원되기 때문에 아직 사용하지 않는 걸 추천)
const bigInt = 1232131231231231231231231231231231n; // 숫자 뒤에 n을 붙여주면 됨
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// 3-2 string
const char = "c";
const ben = "ben";
const greeting = "hello " + ben;
console.log(`value : ${greeting}, type : ${typeof greeting}`);

const hiBen = `hi ${ben}!`; // template literals
console.log(`value : ${hiBen}, type : ${typeof hiBen}`);

// 3-3 boolean
// false : 0, null, undefined, NaN, ''
// true : false가 아니면 true
const canRead = true;
const test = 3 < 1;
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// 3-4 null , undefined
// null : 텅텅 빈 값으로 지정해줌  -> 값이 할당되어 있는 상태
// undefined : 선언은 되었지만 아무 값이 지정되지 않은 상태 -> 텅텅 비었는지 값이 들어가 있는지 정해지지 않은 상태
let noting = null;
let undef = undefined;

console.log(`value : ${noting}, type : ${typeof noting}`);
console.log(`value : ${undef}, type : ${typeof undef}`);

// 3-5 symbol
// Map 등의 자료구조에서 고유한 식별자가 필요하거나 동시성 문제시 우선순위를 줄 때 사용됨
// string을 쓰는 경우도 있지만 다른 모듈에서 동일한 string을 사용하면 동일하게 식별됨
// 출력할 때는 항상 .description을 사용해야 함
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${gSymbol1.description}, type : ${typeof gSymbol1}`);

// 4. object
const benn = { name: "ben", age: 20 };
console.log(`name : ${benn.name}, age : ${benn.age}, type : ${typeof benn}`);

// 5. Dynamic Typing
// 자바스크립트는 런타임에서 변수의 타입이 정해지기 때문에 이와 관련된 에러가 굉장히 많이 발생함
// -> 그래서 타입스크립트가 나옴
let txt = "hello";
console.log(`value : ${txt}, type : ${typeof txt}`);
txt = 100;
console.log(`value : ${txt}, type : ${typeof txt}`);
// txt의 타입이 string -> number 로 바뀜
txt = "100" + 100;
console.log(`value : ${txt}, type : ${typeof txt}`);
txt = "100" / "5";
console.log(`value : ${txt}, type : ${typeof txt}`);
