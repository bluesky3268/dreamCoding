// OBJECT
'use strict'
const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const BEN = {name: "Ben", age: 4}; // js에서는 클래스가 없어도 {...}를 이용해서 오브젝트를 생성할 수 있음
print(BEN);
// 뒤늦게 프로퍼티를 추가/삭제할 수도 있음 (하지만 이렇게 안쓰는게 좋음)
BEN.address = "Seoul";
console.log(BEN.address);

delete BEN.address;

// 2. computed properties
console.log(BEN["name"]);
console.log(BEN["age"]);
console.log(BEN["address"]);

// obj[key]와 같은 형식은 아래와 같이 실시간으로 동적데이터를 받아올 때만 사용하고
// 그 밖의 경우에는 자바와 같이 .을 사용함
function printValue(obj, key) {
    console.log(`obj[key] : ${obj[key]}`);
}

printValue(BEN, "name");
printValue(BEN, "age");

// 3. Property value shorthand
const person1 = {name: "tom", age: 10, hobby : "football"};
const person2 = {name: "john", age: 8};
const person3 = {name: "ben", age: 12};

function makePerson(name, age) {
    return {
        name: name,
        age: age
        // js에서는 키와 밸류의 이름이 동일하면 생략할 수 있음 -> 그래서 앞의 name, age 생략 가능
        // name,
        // age
    };
}
const person4 = makePerson("smith", 14);
console.log(person4);

// 4. Constructor function
// 클래스가 js에 없을 때는 3과 같은 방법으로 사용했음 하지만 지금은 순수하게 오브젝트를 생성하는 함수의 이름은 대문자로 시작함
// 그리고 return {}을 쓰는 게 아니라 생성자처럼 만들어서 사용함 (물론 오브젝트를 만들때도 new 키워드를 사용해서 생성함)
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person5 = new Person("ryan", 18);
console.log(person5);

// 5. in operator - property existence check
console.log("name" in Person);
console.log("address" in Person);
console.log("name" in BEN);
console.log("address" in BEN);

console.clear();
// 6. for in vs for of
// for(key in obj)
for (let key in person1) {
    console.log(key);
}

// for(value of iterable)
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(`i[${i}]: ${arr[i]}`);
}
for (let item of arr) {
    console.log(item);
}

// 7. Fun closing
const usr1 = {name: "ben", age: "20"};
const usr2 = usr1;
console.log(usr2);
usr2.name = "tom";
console.log(usr1);

// object 복사 - 기본
const usr3 = {};
for (let key in usr1) {
    usr3[key] = usr1[key];
}
console.clear();
console.log(`usr1 : ${usr1.name}, ${usr1.age}`);
console.log(`usr2 : ${usr2.name}, ${usr2.age}`);
console.log(`usr3 : ${usr3.name}, ${usr3.age}`);

// Object.assign
const usr4 = Object.assign({}, usr3);
console.log(`usr4 : ${usr4.name}, ${usr4.age}`);

const fruit1 = {color: "red"};
const fruit2 = {color: "green", size: "mid"};
const fruit3 = {color: "blue", size : "small", price: "expensive"}
const mixed = Object.assign({}, fruit1, fruit3, fruit2);
// 같은 프로퍼티가 있으면 뒤에 있는 게 앞에 있는 걸 덮어씌움
console.log(`${mixed.color}, ${mixed.size}, ${mixed.price}`);

