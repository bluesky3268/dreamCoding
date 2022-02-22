'use strict';
// 클래스를 이용해서 템플릿 만들기

//1. Class Declarations
class Person {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`${this.name} speaks`);
    }
}

// new 키워드를 이용해서 새로운 object생성
const ben = new Person("ben", 20);
console.log(`${ben.name} is ${ben.age} years-old`);
ben.speak();

//2. Getter/Setter
class User{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User("Steve", "Jobs", -2);
console.log(`${user1.age}`);

// 3. public, private fields
class Experiment {
    publicField = 2;
    #privateField = 0; // 클래스 내부에서만 접근할 수 있고 읽고 변경할 수 있음
}

const ex = new Experiment();
console.log(ex.publicField);
console.log(ex.privateField);

// 4. static
// 클래스의 필드와 메서드들은 새로운 오브젝트를 만들때마다 그대로고 필드의 값만 변경해서 사용하는데
// 클래스가 가지는 고유한 값, 메서드들에 static을 붙여서 사용
// 들어오는 데이터에 상관없이 공통적으로 사용하는 필드나 메서드
class Article {
    static publisher = 'Ben';

    constructor(articleNum) {
        this.articleNum = articleNum;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();