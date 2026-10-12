"use strict";
// creating a simple class
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    // properties
    name;
    age;
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //Method
    greeting() {
        return `Hello ${this.name} you are ${this.age} years old`;
    }
}
// creating instances
const person1 = new Person("John", 50);
// property access
console.log(person1.name);
console.log(person1.age);
// application of function of class
console.log(person1.greeting());
// class with constructor with validation
class bankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Initial balance must be zero or above");
        }
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("The amount should be a positive number");
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("The amount should be less than the balance");
        }
        else {
            this.balance -= amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
//create new account
const account = new bankAccount(1, 1500);
console.log(account.getBalance());
//test deposit and withdraw functions
account.deposit(500);
account.withdraw(1000);
console.log(account.getBalance());
// constructor overloading
class Point {
    x;
    y;
    constructor(xOrCoords, y) {
        if (typeof xOrCoords === "object") {
            this.x = xOrCoords.x;
            this.y = xOrCoords.y;
        }
        else if (typeof xOrCoords === "number" && typeof y === "number") {
            this.x = xOrCoords;
            this.y = y;
        }
        else {
            this.x = 0;
            this.y = 0;
        }
    }
    distance(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
const p1 = new Point(3, 4);
const p2 = new Point();
console.log(p1.distance(p2));
// declaration and initialization with parameter properties
class User {
    username;
    email;
    age;
    constructor(username, email, age) {
        this.username = username;
        this.email = email;
        this.age = age;
    }
}
// mixed approach
class appointment {
    patientId;
    patientName;
    time;
    constructor(patientId, patientName) {
        this.patientId = patientId;
        this.patientName = patientName;
        this.time = new Date();
    }
}
const Book_1 = __importDefault(require("./models/Book"));
const book = new Book_1.default("978-0-13-467905-4", "Clean Code", "Robert C. Martin", 464);
book.read(50);
console.log(book.getProgress()); // 10.776...
console.log(book.toString()); // "Clean Code" by Robert C. Martin (50/464 pages)
book.read(414);
console.log(book.isFinished()); // true
book.reset();
console.log(book.getProgress()); // 0
