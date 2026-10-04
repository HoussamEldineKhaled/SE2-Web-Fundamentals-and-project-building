"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
    describe() {
        return `A ${this.color} shape`;
    }
}
class Circle2 extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    // overriding
    describe() {
        const baseDescription = super.describe();
        return `${baseDescription} with radius ${this.radius}`;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
exports.default = Circle2;
