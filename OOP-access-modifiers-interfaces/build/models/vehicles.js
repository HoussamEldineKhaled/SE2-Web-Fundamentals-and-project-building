"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    brand;
    year;
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
        console.log("vehicle constructor called");
    }
}
class Car extends Vehicle {
    model;
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
        console.log("Car constructor called");
    }
}
exports.default = Car;
