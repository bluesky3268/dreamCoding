"use strict";

// join : Array -> String
const fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits.join("/"));

// split : String -> Array
const names = "ben, tom, john, adam";
const result = names.split(",");
console.log(result);

// reverse
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
console.log(arr);

// splice, slice
const arr2 = ["a", "b", "c", "d", "e", "f"];
const result2 = arr2.splice(0, 2);
console.log(result2);
console.log(arr2);

const result3 = arr2.slice(0, 2);
console.log(result3);
console.log(arr2);

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student("A", 29, true, 45),
    new Student("B", 30, false, 80),
    new Student("C", 25, true, 90),
    new Student("D", 20, true, 100),
    new Student("E", 35, false, 85),
];

// find
const findStudent = students.find(function (student, index) {
    return student.score === 90;
});
console.log(findStudent);
const findStudent2 = students.find((student) => {
    return student.age > 30;
})
console.log(findStudent2);
// findStudent2 는 아래와 같이 작성할 수도 있음
const findStudent3 = students.find((student) => student.score > 90);
console.log(findStudent3);

// filter
const findEnrolledStu = students.filter((student) => student.enrolled);
for (const student of findEnrolledStu) {
    console.log(student.name);
}

// map
const extractScores = students.map((stu) => `name : ${stu.name}, score : ${stu.score}`);
console.log(extractScores);

// some : 배열의 요소 중 true가 하나라도 있다면 true
const checkScore = students.some((student) => student.score <= 50);
console.log(checkScore);

// every : 배열의 모든 요소가 true일 경우 true
const checkScore2 = students.every((student) => student.score > 40);
console.log(checkScore2);

// reduce : 특정 시작점부터(initial을 지정할 때)모든 배열을 돌면서 값을 누적(return값을 prev에 넘어감)
const calcAvg = students.reduce((prev, curr) => {
    console.log("================");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
}, 0);
console.log(`avg : ${calcAvg/students.length}점`);

// int -> string
const intToString = students.map((student) => student.score).join();
console.log(intToString);
const intToStringOver90 = students.map((student) => student.score).filter((score) => score >= 90).join();
console.log(intToStringOver90);

// sort : asc
// 마이너스값이 리턴되면 1번째 인자가 2번째 인자보다 작음을 뜻함
const scoreAsc = students.map((student) => student.score).sort((a, b) => a - b);
console.log(scoreAsc);
// sort : desc
const scoreDesc = students.map((student) => student.score).sort((a, b) => b - a).join();
console.log(scoreDesc);
