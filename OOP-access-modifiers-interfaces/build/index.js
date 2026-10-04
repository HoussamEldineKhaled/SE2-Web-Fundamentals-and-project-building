"use strict";
// modifiers
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// private
class User {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    hashPassword(password) {
        return `hashed_${password}`;
    }
    verifyPassword(password) {
        return this.hashPassword(password) === this.password;
    }
    changePassword(oldpassword, newPassword) {
        if (this.verifyPassword(oldpassword)) {
            this.password = this.hashPassword(newPassword);
            return true;
        }
        return false;
    }
}
// readonly
class Config {
    apiURL;
    maxRetries = 3;
    constructor(apiURL) {
        this.apiURL = apiURL;
    }
}
const config = new Config("hello.com");
console.log(config.apiURL);
// read only arrays
class teams {
    members;
    config;
    constructor(name, maxSize) {
        this.members = [];
        this.config = { name, maxSize };
    }
    addMember(member) {
        this.members = [...this.members, member];
    }
}
// applying interfaces
const animal_1 = __importDefault(require("./models/animal"));
const dog = new animal_1.default("Jabba", "Golden Retriever");
dog.move(10);
dog.bark();
// vehicle interfaces
const vehicles_1 = __importDefault(require("./models/vehicles"));
const car = new vehicles_1.default("Toyota", 2024, "Camry");
// shape interface with super
const shape_1 = __importDefault(require("./models/shape"));
const circle = new shape_1.default("red", 4);
console.log(circle.describe());
console.log(circle.area());
