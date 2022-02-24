"use strict";

// ARRAY

// 배열 선언
const arr1 = new Array(10);
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
console.log(arr2[0]);
console.log(arr2[arr2.length - 1]);

console.clear();
for (let i = 0; i < arr2.length; i++) {
    console.log(`arr2[${i}] : ${arr2[i]}`);
}
for (let i of arr2) {
    console.log(i);
}

// arr.forEach(callBack(), thisArg)
arr2.forEach(function (element, index, arr2) {
    console.log(`[${arr2}]의 ${index}번째 요소 : ${element}`);
});
arr2.forEach(function (element) {
    console.log(`element : ${element}`);
});
arr2.forEach(i => console.log(`i : ${i}`));

const obj1 = {name: "ben", age: 5};
const obj2 = {name: "cho", age: 10};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (element) {
    console.log(`${this.name}, ${this.age} - ${element}`);
}, obj1);

arr.forEach(function (element) {
    console.log(`${this.name}, ${this.age} - ${element}`);
}, obj2);

// 배열 추가(push), 삭제(pop), 복사
const array = [1, 2, 3];
array.push(5, 4);
console.log(array);
array.pop();
console.log(array);
// unshift : 앞에서부터 데이터 넣기
array.unshift(6);
console.log(array);
// shift : 앞에서부터 데이터 빼기
array.shift();
console.log(array);
// !! shift, unshift는 pop, push보다 훨씬 느림 -> 배열 내 데이터를 옮겨야 하기 때문에

// 특정 위치 삭제
// array.splice(1, 2);
array.splice(1, 2, 9, 10);
console.log(array);

// 특정 위치 추가
array[4] = 9999;

// combine two arrays
const array2 = [100, 99];
const newArr = array.concat(array2);
console.log(newArr);

// Searching
console.log(newArr.indexOf(100));
console.log(newArr.includes(99));
console.log(newArr.includes(99999));

// lastIndexOf
newArr.push(5);
console.log(newArr.indexOf(5));
console.log(newArr.lastIndexOf(5));
