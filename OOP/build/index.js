"use strict";
const matrix = [[3, 4, 5], [1, 2, 3]];
console.log(matrix[0][1]);
const studentRecord = {
    name: "john",
    grade: 89,
    isGraduated: false
};
const studentRecord2 = {
    name: "bob",
    grade: 60,
    isGraduated: false
};
const t = ["john", 0, false];
const colors = {
    red: "#rrr",
    green: "#ggg",
    blue: "#bbb"
};
console.log(colors.green);
const fetchData = async (url) => {
    const d = await fetch(url);
    const data = await d.json();
    return {
        name: data.name,
        grade: data.grade,
        isGraduated: data.isGraduated
    };
};
// any data type
let value = 43;
value = "John";
// unknown data type
let something = "hello unknown";
if (typeof (something) === "string") {
    console.log(something);
}
// void data type
function area(length, width) {
    console.log(length * width);
}
// never data type
function fail(message) {
    throw new Error(message);
}
function looping() {
    while (true) {
    }
}
// typeof
const sample = { x: 1, y: "two" };
const sample2 = { x: 6, y: "three" };
console.log(sample2);
const random = {
    name: "",
    age: 0
};
// union type: one or more data types
let fname = 67;
fname = "Houssam";
function printId(id) {
    console.log(`ID: ${id}`);
}
const mixed = [4, "hello"];
//type narrowing
function resulting(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed());
    }
}
function soundAnimal(animal) {
    if ("meow" in animal) {
        console.log(animal.meow());
    }
    else {
        console.log(animal.woof());
    }
}
function move(direction) {
    console.log(`Move: ${direction}`);
}
move("left");
function calculateArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "triangle":
            return shape.base * shape.height;
        case "square":
            return shape.length ** 2;
        default:
            const _exhaustive = shape;
            return _exhaustive;
    }
}
// basic function type
let greet;
greet = function (name) {
    return `${name}`;
};
console.log(greet("houssam"));
