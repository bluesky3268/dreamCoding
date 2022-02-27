"use strict";

class Pet {
    constructor(name, color, size, birthDate) {
        this.name = name;
        this.color = color;
        this.size = size;
        this.birthDate = birthDate;
    }

    jump() {
        console.log(`${this.name} jumped!!`);
    }

    toString() {
        console.log(`${this.name}, ${this.color}, ${this.size}, ${this.birthDate}`);
    }
}

// stringify : Object -> Json
let rabbit = new Pet("tori", "white", 5, new Date());
rabbit.jump();
rabbit.toString();
console.log(rabbit);

console.log("\n");
let rabbitToJson = JSON.stringify(rabbit);
console.log(`print json using stringify() => ${rabbitToJson}`);

let rabbitToJson2 = JSON.stringify(rabbit, ["name", "size"]);
console.log(`print json using stringify() => ${rabbitToJson2}`);

console.log("\n");

// parse : Json -> Object
let jsonToRabbit = JSON.parse(rabbitToJson);
console.log(jsonToRabbit);
console.log(typeof jsonToRabbit);
const makeDateType = JSON.parse(rabbitToJson, (key, value) => {
    return key === "birthDate" ? new Date(value) : value;
})
console.log(makeDateType.birthDate.getDate());