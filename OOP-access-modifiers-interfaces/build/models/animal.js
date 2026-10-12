"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
    makeSound() {
        console.log("Animal sounds");
    }
}
class Dog extends Animal {
    breed;
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log("3aou 3aou 3aou");
    }
}
exports.default = Dog;
